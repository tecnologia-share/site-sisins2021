import { useContext } from 'react';
import { CompleteSubscriptionContext } from './context/CompleteSubscriptionContext';
import { StartExams } from './pages/StartExams';

export const CompleteSubscription = () => {
  const { currentPage } = useContext(CompleteSubscriptionContext);

  switch (currentPage) {
    case 'StartExams': {
      return <StartExams />;
    }
    case 'Exam': {
      return <StartExams />;
    }
    case 'Reason': {
      return <StartExams />;
    }
  }
};
