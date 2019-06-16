// Phase 1 (Character Selection)
$(document).ready(function(){
    // Universal variable shortcut HTML elements
    var battleArea = $('.select-box');
    var usrArea = $('.bottom-box');
    var stats = $('.misc-box');
    var fightButton = $('#fight-btn');
    var resetButton = $('#reset-btn');
    // Characters defined w/ statistics as properties
    var char = {
        "Char1": {
        class: "knight",
        health: 100,
        atk: 45,
        revAtk: 50,
        hitchance: 0.5,
        imageUrl: "./assets/images/knight.png"
    },
        "Char2": {
        class: "thief",
        health: 75,
        atk: 30,
        revAtk: 70,
        hitchance: 0.75,
        imageUrl: "./assets/images/thief.png"
    },
        "Char3": {
        class: "sorcerer",
        health: 40,
        atk: 100,
        revAtk: 100,
        hitchance: 0.25,
        imageUrl: "./assets/images/sorcerer.png"
    }
    };
    // Battle area selection shortcuts
    var selA = $('#pick1');
    var selB = $('#pick2');
    var avatarA = $('#fighter');
    var avatarB = $('#defender');
    // Character Selection Guidelines
    var selection = false;
    var cpuChoice = 0;
    var cpuPick = [];
    var usrPick = [];
    // Hiding 2nd Phase (In-Battle)
    fightButton.hide();
    resetButton.hide();
    battleArea.hide();
    stats.hide();
    $('#sel-area-text').text('Choose Your Character');
    // Phase 2 (Battle Stage)
    function gameStart(){
    $('.btn').on('click', function() {
        var usrChoice = this.value;
        // I'm still surprised that this took a long time to figure out, and that it even worked!
        if (usrChoice < 2){
            usrChoice = char.Char1;
        }else if (usrChoice > 2) {
            usrChoice = char.Char3;
        }else {
            usrChoice = char.Char2;
        }
        
        // End of previous contextual statement above referring to in-between code.
        $('#sel-area-text').text('Begin!');
        fightButton.show();
        resetButton.show();
        battleArea.show();
        stats.show();
        usrArea.hide();
        selection = true;
        charImage = $("<img alt='image' id='pick1'>").attr("src", usrChoice.imageUrl);
        charDiv = $("<div id='fighter'>");
        // Delay character image loading isn't working. Stopped caring, on-going next problem.
        $(selA).append(charImage).delay(800).fadeIn();
        
        // 
        if (selection = true) {
            // CPU selection from array is then put into opposing side
            // alert('Your opponent is selecting a character!');
            cpuChoice = getMyEnemy();
            enemyImage = $("<img alt='image-2' id='pick2'>").attr("src", cpuChoice.imageUrl);
            enemyDiv = $("<div id='defender'>");
            $(selB).append(enemyImage).delay(1600).fadeIn();
            usrPick.push(usrChoice);
            cpuPick.push(cpuChoice);
            for (var i = 0; i < cpuPick.length; i++); 
            for (var i = 0; i < usrPick.length; i++);
            $(avatarA).prepend(charDiv);
            $(avatarB).prepend(enemyDiv); 
        }
        
    });
        // CPU auto selects from character pool
        function getMyEnemy() {
        randomNumber = Math.floor((Math.random() * 3) + 1);
        if (randomNumber < 2){
            cpuChoice = char.Char1;
        }else if (cpuChoice > 2) {
            cpuChoice = char.Char3;
        }else {
            cpuChoice = char.Char2;
        }
        return cpuChoice;
        };
        // Where the battle functions are called conditionally
        $('#fight-btn').on('click', function() {
            randomNumber = Math.floor((Math.random() * 100) + 1);
            if (randomNumber > 50) {
                atkProc();
                console.log(randomNumber)
            }else if (randomNumber < 50) {
                alert('You missed!');
                cpuRevProc();
            }else {
                alert('You both missed!')
            }
            if (usrPick[0].health--) {
                usrRevProc();
            }
            // End Game
            if (cpuPick[0].health < 1 || usrPick[0].health < 1) {
                alert("And That's All Folks!");
                $('#fight-btn').off('click');
            };

            // cpuPick[0].health -= usrPick[0].atk;
            // console.log('Their HP: '+ cpuPick[0].health);
            // alert('You atked ' + cpuPick[0].class);
            // // End Game
            // if (cpuPick[0].health < 1 || usrPick[0].health < 1) {
            //     alert("And That's All Folks!");
            //     $('#fight-btn').off('click');
            // };
            // usrPick[0].health -= cpuPick[0].atk * cpuPick[0].hitchance;
            // console.log('Your HP: ' + usrPick[0].health);
        });
        function atkProc() {
            cpuPick[0].health -= usrPick[0].atk;
            alert('You attacked ' + cpuPick[0].class + ' for: ' + usrPick[0].atk);
            console.log('Their HP: '+ cpuPick[0].health);            
            };
        function cpuRevProc() {
            usrPick[0].health -= cpuPick[0].revAtk * cpuPick[0].hitchance;
            alert(cpuPick[0].class + ' countered'  + ' for: ' + cpuPick[0].revAtk);
            console.log('Your HP: ' + usrPick[0].health);

        };
        function usrRevProc() {
            cpuPick[0].health -= usrPick[0].revAtk * usrPick[0].hitchance;
            alert('You countered ' + cpuPick[0].class  + ' for: ' + usrPick[0].revAtk);
            console.log('Their HP: ' + cpuPick[0].health);

        };
    };

    gameStart();
});