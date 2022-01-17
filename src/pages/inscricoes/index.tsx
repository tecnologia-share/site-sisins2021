import { withSSRAuth } from '../../utils/withSSRAuth';
import Inscricoes from '../../pagesComponents/inscricoes';

const InscricoesPage = () => {
  return <Inscricoes />;
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});

export default InscricoesPage;
