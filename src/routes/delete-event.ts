import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

export async function deleteEvent(req: Request, res: Response) {
  const eventId = req.params.id;

  const event = await prisma.event.findUnique({ where: { id: eventId } });

  if (!event) {
    return res.status(404).send("Event not found.");
  }

  await prisma.event.delete({ where: { id: eventId } });

  res.sendStatus(204);
}