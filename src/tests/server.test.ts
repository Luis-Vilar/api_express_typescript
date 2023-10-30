import { describe } from "node:test";
import server from "../server/server";
import supertest from "supertest";
import { expect, test } from "vitest";

const app = new server().getApp();
const request = supertest(app);

describe("POST /api/signup", () => {
  test("should return 422 when empty body send", async () => {
    const response = await request.post("/api/signup");
    expect(response.status).toBe(422);
  });
  test("should return 422 when empty email send", async () => {
    const response = await request.post("/api/signup").send({
      name: "test",
    });
    expect(response.status).toBe(422);
  });

  test("should return 422 when empty name send", async () => {
    const response = await request.post("/api/signup").send({
      email: "email@dominio.com",
    });
    expect(response.status).toBe(422);
  });

  test("should return 201 when valid body send", async () => {
    const response = await request.post("/api/signup").send({
      name: "test",
      email:  "email@dominio.com",
    });
    expect(response.status).toBe(201);
  });
});

describe("POST /api/login", () => {
  test("should return 422 when empty body send", async () => {
    const response = await request.post("/api/login");
    expect(response.status).toBe(422);
  });
  test("should return 422 when empty email send", async () => {
    const response = await request.post("/api/login").send({
      name: "test",
    });
    expect(response.status).toBe(422);
  });

  test("should return 422 when empty name send", async () => {
    const response = await request.post("/api/login").send({
      email: "email@dominio.com",
    });
    expect(response.status).toBe(422);
  });
});
