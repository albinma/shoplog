'use server';

import { Vehicle } from '@prisma/client';
import prisma from '~/common/initializers/prisma';

export const getVehicles = async (userId: string): Promise<Vehicle[]> => {
  const vehicles = await prisma.vehicle.findMany({
    where: { userId },
  });

  return vehicles;
};
