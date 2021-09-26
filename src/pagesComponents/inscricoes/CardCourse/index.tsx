import {
  Container,
  ActiveMark,
  Content,
  Title,
  Description,
  Info,
  CheckIcon,
} from './styles';

interface CardCourseProps {
  title: string;
  description: string;
  onInfoClick?: () => void;
  onSelect?: () => void;
  checked?: boolean;
  selectedOption?: 'first' | 'secondary';
}

const CardCourse: React.FC<CardCourseProps> = ({
  title,
  description,
  onInfoClick,
  onSelect,
  checked,
  selectedOption,
}) => {
  return (
    <Container onClick={onSelect} selectedOption={selectedOption}>
      {selectedOption && <ActiveMark option={selectedOption} />}

      <Content>
        <Title title={title}>{title}</Title>
        <Description title={description}>{description}</Description>
        <Info
          onClick={(event) => {
            event.stopPropagation();
            if (onInfoClick) {
              onInfoClick();
            }
          }}
        >
          Mais informações
        </Info>

        <CheckIcon
          selectedOption={selectedOption}
          checked={checked}
          src={checked ? 'icons/Checkbox_checked.svg' : 'icons/Checkbox.svg'}
        />
      </Content>
    </Container>
  );
};

export default CardCourse;
