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
    $('#reset.btn').click(function() {
            location.reload();
            console.log('This does something.');
    });
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
        $(selA).append(charImage);
        
        // 
        if (selection = true) {
            // CPU selection from array is then put into opposing side
            // alert('Your opponent is selecting a character!');
            cpuChoice = getMyEnemy();
            enemyImage = $("<img alt='image-2' id='pick2'>").attr("src", cpuChoice.imageUrl);
            enemyDiv = $("<div id='defender'>");
            $(selB).append(enemyImage);
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
            // Updates Stats
            statFooter();
            // You attack starting the battle process
            // If missed, starts counter attack process
            setTimeout(atkProc, 3000);
            // Update stats
            statFooter();
            // CPU attacks back.
            // Same but usr w/ prerogative, starts counter attack process
            setTimeout(cpuAtkProc, 5000);
            // Update stats
            statFooter();
            // End Game
            if (cpuPick[0].health < 1 || usrPick[0].health < 1) {
                // alert("And That's All Folks!");
                $('#fight-btn').off('click');
                // Final stat update
                statFooter();
            };
            // One more for good measure, stat update
            statFooter();
        });
        function atkProc() {
            console.log('Battle Process Starts!');
            console.log('----------');
            console.log('Atk Phase');
            console.log('----------');
            // alert('You Attack!');
            randomNumber = Math.floor((Math.random() * 100) + 1);
            console.log('Your Hitchance roll: ' + randomNumber);
            if (randomNumber === (usrPick[0].hitchance * 100) || randomNumber > (usrPick[0].hitchance * 100)) {
            cpuPick[0].health -= usrPick[0].atk;
            // alert('You attacked ' + cpuPick[0].class + ' for: ' + usrPick[0].atk);
            console.log('Your Attack was Sucessful!');
            console.log('Their HP: '+ cpuPick[0].health);
            console.log('End of Atk Phase');
            console.log('----------');
            }else {
            // alert('You missed!');
            console.log('Your attack missed!');
            console.log('End of Atk Phase');
            console.log('----------');
            // Starts counter attack process if missed
            setTimeout(cpuRevProc, 3500);

            }            
        };
        function cpuAtkProc() {
            console.log('Def Phase');
            console.log('----------');
            // alert('Enemy Attacks!');
            randomNumber = Math.floor((Math.random() * 100) + 1);
            console.log('Enemy Hitchance roll: ' + randomNumber);
            if (randomNumber === (cpuPick[0].hitchance * 100) || randomNumber > (cpuPick[0].hitchance * 100)) {
            usrPick[0].health -= cpuPick[0].atk;
            // alert(cpuPick[0].class + ' countered'  + ' for: ' + cpuPick[0].revAtk);
            console.log('Enemy Attack was Sucessful!');
            console.log('Their HP: '+ cpuPick[0].health);
            console.log('End of Def Phase');
            console.log('----------');
            }else {
            // alert('Enemy missed!');
            console.log('Enemy Attack missed!')
            console.log('End of Def Phase');
            console.log('----------'); 
            setTimeout(usrRevProc, 5500);
            console.log('Battle Process Ended!');
            console.log('----------');
            }
        };
        function cpuRevProc() {
            console.log('Counter Def Phase');
            console.log('----------');
            // alert('Enemy Counter Attacked!');
            randomNumber = Math.floor((Math.random() * 100) + 1);
            console.log('Enemy Hitchance roll: ' + randomNumber);
            if (randomNumber === (cpuPick[0].hitchance * 100) || randomNumber > (cpuPick[0].hitchance * 100)) {
            usrPick[0].health -= cpuPick[0].revAtk;
            // alert(cpuPick[0].class + ' countered'  + ' for: ' + cpuPick[0].revAtk);
            console.log('Enemy Counter Attack was Successful!');
            console.log('Your HP: ' + usrPick[0].health);
            console.log('End of Enemy Counter Phase');
            console.log('----------');
            }else {
                // alert('Enemy Counter Attack missed!');
                console.log('Enemy Counter missed!');
                console.log('End of Counter Def Phase');
                console.log('----------');                
            }
        };
        function usrRevProc() {
            console.log('Counter Atk Phase');
            console.log('----------');
            // alert('You Counter Attacked!');
            randomNumber = Math.floor((Math.random() * 100) + 1);
            console.log('Your Hitchance roll: ' + randomNumber);
            if (randomNumber === (usrPick[0].hitchance * 100 || randomNumber > (usrPick[0].hitchance * 100))) {
            cpuPick[0].health -= usrPick[0].revAtk;
            // alert('You countered ' + cpuPick[0].class  + ' for: ' + usrPick[0].revAtk);
            console.log('Your Counter Attack was Successful!');
            console.log('End of Counter Atk Phase');
            console.log('----------');
            console.log('Battle Process Ended!');
            console.log('----------');
            console.log('Their HP: ' + cpuPick[0].health);
            }else {
                // alert('Your Counter Attack missed!');
                console.log('Your Counter missed!');
                console.log('End of Counter Atk Phase');
                console.log('----------');
                console.log('Battle Process Ended!');
                console.log('----------');                
            };

        };
        function statFooter() {
            yourName = usrPick[0].class;
            yourHP = usrPick[0].health;
            enemyName = cpuPick[0].class;
            enemyHP = cpuPick[0].health;
            $('#misc3').text("You: "+ yourName.charAt(0).toUpperCase() + yourName.slice(1));
            $('#misc1').text("Your Remaining HP: "+ yourHP);
            if (yourHP < 1) {
                $('#misc1').append().text("He's Dead Jim.")
            };
            $('#misc4').text("Enemy: "+ enemyName.charAt(0).toUpperCase() + enemyName.slice(1));
            $('#misc2').text("Enemy Remaining HP: "+ enemyHP);
            if (enemyHP < 1) {
                $('#misc2').append().text("He's Dead Jim.")
            };
            // console.log(("You: "+ yourName.charAt(0).toUpperCase() + yourName.slice(1)));
            // console.log("Your Remaining HP: "+ yourHP);
            // console.log("Enemy: "+ enemyName.charAt(0).toUpperCase() + enemyName.slice(1));
            // console.log("Enemy Remaining HP: "+ enemyHP);
        };
        
        
        
    };
    
    gameStart();
});