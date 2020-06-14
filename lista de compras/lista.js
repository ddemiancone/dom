window.onload = function() {
	const input = document.querySelector('input')
	const button = document.querySelector('button')
	const dadList = document.querySelector('.dadList')
	const lista = document.querySelector('.lista')
	const clear = document.querySelector('.clearall')

	const oldValue = []

	function removeAll() {
		let listContent = oldValue
		let items = document.querySelector('.lista')
		let newValue = input.value
		items.innerHTML = ''
		listContent.splice(listContent.length, 0)
		oldValue.splice(oldValue.indexOf(newValue), 1)
	}


	function addItem() {
		const newValue = input.value

		if (newValue === '') {
			swal('Oops!', 'Debes ingresar un item.')
		} else if (!oldValue.includes(newValue)) {
			oldValue.push(newValue)

			const newItem = document.createElement('div')
			newItem.setAttribute('id', 'newItem')
			newItem.innerHTML = newValue + '  '
				

			const removeItem = newItem.appendChild(document.createElement('button'))
			removeItem.innerHTML = '<img src=\'trash.png\' width=\'18px\' height=\'18px\'>'

			removeItem.onclick = function() {
				element = document.getElementById(newItem)
				lista.removeChild(newItem)

				oldValue.splice(oldValue.indexOf(newValue), 1)
			}

			newItem.appendChild(removeItem)

			lista.appendChild(newItem)
		} else swal('Oops!', 'Este item ya se encuentra en la lista.')
	}

	clear.onclick = function() {
		removeAll()
	}

	input.onkeydown = function(event) {
		if (event.key === 'Enter') {
			addItem()
		}
	}

	button.onclick = function() {
		addItem()
	}
}