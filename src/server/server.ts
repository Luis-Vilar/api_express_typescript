import express, { Application, Router } from "express";
import apiRoutes from "../routes";
import middlewares from "../middlewares";

class Server {
  private app: Application = express();

  private static instance: Server;

  private constructor() {
    this.middlewares(middlewares);
    this.routes(apiRoutes);
    this.startServer(this.app, 3000);
  }

  static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  private startServer(app: Application, port: number) {
    app.listen(port, () => {
      console.log(`Server started on ${port}`);
    });
  }

  private routes(routes: Router) {
    this.app.use(routes);
  }

  private middlewares(middlewares: any) {
    this.app.use(middlewares);
  }

  getApp() {
    return this.app;
  }
}

export default Server;
