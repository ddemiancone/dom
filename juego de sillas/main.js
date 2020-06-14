window.onload = function() {
	const container = document.querySelectorAll('.container')
	const topRow = document.querySelector('.topRow')
	const centerRow = document.querySelector('.centerRow')
	const bottomRow = document.querySelector('.bottomRow')
	const addButton = document.querySelector('.addChair')
	const removeButton = document.querySelector('.removeChair')
	const table = document.querySelector('.table')

	const recicledChairs = []

	function addChair() {
		if (recicledChairs.length < 3) {
			const topRowChair = topRow.appendChild(document.createElement('img'))
			topRowChair.src = 'chair.png'
			topRowChair.style = 'width: 70px; height: 70px'
			topRowChair.classList.add('topChairs')
			recicledChairs.push(topRowChair)
		} 

		else if (recicledChairs.length < 4) {
			const centerRightChair = centerRow.appendChild(document.createElement('img'))
			centerRightChair.src = 'chair.png'
			centerRightChair.style = 'width: 70px; height: 70px; transform: rotate(90deg); margin-top: 65px'
			centerRightChair.classList.add('rightChair')
			recicledChairs.push(centerRightChair)
		} 

		else if (recicledChairs.length < 7) {
			const bottomRowChair = bottomRow.appendChild(document.createElement('img'))
			bottomRowChair.src = 'chair.png'
			bottomRowChair.style = 'width: 70px; height: 70px; transform: rotate(180deg)'
			bottomRowChair.classList.add('bottomChairs')
			recicledChairs.push(bottomRowChair)
		} 

		else if (recicledChairs.length < 8) {
			const centerLeftChair = centerRow.appendChild(document.createElement('img'))
			centerLeftChair.src = 'chair.png'
			centerLeftChair.style = 'width: 70px; height: 70px; transform: rotate(-90deg); margin-top: 65px'
			centerLeftChair.classList.add('leftChair')
			recicledChairs.push(centerLeftChair)
			centerRow.insertBefore(centerLeftChair, centerRow.firstChild)
		}

		else {
			swal('No está permitido agregar mas de ocho sillas.')
			console.log(recicledChairs)
		}

	}
	
	function removeChair() {
		if (recicledChairs.length > 7) {
			let oldLeftChair = document.querySelector('.leftChair')
			centerRow.removeChild(oldLeftChair)
			recicledChairs.splice(recicledChairs.indexOf(oldLeftChair), 1)
		}

		else if (recicledChairs.length > 4) {
			let oldBottomChairs = document.querySelector('.bottomChairs')
			bottomRow.removeChild(oldBottomChairs)
			recicledChairs.splice(recicledChairs.indexOf(oldBottomChairs), 1)
		}

		else if (recicledChairs.length > 3) {
			let oldRightChair = document.querySelector('.rightChair')
			centerRow.removeChild(oldRightChair)
			recicledChairs.splice(recicledChairs.indexOf(oldRightChair), 1)
		}

		else if (recicledChairs.length > 0) {
			let oldTopChairs = document.querySelector('.topChairs')
			topRow.removeChild(oldTopChairs)
			recicledChairs.splice(recicledChairs.indexOf(oldTopChairs), 1)
		}

		else if (recicledChairs.length === 0) {
			swal('No hay más sillas que puedas eliminar de la mesa.')
		}
	}


	addButton.onclick = function() {
		addChair()
	}

	addButton.onmouseover = function() {
		addButton.style = "cursor: pointer"
	}

	removeButton.onclick = function() {
		removeChair()
	}

	removeButton.onmouseover = function() {
		removeButton.style = "cursor: pointer"
	}
}