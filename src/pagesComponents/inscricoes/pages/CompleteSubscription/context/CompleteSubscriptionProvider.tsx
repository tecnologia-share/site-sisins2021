import useApi from 'hooks/useApi';
import { Exam } from 'hooks/useApi/types';
import { useRouter } from 'next/router';
import { Course } from 'pagesComponents/inscricoes/types/Course';
import { ReactNode, useCallback, useEffect, useState } from 'react';
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
  const router = useRouter();
  const { apiGetCourseExam, apiSubscribeInCourses } = useApi();
  const [courses, setCourses] = useState<Courses>(() => {
    if (!router.query.course1) return {} as Courses;

    const course1 = JSON.parse(router.query.course1 as string) as Course;
    const course2 = router.query.course2
      ? (JSON.parse(router.query.course2 as string) as Course)
      : undefined;

    return {
      option1: {
        ...course1,
        courseId: course1.id,
        reason: '',
        examCompleted: false,
        examAnswers: [],
      },
      option2: course2
        ? {
            ...course2,
            courseId: course2.id,
            reason: '',
            examCompleted: false,
            examAnswers: [],
          }
        : undefined,
    };
  });
  const [readyToSubmit, setReadyToSubmit] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(true);
  const [loadingFirstExam, setLoadingFirstExam] = useState(true);
  const [loadingSecondaryExam, setLoadingSecondaryExam] = useState(true);
  const [currentPage, setCurrentPage] = useState<SubscriptionPages>(() =>
    courses.option1.hasExam || courses.option2?.hasExam
      ? 'StartExams'
      : 'Reason'
  );
  const [currentExam, setCurrentExam] = useState<Exam>({} as Exam);
  const [currentExamNumber, setCurrentExamNumber] = useState(0);

  useEffect(() => {
    if (!router.query.course1) {
      router.push('/inscricoes');
    }
  }, [router]);

  const startFirstExam = useCallback(async () => {
    setLoadingFirstExam(true);

    try {
      const firstCourseExam = await apiGetCourseExam(courses.option1.id);
      setCurrentExam(firstCourseExam.data.exam);
      setCurrentPage('Exam');
      setCurrentExamNumber(1);
    } catch (error) {
      console.error(error);
    }

    setLoadingFirstExam(false);
  }, [apiGetCourseExam, courses]);

  const startSecondaryExam = useCallback(async () => {
    setLoadingSecondaryExam(true);

    try {
      const firstCourseExam = await apiGetCourseExam(courses.option2.id);
      setCurrentExam(firstCourseExam.data.exam);
      setCurrentPage('Exam');
      setCurrentExamNumber(2);
    } catch (error) {
      console.error(error);
    }

    setLoadingSecondaryExam(false);
  }, [apiGetCourseExam, courses]);

  const finishExams = useCallback(() => {
    setCurrentPage('Reason');
  }, []);

  const submit = useCallback(async () => {
    setLoadingSubmit(true);

    apiSubscribeInCourses(courses);

    setLoadingSubmit(false);
  }, [apiSubscribeInCourses, courses]);

  const copyCourses = useCallback(() => {
    const copy: Courses = {
      option1: {
        ...courses.option1,
        examAnswers: courses.option1.examAnswers
          ? [...courses.option1.examAnswers]
          : undefined,
      },
      option2: courses.option2
        ? {
            ...courses.option2,
            examAnswers: courses.option2.examAnswers
              ? [...courses.option2.examAnswers]
              : undefined,
          }
        : undefined,
    };

    return copy;
  }, [courses]);

  const setExamAnswers = useCallback(
    (answers: ExamAnswer[]) => {
      const newState = copyCourses();

      switch (currentExamNumber) {
        case 1: {
          newState.option1.examAnswers = answers;
          break;
        }
        case 2: {
          newState.option2.examAnswers = answers;
          break;
        }
      }

      setCourses(newState);
    },
    [copyCourses, currentExamNumber]
  );

  const verifyIfIsReadyToSubmit = useCallback((newState: Courses) => {
    const firstCourseReason = newState.option1.reason;
    const secondaryCourseReason = newState.option2
      ? newState.option2.reason
      : true;

    if (firstCourseReason && secondaryCourseReason) {
      setReadyToSubmit(true);
    }
  }, []);

  const setFirstCourseReason = useCallback(
    ({ reason, videoLink }: Reason) => {
      const newState = copyCourses();
      newState.option1.reason = reason;
      newState.option1.videoLink = videoLink;
      setCourses(newState);
      verifyIfIsReadyToSubmit(newState);
    },
    [copyCourses, verifyIfIsReadyToSubmit]
  );

  const setSecondaryCourseReason = useCallback(
    ({ reason, videoLink }: Reason) => {
      const newState = copyCourses();
      newState.option2.reason = reason;
      newState.option2.videoLink = videoLink;
      setCourses(newState);
      verifyIfIsReadyToSubmit(newState);
    },
    [copyCourses, verifyIfIsReadyToSubmit]
  );

  if (!router.query.course1) {
    return null;
  }

  return (
    <CompleteSubscriptionContext.Provider
      value={{
        courses,

        currentExam,

        startFirstExam,
        startSecondaryExam,
        finishExams,

        loadingFirstExam,
        loadingSecondaryExam,

        setExamAnswers,

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
