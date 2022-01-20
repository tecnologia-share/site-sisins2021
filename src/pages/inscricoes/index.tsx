import Inscricoes from '../../pagesComponents/inscricoes';
import { withSSRAuth } from '../../utils/withSSRAuth';

const InscricoesPage = () => {
  return <Inscricoes />;
};

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});

export default InscricoesPage;
