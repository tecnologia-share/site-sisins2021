export interface ApiGetAsks {
  asks: Ask[];
}

export interface Ask {
  id: string;
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
  asksAnswers: Array<{
    asksId: string;
    response: string;
  }>;
}

export interface RegisterReturn {
  message: string;
}
