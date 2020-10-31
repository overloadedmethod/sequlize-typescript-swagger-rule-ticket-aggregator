import { Router } from "express";
import { repo2Dto } from "../utils";

const router = Router();

const generateDaysBefore = (days = 7) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
};

router.get("/days", async (req, res) => {
  const from = (req.query.from as string) ?? generateDaysBefore();
  const to = (req.query.to as string) ?? new Date().toISOString();
  const days = await req.db.fetchEvents(Date.parse(from), Date.parse(to));

  const result = days.map((day) => repo2Dto(day));

  res.json(result);
});

router.get("/weeks", async (req, res) => {
  res.send(
    "Still not implemented, but it's not problem to turn days to weeks as we already can group events by specific day - hence what is left is to figure if the day falls to the same week of the year"
  );
});

export default router;
