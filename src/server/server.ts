import express, { Application, Router } from "express";
import apiRoutes from "../routes";

class Server {
  private app: Application = express();

  constructor() {
    this.routes(apiRoutes)
    this.startServer(this.app, 3000);
  }

  startServer(app: Application, port: number) {
    app.listen(port, () => {
      console.log(`Server started on ${port}`);
    });
  }

  routes(routes: Router) {
    this.app.use(routes);
  }
}

export default Server;
