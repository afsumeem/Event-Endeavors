import { IEvents } from "@/types/globals";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//

interface IEventList {
  events: IEvents[];
}

const initialState: IEventList = {
  events: [],
};

const eventSlice = createSlice({
  name: "eventList",
  initialState,
  reducers: {
    addToEventList: (state, action: PayloadAction<IEvents>) => {
      const existing = state.events.find(
        (event) => event._id === action.payload._id
      );

      if (!existing) {
        state.events.push(action.payload);
      }
    },

    removeFromEventList: (state, action: PayloadAction<IEvents>) => {
      state.events = state.events.filter(
        (event) => event._id !== action.payload._id
      );
    },
  },
});

export const { addToEventList, removeFromEventList } = eventSlice.actions;

export default eventSlice.reducer;
