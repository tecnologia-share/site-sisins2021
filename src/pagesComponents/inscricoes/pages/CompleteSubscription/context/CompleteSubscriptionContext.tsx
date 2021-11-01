import { Course } from 'pagesComponents/inscricoes/types/Course';
import { createContext } from 'react';

interface CompleteSubscriptionContextProps {
  courses: Courses;

  startFirstExam: () => void;
  startSecondaryExam: () => void;
  finishExams: () => void;

  loadingFirstExam: boolean;
  loadingSecondaryExam: boolean;

  setFirstCourseAnswers: (answers: ExamAnswer[]) => void;
  setSecondaryCourseAnswers: (answers: ExamAnswer[]) => void;

  setFirstCourseReason: (reason: Reason) => void;
  setSecondaryCourseReason: (reason: Reason) => void;

  readyToSubmit: boolean;
  submit: () => Promise<void>;
  loadingSubmit: boolean;

  currentPage: SubscriptionPages;
}

export type SubscriptionPages = 'Reason' | 'StartExams' | 'Exam';

export const CompleteSubscriptionContext = createContext(
  {} as CompleteSubscriptionContextProps
);

export interface Courses {
  first: CourseToSubmit;
  secondary?: CourseToSubmit;
}

interface CourseToSubmit extends Course, Reason {
  examAnswers?: ExamAnswer[];
  examCompleted: boolean;
}

export interface Reason {
  reason: string;
  videoLink?: string;
}

export interface ExamAnswer {
  questionId: string;
  response: string;
}
