import { Router } from "express";
import UsersControllers from "../../controllers/users.controller";
const { signup, login } = new UsersControllers();
const userRoutes = Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

export default userRoutes;
