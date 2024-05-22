import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

export async function getAllEvents(_: Request, res: Response) {
  const events = await prisma.event.findMany();

  res.status(200).send(events);
}