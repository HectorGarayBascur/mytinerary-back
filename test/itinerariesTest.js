const request = require("supertest");
const app = require("../app");
const { assert } = require("chai");

// describe("POST /itineraries", function () {
//   it("Must responde with 201 status codee", function (done) {
//     request(app)
//       .post("/itineraries")
//       .send({
//         name: "Berlin Wall",
//         user: "Pedro",
//         city: "Berlqin",
//         price: 25,
//         like: ["98"],
//         tags: ["#beautifullcity", "#amazingTour"],
//         duration: 2,
//       })
//       .expect(201);
//     return done();
//   });
//   it("Must responde with 400 status codee", function (done) {
//     request(app)
//       .post("/itineraries")
//       .send({
//         name: "Berlin Wall",
//         user: "Pedro",
//         city: "Berlqin",
//       })
//       .expect(400)
//       .end(function (err, res) {
//         if (err) return done(err);
//         return done();
//       });
//   });
//   it("Must responde with the tags", function (done) {
//     request(app)
//       .post("/itineraries")
//       .send({
//         name: "Berlin Wall",
//         user: "6318d5e69ef23abd0fb6b718",
//         city: "6318d4bc48ee766ac7a25734",
//         price: 25,
//         like: ["88"],
//         tags: ["#beautifullcity", "#amazingTour"],
//         duration: 2,
//       })
//       .then((response) => {
//         //    console.log(response);
//         assert.isArray(response.body.tags);
//         return done();
//       })
//       .catch((err) => done(err));
//   });
// });
