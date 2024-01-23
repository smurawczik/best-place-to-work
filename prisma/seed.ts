import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import { geo_data } from "./seed.helpers/countries";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // Delete all data from the tables
  await prisma.city.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  await prisma.country.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  await prisma.currency.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  await prisma.state.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

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

  await prisma.user.create({
    data: {
      email: "sebastian.murawczik@gmail.com",
      password: {
        create: {
          hash: hashedPasswordMe,
        },
      },
    },
  });

  // Populate geographical data
  await Promise.all(
    geo_data.map(async (data) => {
      await prisma.currency
        .create({
          data: {
            name: data.currency_name,
            code: data.currency,
            symb: data.currency_symbol,
          },
        })
        .catch(() => {
          console.log(`Currency ${data.currency} already exists.`);
        });

      const country = await prisma.country.create({
        data: {
          name: data.name,
          emoji: data.emoji,
        },
      });

      await Promise.all(
        data.states.map(async (state) => {
          const createdState = await prisma.state.create({
            data: {
              name: state.name,
              country: {
                connect: {
                  id: country.id,
                },
              },
            },
          });

          await Promise.all(
            state.cities.map(async (city) => {
              await prisma.city.create({
                data: {
                  name: city.name,
                  state: {
                    connect: {
                      id: createdState.id,
                    },
                  },
                  country: {
                    connect: {
                      id: country.id,
                    },
                  },
                },
              });
            })
          );
        })
      );
    })
  );

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
