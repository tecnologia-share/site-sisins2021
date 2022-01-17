import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenError } from '../services/errors/AuthTokenError';

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    if (!cookies['share.token']) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
    try {
      return await fn(ctx);
    } catch (error) {
      // Bug instanceof Not Working For Custom Errors in TypeScript
      if (error instanceof AuthTokenError) {
        destroyCookie(ctx, 'share.token');
        destroyCookie(ctx, 'share.refreshToken');
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }
    }
  };
}
