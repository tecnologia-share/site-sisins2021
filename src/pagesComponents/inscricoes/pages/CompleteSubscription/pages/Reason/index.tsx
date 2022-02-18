import { Form } from '@unform/web';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { CompleteSubscriptionContext } from 'pagesComponents/inscricoes/pages/CompleteSubscription/context/CompleteSubscriptionContext';
import { useContext, useRef } from 'react';
import * as S from './styles';

export const Reason = () => {
  const { courses } = useContext(CompleteSubscriptionContext);
  const formRef = useRef(null);

  return (
    <S.Container>
      <S.Title>
        {courses.option2
          ? 'Justique por quê deseja fazer estes cursos'
          : 'Justique por quê deseja fazer este curso'}
      </S.Title>

      <S.ReasonsContainer>
        <Form ref={formRef} onSubmit={() => console.log('s')}>
          <S.ReasonContainer>
            <S.CourseName>{courses.option1.name}</S.CourseName>

            <S.Reason>
              Agora só falta uma coisa, nos diga o por que deseja fazer este
              curso.
            </S.Reason>

            <S.ReasonInput>
              <TextField name="option1.reason" placeholder="Digite aqui" />
            </S.ReasonInput>

            <S.VideoLink>
              Nos mande o link de um vídeo seu falando por que deseja fazer este
              grupo.
            </S.VideoLink>

            <S.VideoLinkInput>
              <TextField
                name="option1.videoLink"
                placeholder="Cole aqui o link do video"
              />
            </S.VideoLinkInput>
          </S.ReasonContainer>

          {courses.option2 && (
            <S.ReasonContainer>
              <S.CourseName>{courses.option2.name}</S.CourseName>

              <S.Reason>
                Agora só falta uma coisa, nos diga por que deseja fazer este
                curso.
              </S.Reason>

              <S.ReasonInput>
                <TextField name="option2.reason" placeholder="Digite aqui" />
              </S.ReasonInput>

              <S.VideoLink>
                Nos mande o link de um vídeo seu falando por que deseja fazer
                este grupo.
              </S.VideoLink>

              <S.VideoLinkInput>
                <TextField
                  name="option2.videoLink"
                  placeholder="Cole aqui o link do video"
                />
              </S.VideoLinkInput>
            </S.ReasonContainer>
          )}

          <S.ButtonsContainer>
            <Button
              disabled
              type="submit"
              style={{
                width: '15rem',
              }}
            >
              Enviar
            </Button>
          </S.ButtonsContainer>
        </Form>
      </S.ReasonsContainer>
    </S.Container>
  );
};
