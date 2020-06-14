/*

Hacemos una funcion para obtener el total de los alquileres
por libro, para ahorrarnos poner todo en una misma
funcion, y por si nos sirve en un futuro

*/

function getRentals (books) {
	const totalRents = []

	for (let i = 0; i < books.length; i++) {
		const book = books[i]

		totalRents.push({
			title: book.title,
			totalRents: book.rentals.length
		})
	}

	return totalRents
}

function compare(a, b) {
	return b.totalRents - a.totalRents
}

function getStock (books) {
	const stock = 0

	for (let i = 0; i < books.length; i++) {
		const book = books[i]

		if (book.rentals.length > 1) {
			book['currentStatus'] = 'rented'
		} else book['currentStatus'] = 'available'
	}

	return stock
}

