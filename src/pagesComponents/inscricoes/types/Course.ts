export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
  time: string;
  professor: string;
  hasExam: boolean;
  numberOfQuestions: number;
  selectionProcessId: string;
  created_at: string;
}
