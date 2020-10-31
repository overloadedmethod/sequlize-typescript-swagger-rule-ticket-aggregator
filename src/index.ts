import express from "express";
import swaggerUI from "swagger-ui-express";
import * as swaggerDoc from "../swagger/openapi.json";
import { Fetch, Upload } from "./routes";
import Repo, { sequelize } from "./repo";

const repo = Repo();

const app = express();
const port = 3000;

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(async (req, _, next) => {
  // it's not recommended in general to open and close connection on each request but for now it will do.
  req.db = await repo.openConnection();
  req.on("end", repo.closeConnection);
  next();
});

app.use("/events", Fetch);
app.use("/upload", Upload);

app.get("*", function (req, res) {
  res.redirect("/docs");
});

(async () => {
  await sequelize.sync({ force: true });
  app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
  });
})();
