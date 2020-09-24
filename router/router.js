import express from "express";
import { home, login, photos, profile } from "../controller";

const router = express.Router();

router.get("/", home);
router.get("/login", login);
router.get("/photos", photos);
router.get("/profile", profile);

export default router;
