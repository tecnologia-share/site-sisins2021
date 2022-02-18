import { useContext } from 'react';
import { CompleteSubscriptionContext } from './context/CompleteSubscriptionContext';
import { Exam } from './pages/Exam';
import { Reason } from './pages/Reason';
import { StartExams } from './pages/StartExams';

export const CompleteSubscription = () => {
  const { currentPage } = useContext(CompleteSubscriptionContext);

  switch (currentPage) {
    case 'StartExams': {
      return <StartExams />;
    }
    case 'Exam': {
      return <Exam />;
    }
    case 'Reason': {
      return <Reason />;
    }
  }
};
