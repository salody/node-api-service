const knex = require('../connection')

function getAllMovies () {
	return knex('movies')
		.select('*')
}

function getSingleMovie(id: string) {
	return knex('movies')
		.select('*')
		.where({ id: parseInt(id) });
}

function addMovie(movie: object) {
	return knex('movies')
		.insert(movie)
		.returning('*')
}

function updateMovie(id: string, movie: object) {
	return knex('movie')
		.update(movie)
		.where({id: parseInt(id)})
		.returning('*')
}

export default {
	getAllMovies,
	getSingleMovie,
	addMovie,
	updateMovie
}
