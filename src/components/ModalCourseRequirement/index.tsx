import { useCallback, useState } from 'react';

import Modal from '../Modal';
import Checkbox from '../Checkbox';
import Button from '../Button';
import {
  ModalContainer,
  ModalTitle,
  ModalText,
  CloseModalIcon,
  LogoModal,
} from './styles';

interface ModalCourseRequirementProps {
  courseTitle: string;
  numberOfQuestions: number;
  open?: boolean;
  onAccept: () => void;
  onClose: () => void;
}

const ModalCourseRequirement: React.FC<ModalCourseRequirementProps> = ({
  courseTitle,
  numberOfQuestions,
  open,
  onAccept,
  onClose,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCloseModal = useCallback(() => {
    setChecked(false);

    onClose();
  }, [onClose]);

  const handleCheckModal = useCallback(() => {
    setChecked((state) => !state);
  }, []);

  const acceptConditions = useCallback(() => {
    setChecked(false);
    onAccept();
  }, [onAccept]);

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <ModalContainer>
        <ModalTitle>
          Para realizar este curso você deverá realizar uma avaliação, deseja
          continuar sua inscrição?
        </ModalTitle>
        <ModalText>{courseTitle}</ModalText>
        <ModalText>Sobre a avaliação:</ModalText>
        <ModalText>Questões: {numberOfQuestions}</ModalText>
        <ModalText>Todas as questões são de múltipla escolha.</ModalText>
        <Checkbox
          label="Estou ciente dos requisitos necessários para este curso."
          checked={checked}
          onChange={handleCheckModal}
        />
        <Button
          onClick={acceptConditions}
          style={{ marginTop: '1rem' }}
          enabled={checked}
        >
          Continuar inscrição
        </Button>
        <CloseModalIcon onClick={handleCloseModal} src="icons/Close.svg" />
        <LogoModal src="icons/Logo.svg" />
      </ModalContainer>
    </Modal>
  );
};

export default ModalCourseRequirement;
