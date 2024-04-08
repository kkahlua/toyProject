import { randomUUID } from "crypto";
import express from "express";
import { logger } from "../core/logger.js";
import db from "../db.js";
import {
  articleCreateSchema,
  articlePartialUpdateSchema,
  articleUpdateSchema,
} from "../schemas/article.js";

const router = express.Router();

// HAL로 구현한 hateoas 제약조건
router.post("", (req, res) => {
  const { error, value } = articleCreateSchema.validate(req.body);

  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });

  const article = {
    ...value,
    id: randomUUID(),
  };
  db.data.articles.push(article);
  db.write();

  return res.status(201).json({
    _embedded: {
      article: {
        _links: {
          self: {
            href: `${req.originalUrl}/${article.id}`,
          },
        },
        ...article,
      },
    },
  });
});

router.get("", (req, res) => {
  logger.debug("게시글 목록 조회");
  return res.status(200).json({
    _embedded: {
      articles: db.data.articles.map((article) => ({
        _links: {
          self: {
            href: `${req.originalUrl}/${article.id}`,
          },
        },
        ...article,
      })),
    },
  });
});

router.get("/:articleId", (req, res) => {
  const article = db.data.articles.find(
    ({ id }) => id === req.params.articleId
  );

  if (!article)
    return res.status(404).json({
      message: "조회하려는 게시글이 존재하지 않습니다",
      error: "Not Found",
    });

  return res.status(200).json({
    _embedded: {
      article: {
        _links: {
          self: {
            href: `${req.originalUrl}`,
          },
        },
        ...article,
      },
    },
  });
});

router.put("/:articleId", (req, res) => {
  const { articleId } = req.params;
  const articleIndex = db.data.articles.findIndex(({ id }) => id === articleId);

  if (articleIndex < 0)
    return res.status(404).json({
      _links: {
        articles: {
          href: req.baseUrl,
        },
      },
      message: "조회하려는 게시글이 존재하지 않습니다",
      error: "Not Found",
    });

  const { error, value } = articleUpdateSchema.validate(req.body);
  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });

  const article = { ...value, id: articleId };
  db.data.articles[articleIndex] = article;
  db.write();

  return res.status(200).json({
    _embedded: {
      article: {
        _links: {
          self: {
            href: `${req.originalUrl}`,
          },
        },
        ...article,
      },
    },
  });
});

router.patch("/:articleId", (req, res) => {
  const { articleId } = req.params;
  const articleIndex = db.data.articles.findIndex(({ id }) => id === articleId);

  if (articleIndex < 0)
    return res.status(404).json({
      _links: {
        articles: {
          href: req.baseUrl,
        },
      },
      message: "조회하려는 게시글이 존재하지 않습니다",
      error: "Not Found",
    });

  const { error, value } = articlePartialUpdateSchema.validate(req.body);
  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });

  const article = db.data.articles[articleIndex];
  for (let key of Object.keys(value)) {
    article[key] = value[key];
  }

  db.data.articles[articleIndex] = article;
  db.write();

  return res.status(200).json({
    _embedded: {
      article: {
        _links: {
          self: {
            href: `${req.originalUrl}`,
          },
        },
        ...article,
      },
    },
  });
});

router.delete("/:articleId", (req, res) => {
  const { articleId } = req.params;
  const articleIndex = db.data.articles.findIndex(({ id }) => id === articleId);

  if (articleIndex < 0)
    return res.status(404).json({
      _links: {
        articles: {
          href: req.baseUrl,
        },
      },
      message: "조회하려는 게시글이 존재하지 않습니다",
      error: "Not Found",
    });

  db.data.articles.splice(articleIndex, 1);
  db.write();

  return res.status(200).send({
    _links: {
      articles: {
        href: req.baseUrl,
      },
    },
    message: "게시글을 삭제했습니다",
  });
});

export default router;
