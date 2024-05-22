import express from "express";
import { env } from "./env";
import { createEvent } from "./routes/create-event";
import { getAllEvents } from "./routes/get-all-events";
import { validateBody } from "./routes/middlewares/validate-body";
import { z } from "zod";

const app = express();

app.use(express.json());

app.post(
  "/events", 
  validateBody(z.object({
    title: z.string().min(1, "Title is required."),
    details: z.string().optional(),
  })), 
  createEvent,
);

app.get("/events", getAllEvents);

app.listen(env.PORT, () => console.log("Server running!"));