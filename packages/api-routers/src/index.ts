import ipApiRouter from "@/api/ipApi";
import logger from "@/logger";
import express from "express";

const app = express();

app.use("/api/ip-api", ipApiRouter);

app.use((_, res) => {
  res.status(404).send("404 Not Found");
});

if (process.env.PORT) {
  app.listen(Math.trunc(Number(process.env.PORT)));
  logger.info(`Listening on port ${process.env.PORT}`);
}

export const viteNodeApp = app;
