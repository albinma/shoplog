import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  const email = 'admin@shoplog.com';
  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      id: 'auth0|6670f1d85fde06d5ff225fc4',
      name: email,
      email,
      emailVerified: true,
      image:
        'https://s.gravatar.com/avatar/bbca517dd7dcb785fb0b29392d783605?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png',
      isTest: true,
      isAdmin: true,
    },
  });

  const vin = '5TEWN72N82Z891171';
  await prisma.vehicle.upsert({
    where: { userId_vin: { userId: user.id, vin } },
    update: {},
    create: {
      vin,
      userId: user.id,
      make: 'Toyota',
      model: 'Tacoma',
      year: 2002,
      trim: 'Base',
      style: '3.4L V6 5-speed Manual 4WD Xtra Cab',
      odometer: 310316,
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
