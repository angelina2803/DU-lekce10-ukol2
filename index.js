'use strict';
const startBudik = (event) => {
	event.preventDefault()
	let time = Number(document.querySelector('.time-input').value)
	const sekundyElm = document.querySelector('.alarm__seconds')
	const alarmElm = document.querySelector('.alarm')

	const odpocet = () => {
		if (time > 0) {
			time = time - 1
			sekundyElm.textContent = String(time)
		}
		if (time <= 0) {
			clearInterval(casovac)//zastavi budik na interval pak zaopak funkce 
			alarmElm.classList.add('alarm--ring')
			document.querySelector('audio').play()
		}
	}

	const casovac = setInterval(odpocet, 500)
}

const formularElm = document.querySelector('.controls')
formularElm.addEventListener('submit', startBudik)