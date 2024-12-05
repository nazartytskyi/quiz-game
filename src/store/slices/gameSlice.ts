import { createSlice } from '@reduxjs/toolkit';
import { Question } from '@/graphql/generated/graphql-types';
import { questionsApi } from '../services/questions';

interface GameState {
  questions: Question[];
  isGameStarted: boolean;
  isGameOver: boolean;
  score: number;
  currentQuestion: Question | null;
}

const initialState: GameState = {
  questions: [],
  isGameStarted: false,
  isGameOver: false,
  score: 0,
  currentQuestion: null,
};

export const gameSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    startGame(state) {
      state.isGameStarted = true;
      const firstQuestion = state.questions[0] || [];
      state.currentQuestion = firstQuestion;
    },
    nextQuestion(state) {
      const currentIndex = state.questions.findIndex((question) => question.id === state.currentQuestion?.id);
      const next = state.questions[currentIndex + 1];

      state.score += state.currentQuestion?.prize || 0;

      if (next) {
        state.currentQuestion = next;
      } else {
        state.isGameOver = true;
      }
    },
    endGame(state) {
      state.isGameOver = true;
    },
    resetGame(state) {
      const {questions} = state;
      return { ...initialState, questions, currentQuestion: questions[0] };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(questionsApi.endpoints.getQuestions.matchFulfilled, (state, action) => {
      state.questions = action.payload.toSorted((a, b) => (a.prize > b.prize ? 1 : -1));
    });
  },
});

export const { startGame, nextQuestion, resetGame, endGame } = gameSlice.actions;

export default gameSlice.reducer;
