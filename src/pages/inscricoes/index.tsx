import Inscricoes from '../../pagesComponents/inscricoes';
import { withSSRAuth } from '../../utils/withSSRAuth';

const InscricoesPage = () => {
  return <Inscricoes />;
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});

export default InscricoesPage;
