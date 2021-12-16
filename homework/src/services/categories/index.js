import express from "express";
import {
  Product,
  Review,
  Category,
  ArticleCategory,
  User,
} from "./models/index.js";
import { Op } from "sequelize";
import { noExtendLeft } from "sequelize/types/lib/operators";

const categoryRouter = express.Router();

categoryRouter
  .get("/", async (req, res) => {
    try {
      const data = await Category.findAll();
      res.send(data);
    } catch (error) {
      next(error);
    }
  })
  .post("/", async (req, res) => {
    try {
      const { name } = req.body;
      const data = await Category.create({ name });
      res.send(data);
    } catch (error) {
      next(error);
    }
  });

categoryRouter
  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Category.findByPk(id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  })
  .put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const data = await Category.update({ name }, { where: { id } });
      res.send(data);
    } catch (error) {
      next(error);
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Category.destroy({ where: { id } });
      res.send(data);
    } catch (error) {
      next(error);
    }
  });
