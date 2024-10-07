function checkAnswer(){
    const correctAnswer = '4'

    const userAnswer = document.querySelector('input[name = "quiz"]:checked').value ;
    const feedBack = document.querySelector('#feedback')

    if(userAnswer == correctAnswer){
        feedBack.textContent = 'Correct! Well done.'
    } else {
        feedBack.textContent = "That's incorrect. Try again!"
    }
}

const submit = document.querySelector('#submit-answer')
submit.addEventListener('click',checkAnswer)
