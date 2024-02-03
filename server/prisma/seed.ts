import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const sebas = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'sebastian@localhost',
      name: 'sebastian',
      password: {
        create: {
          password: 'aaaaaaaa',
        },
      },
    },
  });
  console.log({ sebas });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
