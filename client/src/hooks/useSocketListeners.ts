import { socket } from '@/common/socket';
import { useAppDispatch } from '@/common/store';
import { setError } from '@/features/alertSlice';
import { setMessages, setRecipients, UserMessage } from '@/features/userSlice';

const useSocketListeners = () => {
  const dispatch = useAppDispatch();

  socket?.on('message:all', (data: UserMessage[]) => {
    dispatch(
      setMessages({
        messages: data,
      })
    );
  });

  socket?.on('user:all', (data) => {
    dispatch(
      setRecipients({
        recipients: data,
      })
    );
  });

  socket?.on('errors', (data) => {
    dispatch(
      setError({
        error: data,
      })
    );
  });
};

export default useSocketListeners;
