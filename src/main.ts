import express from "express";
import { env } from "./env";
import { createEvent } from "./routes/create-event";
import { getAllEvents } from "./routes/get-all-events";
import { getOneEvent } from "./routes/get-one-event";
import { updateEvent } from "./routes/update-event";
import { deleteEvent } from "./routes/delete-event";
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

app.get("/events/:id", getOneEvent);

app.patch(
  "/events/:id",
  validateBody(z.object({
    title: z.string().optional(),
    details: z.string().optional(),
  })),
  updateEvent,
);

app.delete("/events/:id", deleteEvent)

app.listen(env.PORT, () => console.log("Server running!"));