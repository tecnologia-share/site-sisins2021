import { Exam } from 'hooks/useApi/types';
import { Course } from 'pagesComponents/inscricoes/types/Course';
import { createContext } from 'react';

interface CompleteSubscriptionContextProps {
  courses: Courses;

  currentExam?: Exam;

  startFirstExam: () => void;
  startSecondaryExam: () => void;
  finishExams: () => void;

  loadingFirstExam: boolean;
  loadingSecondaryExam: boolean;

  setExamAnswers: (answers: ExamAnswer[]) => void;

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
  option1: CourseToSubmit;
  option2?: CourseToSubmit;
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
