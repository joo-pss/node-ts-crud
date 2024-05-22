import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

export async function getOneEvent(req: Request, res: Response) {
  const eventId = req.params.id;

  const event = await prisma.event.findUnique({ where: { id: eventId } });

  if (!event) {
    return res.status(404).send("Event not found.");
  }

  res.status(200).send(event); 
}
