const { createSlice } = require("@reduxjs/toolkit");

const initState = { isOpen: false, compName: null };
const modalSlice = createSlice({
  name: "modal",
  initialState: initState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.compName = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.compName = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
