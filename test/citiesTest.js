const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

describe('POST /cities', function () {
    it('Must responde with the id', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "tu casa",
                country: "tu barrio",
                photo: "http://acaenlacasa.jpg",
                population: 10000,
                description: "holaaa",
                fundation: "1960-01-01"
            })
            .then(response => {
                assert.isString(response.body.id)
            })
            return done()
    })
    it('Must responde with 201 status code', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "tu casa",
                country: "tu barrio",
                photo: "http://acaenlacasa.jpg",
                population: 10000,
                description: "holaaa",
                fundation: "1960-01-01"
            })
            .expect(201)
            return done()
    })
    it('Must responde with 400 status code', function (done) {
        request(app)
            .post('/cities')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
})