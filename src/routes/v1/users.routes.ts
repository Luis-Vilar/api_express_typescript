import { Router } from "express";

const userRoutes = Router();

interface newResponse {
  message: string;
  status: number;
  cause?: string;
  error?: string;
}

userRoutes.use("/", (req, res) => {
  const response: newResponse = {
    message: "Welcome to my server on Typescript",
    status: 200,
  };
  const { name } = req.query;
  if (name) {
    response.message = `Welcome ${name} to my server on Typescript`;
  }
  return res.status(200).json({ response });
});

export default userRoutes;
