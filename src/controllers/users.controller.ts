import prisma from "../../prisma/client";
import { Request, Response } from "express";
import type { newResponse } from "../../types";

class UsersControllers {
  login;
  signup;

  constructor() {
    this.signup = async (req: Request, res: Response) => {
      const { email, name } = req.body;
      if (!email || !name)
        return res.status(422).json({ error: "Email and name are required" });

      try {
        const user = await prisma.user.create({
          data: {
            email,
            name,
          },
        });

        const response: newResponse = {
          message: "User created successfully",
          status: 201,
          data: user,
        };

        return res.status(response.status).json({ response });
      } catch (error) {
        return res.status(500).json({ error });
      }
    };

    //fake login method need to be implemented with jsonwebtoken
    this.login = async (req: Request, res: Response) => {
      const { email } = req.body;
      if (!email) return res.status(422).json({ error: "Email is required" });
      try {
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        const successResponse: newResponse = {
          message: "User login successfully",
          status: 200,
          data: { user },
        };
        const errorResponse: newResponse = {
          message: "User not found in database",
          status: 404,
          error: "User not found",
          cause : "You need to signup first"
        };
        if (!user) {
          return res
            .status(errorResponse.status)
            .json({ response: errorResponse });
        }
        return res
          .status(successResponse.status)
          .json({ response: successResponse });
      } catch (error) {
        return res.status(500).json({ error });
      }
    };
  }
}

export default UsersControllers;
