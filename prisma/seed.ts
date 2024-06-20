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
      image:
        'https://s.gravatar.com/avatar/e52b32b72d2e01d4cc3f8f146948fdc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png',
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
      image:
        'https://s.gravatar.com/avatar/bbca517dd7dcb785fb0b29392d783605?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png',
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
