import express, { Application, Router } from "express";
import apiRoutes from "../routes";
import middlewares from "../middlewares";

class Server {
  private app: Application = express();

  constructor() {
    this.middlewares(middlewares);
    this.routes(apiRoutes);
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

  middlewares(middlewares: any) {
    this.app.use(middlewares);
  }
}
export default Server;
