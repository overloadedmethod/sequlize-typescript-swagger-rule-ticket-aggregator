import { Router } from "express";

const router = Router();

const generateDaysBefore = (days = 7) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
};

router.get("/days", async (req, res) => {
  const from = req.params.from ?? generateDaysBefore();
  const to = req.params.to ?? new Date().toISOString();
  const days = await req.db.fetchEvents(Date.parse(from), Date.parse(to));

  res.json([
    [
      {
        id: 100500,
        title: "testing call",
        creation_time: Date.now(),
        resolution: "TP",
        rules: [1050],
      },
    ],
  ]);
});

router.get("/weeks", async (req, res) => {
  const from = req.params.from ?? generateDaysBefore(14);
  const to = req.params.to ?? new Date().toISOString();
  res.json([
    {
      id: 100500,
      title: "testing call",
      creation_time: Date.now(),
      resolution: "TP",
      rules: [1050],
    },
    {
      id: 100600,
      title: "testing call",
      creation_time: Date.now(),
      resolution: "TP",
      rules: [1050, 1060],
    },
  ]);
});

export default router;
