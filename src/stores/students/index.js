import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, { payload: student }) => {
      state.value = [
        ...state.value,
        student,
      ];
    },
    deleteStudent: (state, { payload: id }) => {
      state.value = state.value.filter((student) => student.id !== id);
    },
  },
});

export const { addStudent, deleteStudent } = studentsSlice.actions;

export default studentsSlice.reducer;