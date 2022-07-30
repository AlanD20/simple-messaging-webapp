import prisma from './prisma';

const UserModel = {
  all: async () => {
    return prisma.user.findMany({
      orderBy: { name: 'asc' },
    });
  },
  get: async (name) => {
    return prisma.user.upsert({
      where: {
        name: name.toLowerCase(),
      },
      update: {},
      create: {
        name: name.toLowerCase(),
      },
    });
  },
  create: async (name) => {
    return prisma.user.create({
      data: {
        name: name.toLowerCase(),
      },
    });
  },
  messages: async (name) => {
    return prisma.message.findMany({
      where: {
        user: {
          name: name.toLowerCase(),
        },
      },
      include: { user: true },
    });
  },
  saveMessage: async (data) => {
    const user = await UserModel.get(data.recipient);

    return prisma.message.create({
      data: {
        sender: data.name,
        title: data.title,
        body: data.body,
        user: {
          connect: { id: user.id },
        },
      },
    });
  },
};

export default UserModel;
