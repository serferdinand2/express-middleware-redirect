
import redirectMiddleware from '../index.js';
import sinon from 'sinon';
import assert from 'assert';
import path from 'path';


describe('redirect', function() {
	it('should preform simple redirect with object', function() {
		const originalUrl = '/test';
		const redirectUrl = '/redirects';
		const data = {};
		data[originalUrl] = redirectUrl;

		const req = {
			originalUrl: originalUrl
		};

		const res = {
			redirect: sinon.stub()
		};

		const next = sinon.stub();

		const middleware = sinon.stub(redirectMiddleware(data));
		
		middleware(req, res, next);
		
		res.redirect.called;
	
		assert.ok(res.redirect.called);

		assert.equal(res.redirect.getCall(0).args[0], redirectUrl);

		
	});

	it('should preform simple redirect JSON ', function() {
		
		const data = path.resolve('./test/test_redirects.json');

		const req = {
			originalUrl: '/about'
		};
		const res = {
			redirect: sinon.stub()
		};
		const next = sinon.stub();

		const middleware = sinon.stub(redirectMiddleware(data));
		
		middleware(req, res, next);
	
		assert.ok(res.redirect.called);

		assert.equal(res.redirect.getCall(0).args[0], '/about.html');
		
	});
	
});
