import { Router } from "express";

import {
  renderTask,
  createTask,
  renderTaskEdit,
  edit,
  deleteTask,
  tasdkDoggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", edit);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", tasdkDoggleDone);

export default router;
