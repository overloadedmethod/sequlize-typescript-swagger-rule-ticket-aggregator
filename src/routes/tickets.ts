import { Router } from "express";

const router = Router();

router.get("/days", async (req, res) => {
  const from = req.params.from;
  const to = req.params.to ?? new Date().toISOString();
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
  const from = req.params.from;
  const to = req.params.to ?? new Date().toISOString();
  res.json([
    [
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
    ],
  ]);
});

export default router;
