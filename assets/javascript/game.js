var cpuArea = $('.top-box');
var usrArea = $('.bottom-box');
var avatar = $('.btn');
// 
var char = ['char1' = {
    class: 'knight',
    health: 100,
    attack: 45,
    counter: 50
},
'char2' = {
    class: 'thief',
    health: 75,
    attack: 30,
    counter: 70
},
'char 3' = {
    class: 'sorcerer',
    health: 35,
    attack: 100,
    counter: 100

}];
var knight = $('#char1');
var thief = $('#char2');
var sorcerer = $('#char3');
// 
var selA = $('#pick1');
var selB = $('#pick2');
var selection = false;

function gameStart(){
$('.btn').on('click', function() {
    var usrChoice = this;
    $('#sel-area-text').text('You Picked:');
    selA.append(usrChoice);
    selection = true;
    if (selection = true){
        selB.append(usrChoice);
    };
    if (selA & selB === usrChoice) {
        selection = false;
    }
});
};

gameStart();