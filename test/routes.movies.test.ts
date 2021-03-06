import * as chai from 'chai'
import chaiHttp = require('chai-http')
import server from '../src/db/index'

chai.use(chaiHttp)
const should = chai.should()
const knex = require('../src/db/connection')

describe('routes : movies', () => {

	beforeEach(() => {
		return knex.migrate.rollback()
			.then(() => {
				return knex.migrate.latest()
			})
			.then(() => {
				return knex.seed.run()
			})
	})

	afterEach(() => {
		return knex.migrate.rollback()
	})


})

describe('GET /api/v1/movies', () => {
	it('should return all movies', (done) => {
		chai.request(server)
			.get('/api/v1/movies')
			.end((err, res) => {
				// there should be no errors
				should.not.exist(err)
				// there should be a 200 status code
				res.status.should.equal(200)
				// the response should be JSON
				res.type.should.equal('application/json')
				// the JSON response body should have a
				// key-value pair of {"status": "success"}
				res.body.status.should.eql('success')
				// the JSON response body should have a
				// key-value pair of {"data": [3 movie objects]}
				res.body.data.length.should.eql(3)
				// the first object in the data array should
				// have the right keys
				res.body.data[0].should.include.keys(
					'id', 'name', 'genre', 'rating', 'explicit'
				)
				done()
			})
	})
})

describe('GET /api/v1/movies/:id', () => {
	it('should respond with a single movie', (done) => {
		chai.request(server)
			.get('/api/v1/movies/1')
			.end((err, res) => {
				// there should be no errors
				should.not.exist(err)
				// there should be a 200 status code
				res.status.should.equal(200)
				// the response should be JSON
				res.type.should.equal('application/json')
				// the JSON response body should have a
				// key-value pair of {"status": "success"}
				res.body.status.should.eql('success')
				// the JSON response body should have a
				// key-value pair of {"data": 1 movie object}
				res.body.data[0].should.include.keys(
					'id', 'name', 'genre', 'rating', 'explicit'
				)
				done()
			})
	})

	it('should throw an error if the movie does not exist', (done) => {
		chai.request(server)
			.get('/api/v1/movies/9999999')
			.end((err, res) => {
				// there should an error
				should.exist(err)
				// there should be a 404 status code
				res.status.should.equal(404)
				// the response should be JSON
				res.type.should.equal('application/json')
				// the JSON response body should have a
				// key-value pair of {"status": "error"}
				res.body.status.should.eql('error')
				// the JSON response body should have a
				// key-value pair of {"message": "That movie does not exist."}
				res.body.message.should.eql('That movie does not exist.')
				done()
			})
	})
})
