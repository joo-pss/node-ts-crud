import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

export async function updateEvent(req: Request, res: Response) {
  const eventId = req.params.id;
  const { title, details } = req.body;

  const event = await prisma.event.findUnique({ where: { id: eventId } });

  if (!event) {
    return res.status(404).send("Event not found.");
  }

  await prisma.event.update({ 
    where: { id: eventId }, 
    data: { title, details }, 
  });

  res.sendStatus(204);
}