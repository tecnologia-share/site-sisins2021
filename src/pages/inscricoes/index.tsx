import { useCallback, useState } from 'react';

import { Container, Title } from '../../styles/inscricoes/styles';
import ModalCourseRequirement from '../../components/ModalCourseRequirement';

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
      <Title onClick={openModal}>Inscrições</Title>

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
