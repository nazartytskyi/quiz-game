import { createSlice } from '@reduxjs/toolkit';
import { Question } from '@/graphql/generated/graphql-types';
import { questionsApi } from '../services/questions';

interface QuestionsState {
  questions: Question[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuestionsState = {
  questions: [],
  status: 'idle',
  error: null,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(questionsApi.endpoints.getQuestions.matchPending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addMatcher(questionsApi.endpoints.getQuestions.matchFulfilled, (state, action) => {
        state.status = 'succeeded';
        state.questions = action.payload;
      })
      .addMatcher(questionsApi.endpoints.getQuestions.matchRejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || 'Failed to load questions';
      });
  },
});

export default questionsSlice.reducer;
