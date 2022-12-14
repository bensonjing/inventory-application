import express from "express";
const router = express.Router();

import * as categoryController from "../controllers/categoryController";

router.get("/", categoryController.category_list);

router.get("/create", categoryController.category_create_get);

router.post("/create", categoryController.category_create_post);

router.get("/:id/delete", categoryController.category_delete_get);

router.post("/:id/delete", categoryController.category_delete_post);

router.get("/:id/update", categoryController.category_update_get);

router.post("/:id/update", categoryController.category_update_post);

router.get("/:id", categoryController.category_detail);

export default router;
