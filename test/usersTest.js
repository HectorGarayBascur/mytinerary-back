const request = require("supertest");
const app = require("../app");
const { assert } = require("chai");

describe("POST /users/auth/signup", function () {
  it("must respond with 201", function (done) {
    request(app)
      .post("/users/auth/signup")
      .send({
        name: "juan",
        photo: "http:.png",
        mail: "moyanojjeronimo+88888@gmail.com",
        password: "hola123",
        role: "user",
        from: "from",
        lastName: "moyano",
        country: "argentina",
      })
      .expect(201, done);
  });
  it("Must respond with 400 status", function (done) {
    request(app)
      .post("/users/auth/signup")
      .send({})
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
