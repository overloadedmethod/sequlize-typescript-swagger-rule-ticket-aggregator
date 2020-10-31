import express from "express";
import swaggerUI from "swagger-ui-express";
import * as swaggerDoc from "../swagger/openapi.json";
import { Tickets } from "./routes";

const app = express();
const port = 3000;

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use("/tickets", Tickets);

app.get("*", function (req, res) {
  res.redirect("/docs");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
