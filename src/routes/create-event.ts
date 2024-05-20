import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

export async function createEvent(req: Request, res: Response) {
  const { title, details } = req.body;

  await prisma.event.create({ 
    data: { title, details },
  });

  res.sendStatus(201);
}