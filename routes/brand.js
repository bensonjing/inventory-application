import express from "express";
const router = express.Router();

import * as brandController from "../controllers/brandController";

router.get("/", brandController.brand_list);

router.get("/create", brandController.brand_create_get);

router.post("/create", brandController.brand_create_post);

router.get("/:id/delete", brandController.brand_delete_get);

router.post("/:id/delete", brandController.brand_delete_post);

router.get("/:id/update", brandController.brand_update_get);

router.post("/:id/update", brandController.brand_update_post);

router.get("/:id", brandController.brand_detail);

export default router;
