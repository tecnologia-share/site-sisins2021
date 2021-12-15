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

export interface ApiGetCourses {
  courses: Course[];
}
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
