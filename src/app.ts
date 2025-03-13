import express, { Express, Request, Response } from "express";

import config from "@config/environment";

const app: Express = express();

// Use configuration values
const { port, host, nodeEnv } = config.server;
const { prefix } = config.api;

// Basic route
app.get("/", (req: Request, res: Response) => {
    res.send(`Hello World from ${nodeEnv} environment`);
});

// API routes with prefix
app.get(`${prefix}/status`, (req: Request, res: Response) => {
    res.json({
        environment: nodeEnv,
        status: 'running',
        timestamp: new Date().toISOString()
    });
});

// Start the server
app.listen(port, host, () => {
    console.log(`Server running in ${nodeEnv} mode`);
    console.log(`Listening on http://${host}:${port}`);
});