
    
    var lib = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        A:"&lt;script&gt;",
        B:"&lt;scripting&gt;",
        C:"&lt;js&gt;",
        D:"&lt;javascript&gt;",
        answer: "A",
    },

    {
        question: "Which company developed JavaScript?",
        A:"Netscape",
        B:"Bell Labs",
        C:"Sun Microsystems",
        D:"IBM",
        answer: "A",
    },

    {
        question: "Which of the following is correct about features of JavaScript?",
        A:"It cannot handle dates and time",
        B:"JavaScript is an object-based scripting language",
        C:"JavaScript is not interpreter based scripting language",
        D:"All of the above",
        answer: "B",
    },

    {
        question: "JavaScript is designed for following purpose.",
        A:"To style HTML pages",
        B:"To execute Queries related to databases on a server",
        C:"To add interactivity to html pages",
        D:"All of the above",
        answer: "D",
    },

    {
        question: "What are the three important manipulations done in a for loop on a loop variable in javascript?",
        A:"the initialization, the Incrementation, and update",
        B:"the initialization, the test, and the update",
        C:"the initialization, the test, and Incrementation",
        D:"All of the above",
        answer: "B",
    }
]


var count = 0;
var timeleft = 10;
var listname = [];

var questions = document.getElementById("questions")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var start = document.getElementById("start");


var timeinterval;

function init() {

    var count = 0;
    timeinterval = setInterval(countdown,1000);
    document.getElementById("timer").innerHTML=timeleft;




   start.style.display= "none";
   choiceA.style.display = "block"; 
   choiceB.style.display = "block"; 
   choiceC.style.display = "block"; 
   choiceD.style.display = "block";
   
   questions.innerHTML = lib[count].question;
   choiceA.innerHTML = lib[count].A;
   choiceB.innerHTML = lib[count].B;
   choiceC.innerHTML = lib[count].C;
   choiceD.innerHTML = lib[count].D;

   
}
var score = 0;





function next(){


    if (count === lib.length -1){
        results();
    }

    else {
        var user = event.target.id;
        if (user === lib[count].answer) {
            timeleft +=5;
            score +=5;
            document.getElementById("alert").innerHTML ="Correct!";
            document.getElementById("score").innerHTML = score;
        }
        else {
            timeleft -=5;
            document.getElementById("timer").innerHTML=timeleft;
            document.getElementById("alert").innerHTML ="Wrong!";
            document.getElementById("score").innerHTML = score;

        }
    count+=1;

    questions.innerHTML = lib[count].question;
    choiceA.innerHTML = lib[count].A;
    choiceB.innerHTML = lib[count].B;
    choiceC.innerHTML = lib[count].C;
    choiceD.innerHTML = lib[count].D;

    }
}





function countdown() {
    // setInterval(() => {
    //     if (timeleft <= 0 || count === lib.length) {
    //         results()
    //         clearInterval();
            
    // }
        
    if (timeleft <= 0) {
        results();
    }
    

        timeleft -= 1;
        document.getElementById("timer").innerHTML=timeleft;
    // }, 1000);
    
}






function  results() {
    clearInterval(timeinterval);
    document.getElementById("questionboard").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("timer").style.display = "none";
}


function storescore() {

    var highscore = JSON.parse(localStorage.getItem("score")) || [];
    var names = document.getElementById("name").value;

    
    var scoreobject = {
        name:names,
        score:score,
    }
    
    highscore.push(scoreobject);
    // listname.push(names);
    // localStorage.setItem("name", listname);
    localStorage.setItem("score", JSON.stringify(highscore));

}

function highscores() {
    
    document.getElementById("highscoreboard").style.display = "block";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("questionboard").style.display = "none";


    var currentleaderboard = JSON.parse(localStorage.getItem("score"));
    
    document.getElementById("listname").innerHTML = "";
    document.getElementById("highscore").innerHTML = "";

    currentleaderboard.sort((a,b) => {return b.score - a.score});

    for (let i = 0; i < currentleaderboard.length; i++) {
        document.getElementById('listname').innerHTML += "<li> " + currentleaderboard[i].name + "</li>";;
        document.getElementById('highscore').innerHTML += "<li> " + currentleaderboard[i].score + "</li>";;

    }

    
}


function back() {
    location.reload();
}

function clearscore() {
    currentleaderboard = [];
    localStorage.clear();
    document.getElementById("listname").innerHTML = "";
    document.getElementById("highscore").innerHTML = "";
}