import axios from '../../../utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';
import { sub } from 'date-fns';

const API_URL = '/api/data/chat/ChatData';

const initialState = {
  chats: [],
  chatContent: 1,
  chatSearch: '',
};

export const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getChats: (state, action) => {
      state.chats = action.payload;
    },
    SearchChat: (state, action) => {
      state.chatSearch = action.payload;
    },
    SelectChat: (state, action) => {
      state.chatContent = action.payload;
    },
    sendMsg: (state, action) => {
      const conversation = action.payload;
      const { id, msg } = conversation;

      const newMessage = {
        id: id,
        msg: msg,
        type: 'text',
        attachments: [],
        createdAt: sub(new Date(), { seconds: 1 }),
        senderId: uniqueId(),
      };

      state.chats = state.chats.map((chat) =>
        chat.id === action.payload.id
          ? {
            ...chat,
            ...chat.messages.push(newMessage),
          }
          : chat,
      );
    },
  },
});

export const { SearchChat, getChats, sendMsg, SelectChat } = ChatSlice.actions;

export const fetchChats = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getChats(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export default ChatSlice.reducer;
