import { prisma } from "~/server/database/db.server";

export async function getCurrencies() {
  return prisma.currency.findMany();
}
