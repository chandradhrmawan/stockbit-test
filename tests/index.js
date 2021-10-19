import chai from "chai"
import chaiHttp from "chai-http"
import { app } from "../app.js"

chai.use(chaiHttp);
chai.should();

describe("stockbit-tests-apis", () => {
  let url1 = "/api/users/get";
  describe(url1, () => {
    it("should get all users", (done) => {
      chai.request(app)
        .get(url1)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  let url2 = "/api/omdb/search?Title=batman";
  describe(url2, () => {
    it("should get list omdb movie by title", (done) => {
      chai.request(app)
        .get(url2)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  let url3 = "/api/omdb/search?Title=batman1232323";
  describe(url3, () => {
    it("should not get list omdb movie", (done) => {
      chai.request(app)
        .get(url3)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  let url4 = "/api/omdb/detail?imdbID=tt0372784"
  describe(url4, () => {
    it("should get a single detail omdb movie", (done) => {
      chai.request(app)
        .get(url4)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  let url5 = "/api/omdb/detail?imdbID=tt03727841"
  describe(url5, () => {
    it("should not get a single detail omdb movie", (done) => {
      chai.request(app)
        .get(url5)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  let url6 = "/api/refactor/get?str=apa(xyz)coba(satu)dua(tiga(empat)lima)"
  describe(url6, () => {
    it("should get a first bracket string", (done) => {
      chai.request(app)
        .get(url6)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  let url7 = "/api/anagram/check-anagram"
  describe(url7, () => {
    it("should retrun a group anagram string array", (done) => {
      chai.request(app)
        .post(url7)
        .send(["kita","atik","tika","aku","kia","makan","kua"])
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });



});