import { useCallback, useState } from 'react';

import { Container } from '../../styles/inscricoes/styles';
import ModalCourseRequirement from '../../components/ModalCourseRequirement';
import EmptyCourses from '../../components/EmptyCourses';

const Inscricoes = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <Container>
      <EmptyCourses onClick={openModal} />

      <ModalCourseRequirement
        courseTitle="Inglês Avançado"
        numberOfQuestions={10}
        onAccept={closeModal}
        onClose={closeModal}
        open={modalOpen}
      />
    </Container>
  );
};

export default Inscricoes;
