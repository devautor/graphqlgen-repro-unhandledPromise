/**
 * Defining `context` as an interface with Prisma added to it
 * This context will be set in Apollo Server constructor API
 */

import { Request, Response } from "express";

export interface Context {
  req: Request;
  res: Response;
}
