import express from "express"
import { addContent, deleteContent, updateContent, getContent, addView, trend, random, sub } from "../controllers/content.js"
import { verifyToken
 } from "../verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, addContent)
router.put("/:id", verifyToken, updateContent)
router.delete("/:id", verifyToken, deleteContent)
router.get("/find/:id", verifyToken, getContent)

router.put("/view/:id", verifyToken, addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub", verifyToken, sub)

export default router;