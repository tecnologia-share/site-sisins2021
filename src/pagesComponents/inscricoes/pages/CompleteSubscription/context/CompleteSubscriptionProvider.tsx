import { ReactNode, useCallback, useState } from 'react';
import {
  CompleteSubscriptionContext,
  Courses,
  ExamAnswer,
  Reason,
  SubscriptionPages,
} from './CompleteSubscriptionContext';

interface CompleteSubscriptionProviderProps {
  children: ReactNode;
}

export const CompleteSubscriptionProvider = ({
  children,
}: CompleteSubscriptionProviderProps) => {
  const [courses, setCourses] = useState<Courses>({} as Courses);
  const [readyToSubmit, setReadyToSubmit] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(true);
  const [loadingFirstExam, setLoadingFirstExam] = useState(true);
  const [loadingSecondaryExam, setLoadingSecondaryExam] = useState(true);
  const [currentPage, setCurrentPage] = useState<SubscriptionPages>(
    'StartExams'
  );

  const startFirstExam = useCallback(() => {
    /** @TODO implementar */
  }, []);

  const startSecondaryExam = useCallback(() => {
    /** @TODO implementar */
  }, []);

  const finishExams = useCallback(() => {
    /** @TODO implementar */
  }, []);

  const submit = useCallback(async () => {
    /** @TODO implementar */
  }, []);

  const setFirstCourseAnswers = useCallback((answers: ExamAnswer[]) => {
    /** @TODO implementar */
  }, []);

  const setSecondaryCourseAnswers = useCallback((answers: ExamAnswer[]) => {
    /** @TODO implementar */
  }, []);

  const setFirstCourseReason = useCallback((reason: Reason) => {
    /** @TODO implementar */
  }, []);

  const setSecondaryCourseReason = useCallback((reason: Reason) => {
    /** @TODO implementar */
  }, []);

  return (
    <CompleteSubscriptionContext.Provider
      value={{
        courses,

        startFirstExam,
        startSecondaryExam,
        finishExams,

        loadingFirstExam,
        loadingSecondaryExam,

        setFirstCourseAnswers,
        setSecondaryCourseAnswers,

        setFirstCourseReason,
        setSecondaryCourseReason,

        readyToSubmit,
        submit,
        loadingSubmit,

        currentPage,
      }}
    >
      {children}
    </CompleteSubscriptionContext.Provider>
  );
};
