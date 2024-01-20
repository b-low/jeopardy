export enum AnswerCategory {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,
  CATEGORY_4,
  CATEGORY_5,
  CATEGORY_6,
  CATEGORY_7,
  CATEGORY_8
}
export const answerCategories: AnswerCategory[] = Object.values(AnswerCategory).filter(
  (v) => typeof v === 'number'
) as AnswerCategory[];

export type Category = AnswerCategory | 'EXAMPLE';

export enum SongSource {
  OPENING = 'OP',
  ENDING = 'ED',
  MOVIE = 'MOVIE',
  OVA = 'OVA'
}

export interface AnswerDefinition {
  series: string;
  filename: string;
  source?: SongSource;
  volume?: number;
}

export type Answer = AnswerDefinition & {
  index: number;
  category: Category;
  points: number;
  example?: boolean;
};

export enum AnswerState {
  UNCOMPLETED = 'uncompleted',
  COMPLETED_FAILED = 'completed-failed',
  COMPLETED_GUESSED = 'completed-guessed',
  COMPLETED_GUESSED_BONUS = 'completed-guessed-bonus'
}
