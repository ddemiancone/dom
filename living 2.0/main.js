window.onload = function() {
	
	// identifications:

	const allChairs = document.querySelectorAll('.chair')
	const addButton = document.querySelector('.button-add')
	const removeButton = document.querySelector('.button-remove')

	// functions:

	let shownChairs = 0

	function addChair() {
		let chairToShow = allChairs[shownChairs]

		if (chairToShow === undefined) {
			return Swal.fire({
				icon: 'error',
				title: '¡Error!',
				text: 'No se pueden agregar mas de 8 sillas.'})
		}

		chairToShow.style = 'visibility: visible'

		shownChairs++
	}

	function removeChair() {
		let chairToHide = allChairs[shownChairs - 1]

		if (chairToHide === undefined) {
			return Swal.fire({
				icon: 'error',
				title: '¡Error!',
				text: 'No quedan sillas para eliminar.'})
		}

		chairToHide.style = 'visibility: hidden'

		shownChairs--		
	}

	// eventss:

	addButton.onclick = function() {
		addChair()
		console.log(shownChairs)
	}

	window.onkeypress = function(e) {
		if (e.key === '+') {
			addChair()
		} 
		else if (e.key === '-') {
			removeChair()
		} 
	}

	addButton.onmouseover = function() {
		addButton.style = 'cursor: pointer'
	}

	removeButton.onclick = function() {
		removeChair()
		console.log(shownChairs)
	}

	removeButton.onmouseover = function() {
		removeButton.style = 'cursor: pointer'
	}	
}