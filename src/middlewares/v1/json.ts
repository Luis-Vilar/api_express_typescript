import express from "express";

class JsonMiddleware {
  json: express.RequestHandler;
  constructor() {
    this.json = express.json();
  }
}

export default new JsonMiddleware().json;
