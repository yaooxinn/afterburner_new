import axios from "axios";
import express, { Router } from "express";
import pino from "pino";
const router = Router();
const baseUrl = "http://ip-api.com/";
router.get("/json/:query?", async (req, res) => {
  const { query } = req.params;
  const { fields, lang, callback } = req.query;
  try {
    const queryParam = query ? `${query}` : "";
    const url = `${baseUrl}/json/${queryParam}`;
    const params = {
      params: {
        fields,
        lang,
        callback
      }
    };
    const response = await axios.get(url, params);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting IP info");
  }
});
const pinoConfig = {
  browser: {
    asObject: true
  },
  transport: {
    target: "pino-pretty"
  }
};
const logger = pino(pinoConfig);
const app = express();
app.use("/api/ip-api", router);
app.use((_, res) => {
  res.status(404).send("404 Not Found");
});
if (process.env.PORT) {
  app.listen(Math.trunc(Number(process.env.PORT)));
  logger.info(`Listening on port ${process.env.PORT}`);
}
const viteNodeApp = app;
export {
  viteNodeApp
};
