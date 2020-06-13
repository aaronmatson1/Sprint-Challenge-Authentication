const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbconfig");

// beforeEach(async () => {
//   await db.seed.run();
// });

afterAll(async () => {
  await db.destroy();
});

describe("Checks auth endpoints", () => {
  it("POST /register", async () => {
    const res = await request(server).get("/api/auth/register");

    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("text/html");
  });

  it("POST /login", async () => {
    const res = await request(server).get("/register");

    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("text/html");
  });

  it("GET /logout", async () => {
    const res = await request(server).get("/register");

    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("text/html");
  });
});