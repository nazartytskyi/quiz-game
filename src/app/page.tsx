'use client';

import { selectQuestions, useAppSelector } from '@/store';

import { useGetQuestionsQuery } from '@/store/services/questions';
import StoreProvider from './StoreProvider';

function QuestionsList() {
  const questions = useAppSelector(selectQuestions);
  useGetQuestionsQuery();

  return (
    <ul>
      {questions.map((q) => (
        <li key={q.id}>{q.text}</li>
      ))}
    </ul>
  );
}

function Home() {
  return (
    <StoreProvider>
      <div>
        <h1>Questions</h1>
        <QuestionsList />
      </div>
    </StoreProvider>
  );
}

export default Home;
