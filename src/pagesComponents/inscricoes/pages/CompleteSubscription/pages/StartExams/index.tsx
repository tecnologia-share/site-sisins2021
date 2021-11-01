import Button from 'components/Button';
import * as S from './styles';

export const StartExams = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>Escolha qual prova deseja fazer primeiro</h1>

        <S.StyledExamCard
          done={false}
          name="English Business"
          numberOfQuestions={25}
          onStart={() => console.log('start')}
        />
        <S.StyledExamCard
          done={true}
          name="English Business"
          numberOfQuestions={25}
          onStart={() => console.log('start')}
        />

        <Button size="small">Continuar</Button>
      </S.Content>
    </S.Container>
  );
};
