export enum AnswerCategory {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,
  CATEGORY_4,
  CATEGORY_5,
  CATEGORY_6
}
export const answerCategories: AnswerCategory[] = [
  AnswerCategory.CATEGORY_1,
  AnswerCategory.CATEGORY_2,
  AnswerCategory.CATEGORY_3,
  AnswerCategory.CATEGORY_4,
  AnswerCategory.CATEGORY_5,
  AnswerCategory.CATEGORY_6
];

export type Category = AnswerCategory | 'EXAMPLE';

export enum SongSource {
  OPENING,
  ENDING,
  MOVIE
}

export interface AnswerDefinition {
  series: string;
  filename: string;
  source?: SongSource;
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
