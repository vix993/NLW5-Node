process.env.NODE_ENV = 'test';

import { expect, use, should } from 'chai';
import chaiHttp from 'chai-http';

import { server } from '../../src/server';
const { request } = use(chaiHttp);

describe('User endpoints', () => {
    it('should create a user POST', (done) => {
        request(server)
            .post('/users')
            .send({email: "jerry@hotmail.com"})
            .end((err, res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body.email).to.be.equal("jerry@hotmail.com");

                done();                
            })
    })
})