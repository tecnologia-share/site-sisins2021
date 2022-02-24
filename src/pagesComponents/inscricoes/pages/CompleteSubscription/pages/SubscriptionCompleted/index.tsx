import Lottie from 'react-lottie';
import LottieAnimation from '../../../../../../assets/lotties/completedCourseSubscription.json';
import * as S from './styles';

const SubscriptionCompleted = () => {
  return (
    <S.Container>
      <S.LottieWrapper>
        <Lottie
          isClickToPauseDisabled
          options={{
            loop: true,
            autoplay: true,
            animationData: LottieAnimation,
          }}
        />
      </S.LottieWrapper>

      <S.Title>
        Parabéns você finalizou sua prova um <span>e-mail</span> confirmando sua
        inscrição foi enviada para seu <span>e-mail.</span>
      </S.Title>
    </S.Container>
  );
};

export default SubscriptionCompleted;
