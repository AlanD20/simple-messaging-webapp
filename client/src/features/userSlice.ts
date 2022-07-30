import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserMessage {
  id: number;
  from: string;
  title: string;
  body: string;
  createdAt: Date;
}
export interface Recipient {
  id: number;
  name: string;
  createdAt: Date;
}

type UserState = {
  name: string;
  recipients: Recipient[];
  messages: UserMessage[];
};

const initialState: UserState = {
  name: '',
  recipients: [],
  messages: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<{ name: string }>) {
      state.name = action.payload.name;
    },
    setRecipients(
      state: UserState,
      action: PayloadAction<{ recipients: Recipient[] }>
    ) {
      state.recipients = action.payload.recipients;
    },
    setMessages(
      state: UserState,
      action: PayloadAction<{ messages: UserMessage[] }>
    ) {
      let messages = [...action.payload.messages];
      if (Array.isArray(messages) && messages.length > 0) {
        messages = messages.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      state.messages = messages;
    },
  },
});

export const { setUser, setRecipients, setMessages } = userSlice.actions;
export default userSlice.reducer;
