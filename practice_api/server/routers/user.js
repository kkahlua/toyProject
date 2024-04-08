import { randomUUID } from "crypto";
import express from "express";
import {
  userCreateSchema,
  userResponseSchema,
  userPartialUpdateSchema,
} from "../schemas/user.js";
import db from "../db.js";
import authMiddleware from "../middlewares/auth.js";
import { compareSync, hashSync } from "bcrypt";

const router = express.Router();

router.post("", (req, res) => {
  const { error, value } = userCreateSchema.validate(req.body);
  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });

  const user = {
    ...value,
    password: hashSync(value.password, 10),
    id: randomUUID(),
  };
  db.data.users.push(user);
  db.write();

  const { value: userResponseData } = userResponseSchema.validate(user, {
    stripUnknown: true,
  });
  return res.status(201).json({
    _embedded: {
      user: {
        _links: {
          self: {
            href: `${req.originalUrl}/${user.id}`,
          },
        },
        ...userResponseData,
      },
    },
  });
});

router.get("/:userId", (req, res) => {
  const user = db.data.users.find(({ id }) => id === req.params.userId);

  if (!user)
    return res.status(404).json({
      message: "조회하려는 유저가 존재하지 않습니다",
      error: "Not Found",
    });

  const { value: userResponseData } = userResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return res.status(200).json({
    _embedded: {
      user: {
        _links: {
          self: {
            href: `${req.originalUrl}`,
          },
        },
        ...userResponseData,
      },
    },
  });
});

router.patch("/:userId", authMiddleware, (req, res) => {
  const { userId } = req.params;
  const userIndex = db.data.users.findIndex(({ id }) => id === userId);

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

  if (req.auth.user_id !== userId) {
    return res.status(403).json({
      message: "올바르지 않은 접근입니다",
    });
  }

  const { error, value } = userPartialUpdateSchema.validate(req.body);
  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });

  const user = db.data.users[userIndex];

  for (let key of Object.keys(value)) {
    user[key] = value[key];
  }

  db.data.users[userIndex] = user;
  db.write();

  const { value: userResponseData } = userResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return res.status(200).json({
    _embedded: {
      user: {
        _links: {
          self: {
            href: `${req.originalUrl}`,
          },
        },
        ...userResponseData,
      },
    },
  });
});

router.delete("/:userId", authMiddleware, (req, res) => {
  const { userId } = req.params;
  const userIndex = db.data.users.findIndex(({ id }) => id === userId);

  if (userIndex < 0) {
    return res.status(404).json({
      _links: {
        users: {
          href: req.baseUrl,
        },
      },
      message: "조회하려는 유저가 존재하지 않습니다",
      error: "Not Found",
    });
  }

  if (req.auth.user_id !== userId) {
    return res.status(403).json({
      message: "올바르지 않은 접근입니다",
    });
  }

  db.data.users.splice(userIndex, 1);
  db.write();

  return res.status(200).send({
    _links: {
      users: {
        href: req.baseUrl,
      },
    },
    message: "유저를 삭제했습니다",
  });
});
export default router;
