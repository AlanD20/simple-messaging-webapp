import UserModel from '../app/UserModel';
import validator from '../app/validator';
import MessageController from './MessagesController';

const UserController = {
  all: async () => UserModel.all(),
  join: async (socket, unvalidatedData) => {
    await validator(
      {
        socket,
        schema: 'user:join',
        body: unvalidatedData,
      },
      async (data) => {
        socket.join(data.name);
        const messages = (await MessageController.all(data.name)).map(
          (message) => ({
            id: message.id,
            from: message.user.name,
            title: message.title,
            body: message.body,
            createdAt: message.createdAt,
          })
        );
        socket.emit('message:all', messages);

        const users = await UserController.all();
        socket.emit('user:all', users);
      }
    );
  },
};

export default UserController;
