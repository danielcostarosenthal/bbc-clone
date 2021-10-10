const time = document.querySelector('#time')

//? Add zero
const addZero = (number) => {
	return (parseInt(number, 10) < 10 ? '0' : '') + number
}

// ? Show Time
const doTime = () => {
	let now = new Date()
	let hour = now.getHours()
	let minutes = now.getMinutes()

	//? AM/PM
	const amPm = hour >= 12 ? 'PM' : 'AM'

	//? 12hr Format
	hour = hour % 12 || 12

	//? Display Time
	time.innerHTML = `${hour}:${addZero(minutes)} ${amPm}`
	time.style.padding = '.5rem 1rem'
	time.style.backgroundColor = 'var(--main-color)'

	//? Update every second
	setTimeout(doTime, 1000)
}

document.addEventListener('DOMContentLoaded', doTime)
