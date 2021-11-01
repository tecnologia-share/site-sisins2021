import { CompleteSubscription } from 'pagesComponents/inscricoes/pages/CompleteSubscription';
import { CompleteSubscriptionProvider } from 'pagesComponents/inscricoes/pages/CompleteSubscription/context/CompleteSubscriptionProvider';

const ProvasPage = () => {
  return (
    <CompleteSubscriptionProvider>
      <CompleteSubscription />
    </CompleteSubscriptionProvider>
  );
};

export default ProvasPage;
