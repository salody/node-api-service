import * as chai from 'chai'
import chaiHttp = require('chai-http')
import server from '../src/index'

chai.use(chaiHttp)
const should = chai.should()

describe('routes: index', () => {
	it('should return json', (done) => {
		chai.request(server)
			.get('/')
			.end((err, res) => {
				should.not.exist(err)
				res.status.should.eql(200);
				res.type.should.eql('application/json');
				res.body.status.should.equal('success');
				res.body.message.should.eql('hello, world!');
				done();
			})
	})
})
