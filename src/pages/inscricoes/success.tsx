import {
    ContainerBlue,
    LottieWrapper,
    DescriptionSendEmail,
    TitleSendEmail
} from '../../styles/inscricoes/styles';
import Lottie from 'react-lottie';
import SendEmail from '../../assets/lotties/send-email.json';

const Success = () => {

    return (
        <>
            <ContainerBlue>
                <LottieWrapper>
                    <Lottie
                        isClickToPauseDisabled
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: SendEmail,
                        }}
                    />
                </LottieWrapper>
                <TitleSendEmail>Quase lá!.</TitleSendEmail>
                <DescriptionSendEmail>Enviamos um link de confirmação de cadastro para seu e-mail, basta clicar nele para validar seu cadastro.</DescriptionSendEmail>
            </ContainerBlue>
        </>
    );
};

export default Success;
