import { useEffect, useState } from 'react';
import { AnswerOption } from '../AnswerOption';
import styles from './Question.module.scss';

interface IAnswer {
  text: string;
  id: number;
  isCorrect?: boolean | null;
}

interface IQuestionProps {
  question: string;
  answers: IAnswer[];
  onAnswerClick: (answer: IAnswer) => void;
}

const getOptionLetter = (index: number) => String.fromCharCode(65 + index);

export function Question({ question, answers, onAnswerClick }: IQuestionProps) {
  const [selectedAnswerId, setSelectedAnswerId] = useState<IAnswer['id'] | null>(null);
  const [answerState, setAnswerState] = useState<'correct' | 'wrong' | null>(null);

  const handleAnswerClick = (answer: IAnswer) => {
    if (selectedAnswerId !== null) {
      return;
    }

    setSelectedAnswerId(answer.id);
    const isCorrect = answer.isCorrect === true;
    setAnswerState(isCorrect ? 'correct' : 'wrong');
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (selectedAnswerId !== null) {
      timerId = setTimeout(() => {
        const selectedAnswer = answers.find((a) => a.id === selectedAnswerId);
        if (selectedAnswer) {
          onAnswerClick(selectedAnswer);
        }
      }, 1500);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [selectedAnswerId, answers, onAnswerClick]);

  return (
    <div className={styles.content}>
      <div className={styles.question}>
        <h2>{question}</h2>
      </div>
      <div className={styles.answers}>
        {answers.map((answer, i) => (
          <div key={answer.id} className={styles.answer}>
            <AnswerOption
              state={selectedAnswerId === answer.id ? answerState : null}
              disabled={selectedAnswerId !== null}
              onClick={() => handleAnswerClick(answer)}
            >
              <div className={styles.answerText}>
                <span>{getOptionLetter(i)}</span>
                {answer.text}
              </div>
            </AnswerOption>
          </div>
        ))}
      </div>
    </div>
  );
}
