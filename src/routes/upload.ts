import { Router } from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.post("/rules", upload.array("rules"), async (req, res) => {
  await req.db.serializeRules(Object.values(req.body));
  res.sendStatus(200);
});

export default router;
