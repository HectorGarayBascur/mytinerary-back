const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')

describe('POST /itineraries', function () {
    it('Must responde with 201 status code', function (done) {
        request(app)
            .post('/itineraries')
            .send({
                name: "Berlin Wall",
                user: "Pedro",
                city: "Berlin",
                price: 25,
                like: [""],
                tags: ["#beautifullcity", "#amazingTour"],
                duration: 2,
            })
            .expect(201, done)
    })
    it('Must responde with 400 status code', function (done) {
        request(app)
            .post('/itineraries')
            .send({
                name: "Berlin Wall",
                user: "Pedro",
                city: "Berlin",
            })
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
    it('Must responde with the tags', function (done) {
        request(app)
            .post('/itineraries')
            .send({
                name: "Berlin Wall",
                user: "Pedro",
                city: "Berlin",
                price: 25,
                like: [""],
                tags: ["#beautifullcity", "#amazingTour"],
                duration: 2,
            })
            .then(response => {
                assert.isArray(response.body.tags)
                done()
            })
    })
})