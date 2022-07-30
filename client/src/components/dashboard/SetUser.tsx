import Button from '../Button';
import TextInput from '../TextInput';
import React, { useRef } from 'react';
import { socket } from '@/common/socket';
import FormControl from '../FormControl';
import { useAppDispatch } from '@/common/store';
import { setUser } from '@/features/userSlice';
import { setError } from '@/features/alertSlice';

const SetUser = () => {
  const dispatch = useAppDispatch();
  const username = useRef<string>('');

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username.current) {
      dispatch(setError({ error: 'Name must not be empty!' }));
      return;
    }

    const name = username.current.toLowerCase().trim();
    socket.emit('user:join', { name });
    dispatch(setUser({ name }));
  };

  return (
    <FormControl onSubmit={handleOnSubmit}>
      <TextInput
        label="Name:"
        type="text"
        name="name"
        onChange={(e) => (username.current = e.target.value.trim())}
        required
      />
      <Button label="Join" className="self-end text-xl" />
    </FormControl>
  );
};
export default SetUser;
