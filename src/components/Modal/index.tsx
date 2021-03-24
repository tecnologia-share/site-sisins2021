import { Overlay, Container } from './styles';

interface ModalProps {
  onClose?: () => void;
  open?: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, open, children }) => {
  return (
    <>
      {open && (
        <Overlay onClick={onClose}>
          <Container
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {children}
          </Container>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
