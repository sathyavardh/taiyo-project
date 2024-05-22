import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  state: 'Active' | 'Inactive'; // Added state field
}

interface ContactState {
  contacts: Contact[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ContactState = {
  contacts: [],
  status: 'idle',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }
  },
});

export const { addContact, updateContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
