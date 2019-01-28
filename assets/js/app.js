// Object
var trivia = {
    gameStart: false,
    correct: 0,
    incorrect: 0,
    intervalId: ,
    clock: false,
    time: 0,
    q1: {
        q: 'What year was the first satellite, Sputnik, launched?',
        a: 'October 4th, 1957 by the USSR',
        img: "src='../images/sputnik.jpg' alt='sputnik'",
        c1: ['1957', true],
        c2: ['1959', false],
        c3: ['1962', false],
        c4: ['1955', false]
    },
    q2: {
        q: 'What shocked astronauts most about their walk on the Moon?',
        a: 'The smell; apparently the Moon really stinks!',
        img: "src='../images/moon_surface.png' alt='moon_surface'",
        c1: ['The gravity', false],
        c2: ['The darkness', false],
        c3: ['The texture', false],
        c4: ['The smell', true]
    },
    q3: {
        q: 'What year was the National Aeronautics and Space Administration (NASA) established?',
        a: 'October 1st, 1958 replacing NACA (the National Advisory Committee on Aeronautics)',
        img: "src='../images/nasa.png' alt='nasa'",
        c1: ['1949', false],
        c2: ['1958', true],
        c3: ['1962', false],
        c4: ['1971', false]
    },
    q4: {
        q: 'What was the first animal launched into space?',
        a: 'A dog name Laika',
        img: "src='../images/space_dog.jpg' alt='space_dog'",
        c1: ['Dog', true],
        c2: ['Monkey', false],
        c3: ['Bird', false],
        c4: ['Pig', false]
    },
    q5: {
        q: 'How many people have walked on the Moon?',
        a: '12. Neil Armstrong, Buzz Aldrin, Pete Conrad, Alan Bean, Alan Shepard, Edgar Mitchell, David Scott, James Irwin, John Young, Charles Duke, Jack Schmitt, Eugene Cernan',
        img: "src='../images/moon_walk.jpg' alt='moon_walk'",
        c1: ['2', false],
        c2: ['10', false],
        c3: ['6', false],
        c4: ['12', true]
    },
}

// Functions
function startGame() {}

function resetGame() {}

function nextQuestion(params) {}

function questionResults(params) {}

function finalResults(params) {}

    // Timer
    function startTime(params) {
        if (!trivia.clockRunning) {
            trivia.intervalId = setInterval(count, 1000);
            clockRunning = true;
        }
    }

    function endTime(params) {
        
    }

// JQuery
$(document).ready(function (){

// Start Button
$('#startBtn').on('click', function(){
    startGame();
});

// Reset Button
$('#resetBtn').on('click', function(){
    resetGame();
});


});