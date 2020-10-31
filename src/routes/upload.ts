import { Router } from "express";

const router = Router();

router.post("/rules", async (req, res) => {
  await req.db.serializeRules(req.body);
  res.sendStatus(200);
});

router.post("/tickets", async (req, res) => {
  await req.db.serializeTickets(req.body);
  res.sendStatus(200);
});

export default router;
