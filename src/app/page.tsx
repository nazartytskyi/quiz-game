'use client';

import {
  endGame,
  nextQuestion,
  resetGame,
  selectGame,
  selectQuestionsPrizes,
  startGame,
  useAppDispatch,
  useAppSelector,
} from '@/store';

import { useGetQuestionsQuery } from '@/store/services/questions';
import { StartScreen } from '@/components/StartScreen';
import { GameOverScreen } from '@/components/GameOverScreen';
import { Question } from '@/components/Question';
import { Sidebar } from '@/components/Sidebar';
import { GameProgress } from '@/components/GameProgress';
import { Loader } from '@/components/Loader';
import { InfoScreen } from '@/components/InfoScreen';
import StoreProvider from './StoreProvider';
import styles from './page.module.scss';

function Game() {
  const dispatch = useAppDispatch();
  const prizes = useAppSelector(selectQuestionsPrizes);
  const { isGameStarted, currentQuestion, isGameOver, score } = useAppSelector(selectGame);
  const { isLoading, error } = useGetQuestionsQuery();

  const onAnswerClick = ({ isCorrect }: { isCorrect?: boolean | null }) => {
    if (isCorrect) {
      dispatch(nextQuestion());
    } else {
      dispatch(endGame());
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <InfoScreen>Ooops... Please try again later!</InfoScreen>;
  }

  if (!isGameStarted) {
    return <StartScreen onStartClick={() => dispatch(startGame())} />;
  }

  if (isGameOver) {
    return <GameOverScreen onRestartClick={() => dispatch(resetGame())} totalScore={`$${score} earned`} />;
  }

  if (currentQuestion) {
    return (
      <main className={styles.main}>
        <Question
          // key is required here to trigger umount with cleanup
          key={currentQuestion.text}
          onAnswerClick={onAnswerClick}
          question={currentQuestion?.text}
          answers={currentQuestion.answers}
        />
        <Sidebar>
          <GameProgress prizes={prizes} currentQuestionId={currentQuestion.id} />
        </Sidebar>
      </main>
    );
  }
}

function Home() {
  return (
    <StoreProvider>
      <Game />
    </StoreProvider>
  );
}

export default Home;
