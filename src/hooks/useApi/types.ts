export interface ApiGetAsks {
  asks: Ask[];
}

export interface Ask {
  id: string;
  ask: string;
  type: 'DISCURSIVE' | 'ALTERNATIVE';
  alternatives: {
    one: string;
    two: string;
    tree: string;
    four: string;
    five: string;
  };
}

export interface Register {
  name: string;
  email: string;
  password: string;
  phone: string;
  birth_date: string;
  country: string;
  state: string;
  city: string;
  asksAnswers: AsksAnswers[];
}

export interface AsksAnswers {
  asksId: string;
  response: string;
}

export interface RegisterReturn {
  message: string;
}

export interface Exam {
  id: string;
  title: string;
  text: string;
  created_at: string;
  questions: Array<{
    id: string;
    question: string;
    alternative1: string;
    alternative2: string;
    alternative3: string;
    alternative4: string;
    alternative5: string;
    image: string;
    points: number;
    created_at: string;
  }>;
}

export interface SubscribeInCoursesParams {
  option1: CourseToSubscribe;
  option2?: CourseToSubscribe;
}

export interface CourseToSubscribe {
  courseId: string;
  reason: string;
  videoLink: string;
  examAnswers: Array<{ questionId: string; response: number }>;
}

export interface SubscribeInCoursesResponse {
  message: string;
  selectionProcess: {
    id: string;
    participantId: string;
    courseId: string;
    reason: string;
    status: string;
    videoLink: string;
    created_at: string;
  };
}
