import UserModel from '../app/UserModel';
import validator from '../app/validator';

const MessageController = {
  all: async (name) => UserModel.messages(name),
  send: async (io, socket, unvalidatedData) => {
    await validator(
      {
        socket,
        schema: 'message:send',
        body: unvalidatedData,
      },
      async (data) => {
        const to = data.recipient.toLowerCase();
        const message = await UserModel.saveMessage(data);
        io.in(to).emit('message:receive', {
          id: message.id,
          from: message.sender,
          title: message.title,
          body: message.body,
          createdAt: message.createdAt,
        });
      }
    );
  },
};

export default MessageController;
