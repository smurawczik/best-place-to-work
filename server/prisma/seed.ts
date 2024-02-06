import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.role.deleteMany({});
    await prisma.user.deleteMany({});
  } catch (e) {
    console.error(e);
  }

  const companyRole = await prisma.role.create({ data: { name: 'Company' } });

  const userRole = await prisma.role.create({ data: { name: 'User' } });

  const company = await prisma.company.create({
    data: {
      name: 'Best Place to Work',
      description:
        'A company dedicated to creating the best working environment',
      website: 'https://www.bestplacetowork.com',
      employees: 50,
      foundedYear: 2010,
      industry: 'Technology',
    },
  });

  const job1 = await prisma.job.create({
    data: {
      title: 'Software Engineer',
      description: 'Develop and maintain software applications',
      salary: 80000,
      location: 'San Francisco',
      company: {
        connect: {
          id: company.id,
        },
      },
    },
  });

  const job2 = await prisma.job.create({
    data: {
      title: 'Product Manager',
      description: 'Manage product development and strategy',
      salary: 100000,
      location: 'New York',
      company: {
        connect: {
          id: company.id,
        },
      },
    },
  });

  console.log({ job1, job2 });

  const sebas = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'sebastian@localhost',
      firstName: 'sebastian',
      lastName: 'sebastian',
      password: bcrypt.hashSync('aaaaaaaa', 10),
      role: {
        connect: {
          id: userRole.id,
        },
      },
    },
  });

  const companyReview = await prisma.companyReview.create({
    data: {
      comment: 'Great Place to Work',
      rating: 5,
      user: {
        connect: {
          id: sebas.id,
        },
      },
      company: {
        connect: {
          id: company.id,
        },
      },
    },
  });

  console.log({ company, companyReview });
  console.log({ companyRole, userRole });
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
