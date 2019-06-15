var battleArea = $('.select-box');
var usrArea = $('.bottom-box');
var avatar = $('.btn');
// 
var char = [
    {
    class: 'knight',
    health: 100,
    attack: 45,
    counter: 50
    },
    {
    class: 'thief',
    health: 75,
    attack: 30,
    counter: 70
    },
    {
    class: 'sorcerer',
    health: 35,
    attack: 100,
    counter: 100

    }
];
var knight = char[0];
var thief = char[1];
var sorcerer = char[2];
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
});
};

gameStart();