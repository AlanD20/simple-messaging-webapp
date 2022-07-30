import { useRef } from 'react';
import Button from '../Button';
import Form from '../FormControl';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import { FiSend } from 'react-icons/fi';
import { socket } from '@/common/socket';
import UserMessages from './UserMessages';
import { setUser } from '@/features/userSlice';
import { setSuccess } from '@/features/alertSlice';
import { MdArrowBackIosNew } from 'react-icons/md';
import ContainerLayout from '@comp/ContainerLayout';
import { useAppDispatch, useAppSelector } from '@/common/store';
import useSocketListeners from '@/hooks/useSocketListeners';
import RecipientList from '@comp/RecipientList';

const UserForm = () => {
  useSocketListeners();
  const RECIPIENT_LIST_ID = 'recipient-list';
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const { error } = useAppSelector((state) => state.alert);
  const recipient = useRef<string>('');
  const title = useRef<string>('');
  const message = useRef<string>('');

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket?.emit('message:send', {
      name: user.name,
      recipient: recipient.current,
      title: title.current,
      body: message.current,
    });
    if (!error || error?.length > 0)
      dispatch(setSuccess({ success: 'Message Sent!' }));
  };

  const handleChangeName = () => dispatch(setUser({ name: '' }));

  return (
    <ContainerLayout className=" gap-8">
      <Form onSubmit={handleOnSubmit}>
        <Button
          type="button"
          className="mb-4 text-xl [&>*]:mr-auto btn-accent"
          onClick={handleChangeName}
        >
          <MdArrowBackIosNew />
          <span>Change Name</span>
        </Button>

        <TextInput
          label="Recipient:"
          type="text"
          name="recipient"
          list={RECIPIENT_LIST_ID}
          onChange={(e) => (recipient.current = e.target.value.trim())}
          required
        />
        <TextInput
          label="Title:"
          type="text"
          name="title"
          onChange={(e) => (title.current = e.target.value.trim())}
          required
        />
        <TextArea
          label="Message:"
          name="message"
          onChange={(e) => (message.current = e.target.value.trim())}
          required
        />
        <Button className="text-xl">
          <span>Send a Message</span>
          <FiSend />
        </Button>
      </Form>

      <RecipientList id={RECIPIENT_LIST_ID} />
      <UserMessages />
    </ContainerLayout>
  );
};
export default UserForm;
