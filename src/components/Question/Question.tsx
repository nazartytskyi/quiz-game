import { AnswerOption } from '../AnswerOption';
import styles from './Question.module.scss';

interface IAnswer {
  text: string;
  id: number;
}

interface IQuestionProps {
  question: string;
  answers: IAnswer[];
  onAnswerClick: (answer: IAnswer) => void;
}

const getOptionLetter = (index: number) => String.fromCharCode(65 + index);

export function Question({ question, answers, onAnswerClick }: IQuestionProps) {
  return (
    <div className={styles.content}>
      <div className={styles.question}>
        <h2>{question}</h2>
      </div>
      <div className={styles.answers}>
        {answers.map((answer, i) => (
          <div key={answer.id} className={styles.answer}>
            <AnswerOption onClick={() => onAnswerClick(answer)}>
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
