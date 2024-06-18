import { PrismaClient } from '@prisma/client';
import { DateTime } from 'luxon';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  const email = 'test@shoplog.com';
  const provider = 'auth0';
  const providerAccountId = 'auth0|6670f1c394d1babea1593c36';
  const adminEmail = 'admin@shoplog.com';
  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name: 'Shoplog Tester',
      email,
      emailVerified: DateTime.utc().toJSDate(),
      isTest: true,
    },
  });

  await prisma.account.upsert({
    where: { provider_providerAccountId: { provider, providerAccountId } },
    update: {},
    create: {
      type: 'oidc',
      provider,
      providerAccountId,
      userId: user.id,
    },
  });
  // await prisma.user.upsert({
  //   where: { email: adminEmail },
  //   update: {},
  //   create: {
  //     name: 'Shoplog Admin',
  //     email: adminEmail,
  //     emailVerified: DateTime.utc().toJSDate(),
  //     isTest: true,
  //     isAdmin: true,
  //   },
  // });
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
