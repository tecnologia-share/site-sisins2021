import Login from '../../pagesComponents/login';
import { withSSRGuest } from '../../utils/withSSRGuest';
const LoginPage = () => {
  return <Login />;
};

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});

export default LoginPage;
