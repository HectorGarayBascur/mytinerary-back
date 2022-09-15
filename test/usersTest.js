const request = require("supertest");
const app = require("../app");
const { assert } = require("chai");

describe("POST /users/auth/signup", function () {
  it("Must respond with id", function (done) {
    request(app)
      .post("/users/auth/signup")
      .send({
        name: "Carlos",
        photo:
          "http://www.istockphoto.com/resources/images/PhotoFTLP/1040315976.jpg",
        mail: "moyanojjeronimo+124112323@gmail.com",
        password: "hola.",
        role: "user",
        from: "from",
        lastName: "moyano",
        country: "argentina",
      })
      .then((response) => {
        //  console.log(response);
        assert.isString(response.body.id);
        done();
      })
      .catch((err) => done(err));
  });

  it("must respond with 201", function (done) {
    request(app)
      .post("/users/auth/signup")
      .send({
        name: "Carlos",
        photo:
          "http://www.istockphoto.com/resources/images/PhotoFTLP/1040315976.jpg",
        mail: "moyanojjeronimo+23342344423@gmail.com",
        password: "hola.",

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
