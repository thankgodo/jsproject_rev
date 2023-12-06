

const quizData = [
    {
        question: "Q1: Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "javascript",
        correct: "c",
    },
    {
        question: "Q2: What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        correct: "b",
    },
    {
        question: "Q3: What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        correct: "a",
    },
    {
        question: "Q4: What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        correct: "b",
    },
    {
        question: 'Q5: How do you declare a JavaScript variable?',
            a: 'var carName;',
            b: 'variable carName;',
            c: 'carName =variable;',
            correct: "a",
    },
    {
        question: 'Q6: Which event occurs when the user clicks on an HTML element?',
            a: 'onmouseover',
            b: 'onmouseclick',
            c: 'onclick',
            correct: "c",
    },
    {
        question: 'Q7: What is the correct way to write a JavaScript array?',
            a: 'var colors = ["red", "green", "blue"]',
            b: 'var colors = (1:"red", 2:"green", 3:"blue")',
            c: 'var colors = "red", "green", "blue"',
            correct: "a",
    },
    {
        question: 'Q8: How can you detect the client browser name?',
            a: 'browser.name  ',
            b: 'navigator.appName ',
            c: 'client.navName',
            correct: "b",
    },
    {
        question: 'Q9: How do you find the number with the highest value of x and y?',
            a: 'Math.ceil(x, y) ',
            b: 'Math.max(x, y) ',
            c: 'ceil(x, y)',
            correct: "b",
    },
    {
        question: 'Q10: How to insert a comment that has more than one line?',
            a: '//This comment has more than one line// ',
            b: '/*This comment has more than one line*/',
            c: '<!--This comment hasmore than one line-->',
            correct: "b",
    },
    {
        question: 'Q11: How can you add a comment in a JavaScript?',
            a: '<!--This is a comment-->',
            b: 'This is a comment',
            c: '//This is a comment ',
            correct: "c",
    },
    {
        question: 'Q12: How does a FOR loop start?',
            a: '(i = 0; i <= 5; i++)',
            b: '(i <= 5; i++)',
            c: '(i = 0; i <= 5)',
            correct: "a",
    },
    {
        question: 'Q13: How does a WHILE loop start?',
            a: 'while (i <= 10; i++)',
            b: 'while (i <= 10)',
            c: 'while i = 1 to 10',
            correct: "b",
    },
    {
        question: 'Q14: How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            a: 'if i =! 5 then' ,
            b: 'if (i != 5)',
            c: 'if i <> 5',
            correct: "b",
    },
    {
        question: 'Q15: How to write an IF statement in JavaScript?',
            a: 'if i = 5 ',
            b: 'if i == 5 then',
            c: 'if (i == 5)',
            correct: "c",
    },
    {
        question: 'Q16: How do you call a function named "myFunction"?',
            a: 'call function myFunction()' ,
            b: 'call myFunction()',
            c: 'myFunction()',
            correct: "c",
    },
    {
        question: 'Q17: How do you write "Hello World" in an alert box?',
            a: 'msgBox("Hello World");' ,
            b: 'alert("Hello World");',
            c: 'alertBox("Hello World");',
            correct: "b",
    },
    {
        question: 'Q18: What is the correct syntax for referring to an external script called "xxx.js"?',
            a: '<script src="xxx.js">',
            b: '<script name="xxx.js">',
            c: '<script href="xxx.js">',
            correct: "a",
    },
    {
        question: "Q19: Where is the correct place to insert a JavaScript?",
            a: 'The <body> section' ,
            b: 'The <head> section',
            c: 'Both the <head> section and the <body> section are correct',
            correct: "c",
    },
    {
        question: 'Q20: What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
            a: "document.getElementById('demo').innerHTML = 'Hello World!'",
            b: 'document.getElement("p").innerHTML = "Hello World!";',
            c: '#demo.innerHTML = "Hello World!";',
            correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const nextBtn = document.getElementById('next')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer = ''
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
nextBtn.addEventListener('click', () => {
    const answer = getSelected()
    
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
           let grade = 0
       } else if(currentQuiz = quizData.length && (score/quizData.length*100) >= 70) {
            grade = (score/quizData.length*100)
        quiz.innerHTML = `
        <h2> Congratulations! You passed ${score}/${quizData.length} Your grade is: ${grade}%</h2>
        <button onclick="endQ()">End Quiz</button>
        `

       } else {
        grade = (score/quizData.length*100)
           quiz.innerHTML = `
           <h2>You only answered ${score}/${quizData.length} questions correctly. Your grade is: ${grade}%</h2>
           <button onclick="location.reload()">Try again</button>
           `
       }
   
})
    function endQ(){
        quiz.innerHTML = `
        <h2> Thanks and goodbye!</h2>`
    }
