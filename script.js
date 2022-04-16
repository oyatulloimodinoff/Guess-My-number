const againBtn = document.querySelector('.again')
const checkBtn = document.querySelector('.check')
const guess = document.querySelector('.guess')
const number = document.querySelector('.number')
const message = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const highscoreEl = document.querySelector('.highscore')
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const againId = document.getElementById('again')


// score
let score = 20

// heightscore
let heightscore = 0

// RANDOM NUMBER

let randomNumber = Math.floor(Math.random() * 20) + 1


checkBtn.addEventListener('click', () => {
    if ( guess.value) {
        if (guess.value == randomNumber) {
            message.textContent = 'You are win'
            number.textContent = randomNumber
            body.style.background = '#66df22'
            if (score > heightscore) {
                heightscore = score 
                highscoreEl.textContent = heightscore
            }
        } else if (guess.value > randomNumber) {
            message.textContent = 'Too Height'
            score--
            scoreEl.textContent = score
            body.style.background = 'red'
        } else if (guess.value < randomNumber) {
            message.textContent = 'Too Low'
            score--
            scoreEl.textContent = score
            
        } 
    } else {
        message.textContent = 'No number'
    }
    if (score <= 0) {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }
})

againId.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    againGame()
})



againBtn.addEventListener('click', () => {
    againGame()
})

function againGame() {
    score = 20
    scoreEl.textContent = 20
    body.style.background = '#222'
    message.textContent = 'Start guessing...'
    number.textContent = '?'
    guess.value = ''
    randomNumber = Math.floor(Math.random() * 20) + 1

}