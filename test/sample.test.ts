import * as chai from 'chai'
chai.should()

describe('Sample Test', () => {
	it('should pass', (done) => {
		const sum = 1 + 2
		sum.should.eql(3)
		sum.should.not.eql(4)
		done()
	})
})
