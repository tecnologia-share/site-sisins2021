import Button from 'components/Button';
import { useMemo } from 'react';
import * as S from './styles';

export interface ExamCardProps {
  className?: string;
  name: string;
  numberOfQuestions: number;
  done: boolean;
  onStart: () => void;
}

export const ExamCard = ({
  className,
  done,
  name,
  numberOfQuestions,
  onStart,
}: ExamCardProps) => {
  const timeForAllQuestions = useMemo(() => {
    const timePerQuestion = 1.5;
    return Math.round(numberOfQuestions * timePerQuestion);
  }, [numberOfQuestions]);

  return (
    <S.Container className={className}>
      <h1>Prova</h1>
      <span>{name}</span>
      <p>A prova contém {numberOfQuestions} questões de múltipla escolha</p>
      <p>Tempo médio de resolução: {timeForAllQuestions}min</p>

      <S.ButtonContainer>
        {done ? (
          <span>Prova finalizada</span>
        ) : (
          <Button onClick={onStart} size="small">
            Iniciar prova
          </Button>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
};
