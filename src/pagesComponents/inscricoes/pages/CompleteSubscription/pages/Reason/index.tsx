import { useContext } from 'react';
import { CompleteSubscriptionContext } from '../../context/CompleteSubscriptionContext';
import * as S from './styles';

export const Reason = () => {
  const { courses } = useContext(CompleteSubscriptionContext);

  return (
    <S.Container>
      <h1>Motivo dos cursos</h1>

      <p>Curso1: {courses.option1.name}</p>
      <p>Curso1: {courses.option2?.name}</p>
    </S.Container>
  );
};
