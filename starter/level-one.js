/*
 * DOTS: Level One
 *
 * document.levelWinner.style.opacity = 1
//  */



const ball = document.querySelector('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

let score = 0

ball.addEventListener('click', function() {
    score += 10
    scoreDisplay.innerText = score
    if (score >= 100) {
        levelWinner.style.opacity = 1
    }
})

// const red = document.querySelector('.red')
// red.addEventListener('click', () => {
//     document.body.classList.add('red')
//     document.body.classList.remove('white', 'blue','yellow')
// })
