import { PrismaClient } from '@prisma/client';

global.prisma =
  global.prisma ||
  new PrismaClient({
    // log: ['query'],
    errorFormat: 'minimal',
  });

export default global.prisma;
