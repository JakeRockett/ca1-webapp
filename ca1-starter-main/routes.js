import express from "express";

import { startController } from "./controllers/start.js";
import { dashboardController } from "./controllers/dashboard.js";
import { categoryController } from "./controllers/category.js";
import { aboutController } from "./controllers/about.js";

const router = express.Router();

// Home page
router.get("/", startController.index);

// Dashboard page
router.get("/dashboard", dashboardController.index);

// Category page
router.get("/category/:id", categoryController.index);

// About page
router.get("/about", aboutController.index);

export default router;