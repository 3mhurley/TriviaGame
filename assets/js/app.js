// Global vars
    var intervalId;
    var qTimeout;
    var clock = false;
    var time = 15;

// Object
    var trivia = {
        questions: [],
        gameStart: false,
        iteration: 0,
        correct: 0,
        incorrect: 0,
        q1: {
            q: 'What year was the first satellite, Sputnik, launched?',
            a: 'October 4th, 1957 by the USSR',
            img: "src='../images/sputnik.jpg' alt='sputnik'",
            c: [['1957', true],['1959', false],['1962', false],['1955', false]],
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


// JQuery
$(document).ready(function (){

// Functions
    function startGame() {
        // Hide Start Button
        $("#startBtn").toggleClass("visible",false);
        $("#startBtn").toggleClass("invisible",true);

        // Set Question Order
        trivia.questions = [trivia.q1, trivia.q2, trivia.q3, trivia.q4, trivia.q5];
        console.log(trivia.questions);
        
        // Call Questions function
        nextQuestion(trivia.questions,trivia.iteration);

    }

    function resetGame() {
        // Hide results

        // Hide Reset Button

        // Show Start Button

    }

    function nextQuestion(param,i) {
        // Show Timer
        time = 15;
        $("#timer").text(`${time} Seconds Remaining`);
        run();

        // Show Question
        $("#question").text(param[i].q);

        // Create Choices
        $("#choices").append(`<div class="btn-group-vertical"></div>`);
        $("#choices").children().append(`<br>`);
        $("#choices").children().append(`<button type="button" class="choice btn btn-outline-secondary btn-lg btn-block rounded" answer="${param[i].c1[1]}"> ${param[i].c1[0]} </button>`);
        $("#choices").children().append(`<br>`);
        $("#choices").children().append(`<button type="button" class="choice btn btn-outline-secondary btn-lg btn-block rounded" answer="${param[i].c2[1]}"> ${param[i].c2[0]} </button>`);
        $("#choices").children().append(`<br>`);
        $("#choices").children().append(`<button type="button" class="choice btn btn-outline-secondary btn-lg btn-block rounded" answer="${param[i].c3[1]}"> ${param[i].c3[0]} </button>`);
        $("#choices").children().append(`<br>`);
        $("#choices").children().append(`<button type="button" class="choice btn btn-outline-secondary btn-lg btn-block rounded" answer="${param[i].c4[1]}"> ${param[i].c4[0]} </button>`);

    }

    function questionResults(param) {
        stop();
        // Remove Choices
        $("#choices").empty();

        // Show Answer
        $("#question").text(trivia.questions[trivia.iteration].a);

        // Call Timer
        time = 10;
        $("#timer").text(`Next Question in ${time} Seconds`);
        run();

        // Correct vs Incorrect
        if (param) {
            trivia.correct++
        } else {
            trivia.incorrect++
        }

        trivia.iteration++

        if (trivia.iteration === trivia.questions.length) {
            finalResults()
        } else {
            nextQuestion(trivia.questions,trivia.iteration);        
        }

    }

    function finalResults() {
        // Hide Question Results
        

        // Show Results
        $("#question").text(trivia.questions[trivia.iteration].a);

        // Show Reset Button
        $("#resetBtn").toggleClass("visible",true);
        $("#resetBtn").toggleClass("invisible",false);
    }

// Timer
    function run() {
        stop();
        intervalId = setInterval(timer, 1000);
    }

    function timer() {
        time--;
        $("#timer").text(`${time} Seconds Remaining`);

        if (time === 0) {
            stop();
            time = 15;
            questionResults(false);
        } else {
            $('.choice').on('click', function() {
                stop();
                console.log($(this).attr('answer'));
                questionResults($(this).attr('answer'));
            });
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

// Start Button
    $('#startBtn').on('click', startGame);

// Reset Button
    $('#resetBtn').on('click', resetGame);

// Choose Answer



});
