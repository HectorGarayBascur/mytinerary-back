const request = require("supertest");
const app = require("../app");
const { assert } = require("chai");
let chai = require('chai');
var expect = require('chai').expect;


describe("POST /activities", function () {
    it("Must respond with 201", function (done) {
        request(app)
            .post("/activities")
            .send({
                name: 2,
                photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fconcepto.de%2Fwp-content%2Fuploads%2F2015%2F03%2Fpaisaje-800x409.jpg&imgrefurl=https%3A%2F%2Fconcepto.de%2Fpaisaje%2F&tbnid=oVvaU8kEqf8a8M&vet=12ahUKEwjzisKj8Kn6AhWxSLgEHYEZBHUQMygAegUIARDbAQ..i&docid=perDWUVrhKamfM&w=800&h=409&q=paisaje&ved=2ahUKEwjzisKj8Kn6AhWxSLgEHYEZBHUQMygAegUIARDbAQ",
                itinerary: "6318db2de6491b05f8a4be7d"
            })
            .then((response) => {
                expect(response.body.name).to.be.a('string');
                return done();
            })
            .catch((err) => done(err));
    });
})

describe("GET /activities", function () {
    it('should be listening', (done) => {
        request(app).get('/activities')
        .expect(200,done);
        return done();
    });
})
