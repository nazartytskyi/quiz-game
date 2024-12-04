import { RootState } from './store';

export const selectQuestions = (state: RootState) => state.questionsSlice.questions;
export const selectFirstQuestion = (state: RootState) => state.questionsSlice.questions[0];
