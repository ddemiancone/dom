window.onload = function() {
	const title = document.querySelector('h1')
	const logo = document.querySelector('.logo')
	const paragraph = document.querySelector('p')
	const firm = document.querySelector('.firma')
	const name = document.querySelector('#nombre')

	title.style = "visibility: hidden" // or "display: none"
	paragraph.style = "font-size: 32px; color: #7212D4"
	logo.style = "border-radius: 20px"
	firm.style = "border-radius: 20px"

	function hideAndShowName() {
		if (name.style.visibility !== 'hidden') { 
      		name.style.visibility = 'hidden';					
    	} else {
      		name.style.visibility = 'visible';
    	}
	}

	/* function hideAndShowName() {
	 	if (name.style.display !== 'none') { 
      name.style.display = 'none';					
    } else {
      name.style.display = 'block';
    }
	} */

	firm.onclick = function() {
		hideAndShowName()
	}
}