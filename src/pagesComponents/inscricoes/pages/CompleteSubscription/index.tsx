import { useContext } from 'react';
import { CompleteSubscriptionContext } from './context/CompleteSubscriptionContext';
import { Exam } from './pages/Exam';
import { StartExams } from './pages/StartExams';

export const CompleteSubscription = () => {
  const { currentPage } = useContext(CompleteSubscriptionContext);

  return <Exam />;

  switch (currentPage) {
    case 'StartExams': {
      return <StartExams />;
    }
    case 'Exam': {
      return <Exam />;
    }
    case 'Reason': {
      return <StartExams />;
    }
  }
};
