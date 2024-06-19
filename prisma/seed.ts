import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  const email = 'test@shoplog.com';
  const adminEmail = 'admin@shoplog.com';
  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      id: 'auth0|6670f1c394d1babea1593c36',
      name: email,
      email,
      emailVerified: true,
      isTest: true,
    },
  });

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      id: 'auth0|6670f1d85fde06d5ff225fc4',
      name: adminEmail,
      email: adminEmail,
      emailVerified: true,
      isTest: true,
      isAdmin: true,
    },
  });
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
