import Login from '../../pagesComponents/login';
import { withSSRGuest } from '../../utils/withSSRGuest';
const LoginPage = () => {
  return <Login />;
};

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});

export default LoginPage;
