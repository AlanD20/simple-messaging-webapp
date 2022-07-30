import _ from 'yup';
import __ from 'lodash';
import { Prisma } from '@prisma/client';

const NAME_VALIDATOR = _.string()
  .typeError('Name must be string')
  .required('Name is required')
  .min(3, 'Name must be at least 3 characters');

const RECIPIENT_VALIDATOR = _.string()
  .typeError('Recipient must be string')
  .required('Recipient is required')
  .min(3, 'Recipient must be at least 3 characters');

const TITLE_VALIDATOR = _.string()
  .typeError('Title is required')
  .required('Title is required')
  .min(1, 'Title must be at least 1 character long.')
  .max(25, 'Title must not exceed 25 characters');

const MESSAGE_VALIDATOR = _.string()
  .typeError('Message must be string')
  .required('Message is required')
  .min(1, 'Message must be at least 1 character long.');

const Schemas = {
  'message:send': _.object().shape({
    name: NAME_VALIDATOR,
    recipient: RECIPIENT_VALIDATOR,
    title: TITLE_VALIDATOR,
    body: MESSAGE_VALIDATOR,
  }),
  'user:join': _.object().shape({
    name: NAME_VALIDATOR,
  }),
};

const validator = async ({ socket, schema, body }, func) => {
  try {
    const validated = await Schemas[schema].camelCase().validate(body, {
      strict: true,
      stripUnknown: true,
      abortEarly: false,
    });

    return func(validated);
  } catch (err) {
    const errors = err.errors || [];

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        const column = __.capitalize(err.meta.target.split('_')[1]);
        errors.push(`${column} is already exist`);
      }
    }
    socket.emit('errors', errors.length > 0 ? errors : undefined);
  }
};

export default validator;
