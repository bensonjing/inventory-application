import express from "express";
const router = express.Router();

import * as carController from "../controllers/carController";

router.get("/", carController.car_list);

router.get("/create", carController.car_create_get);

router.post("/create", carController.car_create_post);

router.get("/:id/delete", carController.car_delete_get);

router.post("/:id/delete", carController.car_delete_post);

router.get("/:id/update", carController.car_update_get);

router.post("/:id/update", carController.car_update_post);

router.get("/:id", carController.car_detail);

export default router;
