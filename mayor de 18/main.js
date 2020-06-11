window.onload = function() {
	const ageInput = document.querySelector('.ageInput')
	const checkButton = document.querySelector('.checkButton')
	const welcomeMessage = document.querySelector('.ageAccepted')
	const rejectionMessage = document.querySelector('.ageRejected')

	ageInput.type = "number"

	function ageCheck () {
		const ageValue = ageInput.value


		if (ageValue < 18) {
			welcomeMessage.style = "display: none"
			rejectionMessage.style = "display: block"
		} else  {
			rejectionMessage.style = "display: none"
			welcomeMessage.style = "display: block"
		}
	}



	ageInput.onkeypress = function(e) {
		if (e.key === 'Enter') {
			ageCheck()
		}
	}

	checkButton.onclick = function() {
		ageCheck()
	}
}