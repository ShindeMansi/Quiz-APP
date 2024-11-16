const question=[
    {
        question:"Which is NoSql Database?",
        answers:[
            {text:"MySql",correct:false},
            {text:"PostgreSQL",correct:false},
            {text:"MongoDB",correct:true},
            {text:"Microsoft SQL Server",correct:false},
        ]
    },
    {
        question:"Which is not pillar Of OOPs",
        answers:[
            {text:"Inheritance",correct:false},
            {text:"Abstraction",correct:false},
            {text:"Static",correct:true},
            {text:"Encapsulation",correct:false},
        ]
    }
    ,
    {
        question:"Which of the following is not feature of Java",
        answers:[
            {text:"Dynamic",correct:false},
            {text:"Use of pointers",correct:true},
            {text:"Architecture Neutral",correct:false},
            {text:"Object Oriented",correct:false},
        ]
    }
    ,
    {
        question:"_______ is used to find and fix bugs in java program",
        answers:[
            {text:"JVM",correct:false},
            {text:"JRE",correct:false},
            {text:"JDK",correct:false},
            {text:"JDB",correct:true},
        ]
    },
    {
        question: "Which of the following is a reserved keyword in Java?",
        answers:[
            {text:"object",correct:false},
            {text:"strictfp",correct:true},
            {text:"main",correct:false},
            {text:"system",correct:false},
        ]
    }
];

const questionElement=document.getElementById("quetion");
const answerElement=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuetionindex=0;
let score=0;

function startQuiz()
{
    currentQuetionindex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuetion();
}

function showQuetion()
{
    resetState();
    let currentQuetion=question[currentQuetionindex];
    let quetNo=currentQuetionindex+1;
    questionElement.innerHTML=quetNo+". "+currentQuetion.question

    currentQuetion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState()
{
    nextButton.style.display="none";
    while(answerElement.firstChild)
    {
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button=>
        {
            if(button.dataset.correct==="true")
            {
                button.classList.add("correct");
                
            }
            button.disabled=true;
        });
        nextButton.style.display="block";
}

function showScore()
    {
        resetState();
        questionElement.innerHTML=`You Scored ${score} out of ${question.length}!`
        nextButton.innerHTML="play Again";
        nextButton.style.display="block";
    }


function handleNextButton()
{
    currentQuetionindex++;
    if(currentQuetionindex<question.length)
    {
        showQuetion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuetionindex<question.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();