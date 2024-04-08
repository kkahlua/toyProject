import express, { json } from "express";
import { authSchema } from "../schemas/auth.js";
import db from "../db.js";
import * as jose from "jose";
import { compareSync } from "bcrypt";
import { secret } from "../core/auth.js";

const router = express.Router();

router.post("", async (req, res) => {
  const { error, value } = authSchema.validate(req.body);
  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });

  const userIndex = db.data.users.findIndex(
    ({ username }) => username === value.username
  );
  if (userIndex < 0)
    return res.status(404).json({
      _links: {
        users: {
          href: req.baseUrl,
        },
      },
      message: "조회하려는 유저가 존재하지 않습니다",
      error: "Not Found",
    });

  const user = db.data.users[userIndex];
  if (!compareSync(value.password, user.password)) {
    return res.status(401).json({
      message: "인증에 실패했습니다",
    });
  }

  return res.status(201).json({
    accessToken: await new jose.SignJWT({ user_id: user.id })
      .setProtectedHeader({
        alg: "HS256",
      })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(secret),
  });
});

export default router;
