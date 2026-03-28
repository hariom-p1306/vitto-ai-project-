import express from "express";
import { createLead, getLead } from "../controllers/leadController.js";

const router = express.Router();

router.post("/", createLead);
router.get("/:id", getLead);

export default router;