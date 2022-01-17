import Button from 'components/Button';
import { useContext } from 'react';
import { CompleteSubscriptionContext } from '../../context/CompleteSubscriptionContext';
import * as S from './styles';

export const StartExams = () => {
  const {
    courses: { option1, option2 },
  } = useContext(CompleteSubscriptionContext);

  return (
    <S.Container>
      <S.Content>
        <h1>Escolha qual prova deseja fazer primeiro</h1>

        <S.StyledExamCard
          done={false}
          name={option1.name}
          numberOfQuestions={option1.numberOfQuestions}
          onStart={() => console.log('start')}
        />

        {option2 && (
          <S.StyledExamCard
            done={true}
            name={option2.name}
            numberOfQuestions={option2.numberOfQuestions}
            onStart={() => console.log('start')}
          />
        )}

        <Button size="small">Continuar</Button>
      </S.Content>
    </S.Container>
  );
};
