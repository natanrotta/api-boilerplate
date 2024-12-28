import express from "express";
import cron from "node-cron";

import routes from "./routes/index";
import Crons from "./services/crons";

const app = express();

cron.schedule("*/1 * * * *", Crons.runCron);

app.use(express.json());
app.use(routes);
app.listen(3333, () => "🚀 server running on port 3333 🚀");
