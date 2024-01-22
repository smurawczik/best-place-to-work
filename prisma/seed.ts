import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);
  const hashedPasswordMe = await bcrypt.hash("aaaaaaaa", 10);

  await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const seba = await prisma.user.create({
    data: {
      email: "sebastian.murawczik@gmail.com",
      password: {
        create: {
          hash: hashedPasswordMe,
        },
      },
    },
  });

  await prisma.currency.create({
    data: {
      name: "USD",
      code: "USD",
    },
  });

  await prisma.salary.create({
    data: {
      amount: 10000,
      currency: {
        create: {
          name: "EUR",
          code: "EUR",
        },
      },
      user: {
        connect: {
          id: seba.id,
        },
      },
      category: "a",
      city: {
        create: {
          name: "Berlin",
          country: {
            create: {
              name: "Germany",
            },
          },
        },
      },
      remote: false,
      country: {
        create: {
          name: "Germany",
        },
      },
      company: {
        create: {
          name: "company",
        },
      },
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
