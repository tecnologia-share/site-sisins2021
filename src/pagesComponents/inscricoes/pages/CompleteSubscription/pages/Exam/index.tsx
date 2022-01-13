import Button from 'components/Button';
import { Divider } from 'components/Divider';
import * as S from './styles';

export const Exam = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Prova</S.Title>
        <S.Subtitle>English Business</S.Subtitle>
        <S.Information>Tempo médio de resolução: 30 Min</S.Information>
        <S.Information>
          A prova contém 25 questões de multipla escolha{' '}
        </S.Information>

        <S.QuestionContainer>
          <S.QuestionTitle>Questão 1</S.QuestionTitle>
          <S.QuestionUtterance>
            Em qual das alternativas a seguir o advérbio está incorreto?
            <br />
            a) She hasn’t met them yet.
            <br />
            b) We were rather hot yesterday.
            <br />
            c) Jamie is waiting for us always.
            <br />
            d) They work very hardly on Fridays.
          </S.QuestionUtterance>

          <Divider />

          <S.QuestionAnswers>
            <S.QuestionAnswer active>
              <span>A</span>
              <p>She hasn’t met them yet.</p>
            </S.QuestionAnswer>
            <S.QuestionAnswer>
              <span>B</span>
              <p>We were rather hot yesterday.</p>
            </S.QuestionAnswer>
            <S.QuestionAnswer>
              <span>C</span>
              <p>Jamie is always waiting for us.</p>
            </S.QuestionAnswer>
            <S.QuestionAnswer>
              <span>D</span>
              <p>They work very hardly on Fridays.</p>
            </S.QuestionAnswer>
          </S.QuestionAnswers>
        </S.QuestionContainer>

        <S.QuestionContainer>
          <S.QuestionTitle>Questão 2</S.QuestionTitle>
          <S.QuestionUtterance>
            Em qual das alternativas a seguir o advérbio está incorreto?
            <br />
            a) She hasn’t met them yet.
            <br />
            b) We were rather hot yesterday.
            <br />
            c) Jamie is waiting for us always.
            <br />
            d) They work very hardly on Fridays.
          </S.QuestionUtterance>

          <Divider />

          <S.QuestionAnswers>
            <S.QuestionAnswer>
              <span>A</span>
              <p>She hasn’t met them yet.</p>
            </S.QuestionAnswer>
            <S.QuestionAnswer>
              <span>B</span>
              <p>We were rather hot yesterday.</p>
            </S.QuestionAnswer>
            <S.QuestionAnswer active>
              <span>C</span>
              <p>Jamie is always waiting for us.</p>
            </S.QuestionAnswer>
            <S.QuestionAnswer>
              <span>D</span>
              <p>They work very hardly on Fridays.</p>
            </S.QuestionAnswer>
          </S.QuestionAnswers>
        </S.QuestionContainer>

        <S.BottomContainer>
          <Button>Finalizar prova</Button>
        </S.BottomContainer>
      </S.Content>
    </S.Container>
  );
};
