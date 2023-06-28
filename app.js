
const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')
const counter = document.querySelector('.counter-container')

let time = null

const toTimeCounter = () => {
  time = setInterval(() => {
    counter.textContent = Number(counter.textContent) + 1
  }, 1000)
}

const toClearTime = () => {
  clearInterval(time)
  counter.textContent = 0
}

buttonInitCounter.addEventListener('click', () => {
  toTimeCounter()
})

buttonStopCounter.addEventListener('click', () => {
  toClearTime()
})
