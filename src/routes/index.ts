import { Router } from "express";
import userRoutes from "./v1/users.routes";

const apiRoutes = Router();

apiRoutes.use("/api", [userRoutes]);

export default apiRoutes;
