// Phase 1 (Character Selection)
$(document).ready(function(){
    // Universal variable shortcut HTML elements
    var battleArea = $('.select-box');
    var usrArea = $('.bottom-box');
    var avatar = $('.btn');
    var inBattleArea = $('.misc-box');
    var fightButton = $('#fight-btn');
    var resetButton = $('#reset-btn');
    // Characters defined w/ statistics as properties
    var char = {
        "Char1": {
        class: "knight",
        health: 100,
        attack: 45,
        counter: 50,
        imageUrl: "./assets/images/knight.png"
    },
        "Char2": {
        class: "thief",
        health: 75,
        attack: 30,
        counter: 70,
        imageUrl: "./assets/images/thief.png"
    },
        "Char3": {
        class: "sorcerer",
        health: 40,
        attack: 100,
        counter: 100,
        imageUrl: "./assets/images/sorcerer.png"
    }
    };
    // Battle area selection shortcuts
    var selA = $('#pick1');
    var selB = $('#pick2');
    // Character Selection Guidelines
    var selection = false;
    var cpuChoice = 0;
    // Hiding 2nd Phase (In-Battle)
    fightButton.hide();
    resetButton.hide();
    battleArea.hide();
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
        usrArea.hide();
        selection = true;
        charImage = $("<img alt='image' id='pick1'>").attr("src", usrChoice.imageUrl);
        $(selA).append(charImage);
        // 
        if (selection = true) {
            // CPU selection from array is then put into opposing side
            cpuChoice = getMyEnemy(cpuChoice);
            enemyImage = $("<img alt='image-2' id='pick2'>").attr("src", cpuChoice.imageUrl);
            $(selB).append(enemyImage);
            console.log(usrChoice);
            console.log(cpuChoice);
        }
    });
        // CPU auto selects from character pool
        function getMyEnemy(cpuChoice) {
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
    };

    gameStart();
});