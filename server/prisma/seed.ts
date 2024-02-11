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
      title: 'Great Place to Work',
      description: 'I love working here',
      rating: 5,
      recommend: true,
      companyReviewTags: {
        create: [
          {
            name: 'Great Benefits',
          },
          {
            name: 'Good Work-Life Balance',
          },
          {
            name: 'Supportive Management',
          },
        ],
      },
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
      title: 'Amazing work environment',
      description: 'Great team and management',
      rating: 4,
      recommend: true,
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company.id } },
    },
  });

  const companyReview3 = await prisma.companyReview.create({
    data: {
      title: 'Good company culture',
      description: 'Great benefits and work-life balance',
      rating: 3,
      recommend: true,
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company.id } },
    },
  });

  const companyReview4 = await prisma.companyReview.create({
    data: {
      title: 'Needs improvement in management',
      description: 'Lack of communication and transparency',
      rating: 2,
      recommend: false,
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company.id } },
    },
  });

  const company2 = await prisma.company.create({
    data: {
      name: 'Worst Place to Work',
      description:
        'A company dedicated to creating the worst working environment',
      website: 'https://www.worstplacetowork.com',
      employees: 20,
      foundedYear: 2015,
      industry: 'Technology',
    },
  });

  const job8 = await prisma.job.create({
    data: {
      title: 'Quality Assurance Engineer',
      description: 'Ensure software quality through testing',
      salary: 70000,
      location: 'San Francisco',
      company: { connect: { id: company2.id } },
    },
  });

  const job9 = await prisma.job.create({
    data: {
      title: 'Customer Support Representative',
      description: 'Handle customer inquiries and issues',
      salary: 50000,
      location: 'New York',
      company: { connect: { id: company2.id } },
    },
  });

  const job10 = await prisma.job.create({
    data: {
      title: 'Data Entry Clerk',
      description: 'Enter and update data in computer systems',
      salary: 40000,
      location: 'Chicago',
      company: { connect: { id: company2.id } },
    },
  });

  const job11 = await prisma.job.create({
    data: {
      title: 'Marketing Assistant',
      description: 'Support marketing campaigns and initiatives',
      salary: 45000,
      location: 'Los Angeles',
      company: { connect: { id: company2.id } },
    },
  });

  const job12 = await prisma.job.create({
    data: {
      title: 'Graphic Design Intern',
      description: 'Assist with creating visual designs',
      salary: 30000,
      location: 'Seattle',
      company: { connect: { id: company2.id } },
    },
  });

  const job13 = await prisma.job.create({
    data: {
      title: 'HR Assistant',
      description: 'Provide administrative support to HR department',
      salary: 35000,
      location: 'Austin',
      company: { connect: { id: company2.id } },
    },
  });

  const job14 = await prisma.job.create({
    data: {
      title: 'Sales Associate',
      description: 'Assist with sales and customer interactions',
      salary: 40000,
      location: 'Miami',
      company: { connect: { id: company2.id } },
    },
  });

  console.log({ job8, job9, job10, job11, job12, job13, job14 });

  const review1 = await prisma.companyReview.create({
    data: {
      title: 'Terrible work environment',
      description: 'No support from management, high turnover rate',
      rating: 1,
      recommend: false,
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company2.id } },
    },
  });

  const review2 = await prisma.companyReview.create({
    data: {
      title: 'Unfair treatment of employees',
      description: 'No opportunities for growth, favoritism',
      rating: 2,
      recommend: false,
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company2.id } },
    },
  });

  const review3 = await prisma.companyReview.create({
    data: {
      title: 'Toxic work culture',
      description: 'Bullying and harassment, no work-life balance',
      rating: 1,
      recommend: false,
      companyArea: {
        create: {
          name: 'Work Culture',
        },
      },
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company2.id } },
    },
  });

  const review4 = await prisma.companyReview.create({
    data: {
      title: 'Poor management',
      description: 'Lack of communication and leadership',
      rating: 2,
      recommend: false,
      companyReviewCons: {
        create: [
          {
            description: 'Lack of Transparency',
          },
          {
            description: 'Lack of Communication',
          },
        ],
      },
      user: { connect: { id: sebas.id } },
      company: { connect: { id: company2.id } },
    },
  });

  console.log({ review1, review2, review3, review4 });

  console.log({ company2 });

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
