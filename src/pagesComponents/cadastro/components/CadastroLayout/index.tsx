import { ReactNode } from 'react';
import Lottie from 'react-lottie';
import * as S from './styles';

interface CadastroLayoutProps {
  step: number;
  title: string;
  subtitle: string;
  footer: {
    title: string;
    subtitle: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    animation: any;
  };
  children: ReactNode;
}

export const CadastroLayout = ({
  step,
  title,
  subtitle,
  footer,
  children,
}: CadastroLayoutProps) => {
  return (
    <S.Container>
      <S.FormSection>
        <S.FormSectionContent>
          <S.Step>
            <span>{step}</span>
          </S.Step>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>

          {children}
        </S.FormSectionContent>
      </S.FormSection>
      <S.FooterSection>
        <S.LottieWrapper>
          <Lottie
            isClickToPauseDisabled
            options={{
              loop: true,
              autoplay: true,
              animationData: footer.animation,
            }}
          />
        </S.LottieWrapper>
        <S.FooterInfo>
          <S.FooterIcon></S.FooterIcon>
          <S.FooterText>
            <h3>{footer.title}</h3>
            <p>{footer.subtitle}</p>
          </S.FooterText>
        </S.FooterInfo>
      </S.FooterSection>
    </S.Container>
  );
};
