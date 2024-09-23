/*
 * DOTS: Level Three
 *
 */

const balls = document.querySelectorAll('.js-ball')
const scoreDisplay = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

let score = 0

  for (let i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', function() {
        numberOfPoints = parseInt(balls[i].dataset.increment)
        score += numberOfPoints
        scoreDisplay.innerText = score
        if (score >= 500) {
            levelWinner.style.opacity = 1
        }
    });
  };

// function increment() {
//     console.log(ball.dataset)
// }

// balls.addEventListener('click', increment)

// for (let i = 0; i < ball.length; i++) {
//     score += numberOfPoints
//     scoreDisplay.innerText = score
//     if (score >= 100) {
//         levelWinner.style.opacity = 1
//     }
// }
// let score = 0



//   for (let i = 0; i < balls.length; i++) {
//     balls[i].addEventListener('click', function() {
//         score += numberOfPoints
//         scoreDisplay.innerText = score
//         if (score >= 500) {
//             levelWinner.style.opacity = 1
//         }
//     });
//   };


