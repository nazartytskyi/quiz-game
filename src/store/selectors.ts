import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const selectQuestionsState = (state: RootState) => state.gameSlice.questions;
export const selectGame = (state: RootState) => state.gameSlice;

export const selectQuestionsPrizes = createSelector([selectQuestionsState], (questions) =>
  questions.map((question) => ({
    questionId: question.id,
    amount: question.prize,
  })),
);
