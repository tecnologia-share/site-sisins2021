import Button from 'components/Button';
import { useContext, useMemo } from 'react';
import { CompleteSubscriptionContext } from '../../context/CompleteSubscriptionContext';
import * as S from './styles';

export const StartExams = () => {
  const {
    courses: { option1, option2 },
    startFirstExam,
    startSecondaryExam,
    finishExams,
  } = useContext(CompleteSubscriptionContext);

  const examsCompleted = useMemo(() => {
    const option1Completed = option1.examCompleted || !option1.hasExam;
    const option2Completed =
      !option2 || option2.examCompleted || !option1.hasExam;

    if (option1Completed && option2Completed) return true;

    return false;
  }, [option1.examCompleted, option1.hasExam, option2]);

  return (
    <S.Container>
      <S.Content>
        {/** @TODO perguntar deste texto para a @Carla quando só tem 1 */}
        <h1>Escolha qual prova deseja fazer primeiro</h1>

        {option1.hasExam && (
          <S.StyledExamCard
            done={option1.examCompleted}
            name={option1.name}
            numberOfQuestions={option1.numberOfQuestions}
            onStart={startFirstExam}
            /** fazer loading no botão */
          />
        )}

        {option2 && option2.hasExam && (
          <S.StyledExamCard
            done={option2.examCompleted}
            name={option2.name}
            numberOfQuestions={option2.numberOfQuestions}
            onStart={startSecondaryExam}
            /** fazer loading no botão */
          />
        )}

        <Button size="small" onClick={finishExams} disabled={!examsCompleted}>
          Continuar
        </Button>
      </S.Content>
    </S.Container>
  );
};
