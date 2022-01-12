import { PrismaClient } from ".prisma/client"
import { transactions } from "../data/transactions"

const prisma = new PrismaClient();

async function main() {
  await prisma.transaction.createMany({
    data: transactions,
  })
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
.finally(async () => {
  await prisma.$disconnect()
})
