const request = require("supertest");
const app = require("../app");
const { assert } = require("chai");
var expect = require('chai').expect;

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmRjNDQ3MDIyMjcwNTA5NDgyYTQ5NCIsImlhdCI6MTY2Mzk0Mzc4NywiZXhwIjoxNjY0MDMwMTg3fQ.sff9ZgRfaDytyOjVjmUz8z-c4dyu-8y8kZtF9blP5Vo"

describe("PATCH /comments", () => {
    it('Must respond with 200 status code, comment modify', function (done) {
        request(app)
            .patch('/comments/632dc658022270509482a501')
            .send(
                {
                    "comment": "comment modified",
                }
            )
            .set('Authorization', `Bearer ${token}`)
            .expect(200, done)
    })
});