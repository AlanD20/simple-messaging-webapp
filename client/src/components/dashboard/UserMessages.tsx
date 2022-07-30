import Message from './Message';
import { socket } from '@/common/socket';
import ContainerLayout from '@comp/ContainerLayout';
import { setMessages, UserMessage } from '@/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/common/store';

const UserMessages = () => {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector((state) => state.user);

  socket?.on('message:receive', (data: UserMessage) => {
    dispatch(
      setMessages({
        messages: [...messages, data],
      })
    );
  });

  return (
    <ContainerLayout className="pt-4 overflow-y-scroll h-[500px] w-[500px] flex-col px-4">
      {messages.map((msg) => (
        <Message key={msg.id} {...msg} />
      ))}
    </ContainerLayout>
  );
};
export default UserMessages;
