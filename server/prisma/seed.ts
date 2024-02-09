import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.job.deleteMany({});
    await prisma.companyReview.deleteMany({});
    await prisma.company.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.role.deleteMany({});
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

  const job3 = await prisma.job.create({
    data: {
      title: 'Data Analyst',
      description: 'Analyze and interpret complex data sets',
      salary: 75000,
      location: 'Chicago',
      company: {
        connect: {
          id: company.id,
        },
      },
    },
  });

  const job4 = await prisma.job.create({
    data: {
      title: 'Marketing Specialist',
      description: 'Develop and execute marketing campaigns',
      salary: 90000,
      location: 'Los Angeles',
      company: {
        connect: {
          id: company.id,
        },
      },
    },
  });

  const job5 = await prisma.job.create({
    data: {
      title: 'Graphic Designer',
      description: 'Create visual concepts and designs',
      salary: 60000,
      location: 'Seattle',
      company: {
        connect: {
          id: company.id,
        },
      },
    },
  });

  const job6 = await prisma.job.create({
    data: {
      title: 'HR Manager',
      description: 'Oversee human resources operations',
      salary: 110000,
      location: 'Austin',
      company: {
        connect: {
          id: company.id,
        },
      },
    },
  });

  const job7 = await prisma.job.create({
    data: {
      title: 'Sales Representative',
      description: 'Promote and sell company products',
      salary: 80000,
      location: 'Miami',
      company: {
        connect: {
          id: company.id,
        },
      },
    },
  });

  console.log({ job1, job2, job3, job4, job5, job6, job7 });

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

  const companyReview2 = await prisma.companyReview.create({
    data: {
      comment: 'Amazing work environment',
      rating: 4,
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company.id } },
    },
  });

  const companyReview3 = await prisma.companyReview.create({
    data: {
      comment: 'Good company culture',
      rating: 3,
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company.id } },
    },
  });

  const companyReview4 = await prisma.companyReview.create({
    data: {
      comment: 'Needs improvement in management',
      rating: 2,
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company.id } },
    },
  });

  console.log({ companyReview2, companyReview3, companyReview4 });

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
