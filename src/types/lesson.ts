export interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string;
  initialCode: string;
  solution: string;
  hints: string[];
  theory?: string;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}