import {
  Container,
  ActiveMark,
  Content,
  Title,
  Description,
  Info,
  EmptyText,
  CloseIcon,
} from './styles';

interface CardCourseProps {
  title: string;
  description: string;
  onInfoClick?: () => void;
  onClose?: () => void;
  empty?: boolean;
  selectedOption?: 'first' | 'secondary';
}

const CardSelectedCourse: React.FC<CardCourseProps> = ({
  title,
  description,
  onInfoClick,
  onClose,
  empty,
  selectedOption,
}) => {
  return (
    <Container selectedOption={empty ? undefined : selectedOption}>
      {empty ? (
        <EmptyText>Escolha o curso que deseja fazer</EmptyText>
      ) : (
        <>
          {selectedOption && <ActiveMark option={selectedOption} />}
          <Content>
            <Title title={title}>{title}</Title>
            <Description title={description}>{description}</Description>
            <Info onClick={onInfoClick}>Mais informações</Info>

            <CloseIcon onClick={onClose} src="icons/Close.svg" />
          </Content>
        </>
      )}
    </Container>
  );
};

export default CardSelectedCourse;
