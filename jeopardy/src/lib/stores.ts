import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { NUM_ANSWERS } from './data';
import { AnswerState } from './types';

const gameState = writable<AnswerState[]>(Array(NUM_ANSWERS).fill(AnswerState.UNCOMPLETED));
const scores = writable<string>('');
const categoriesRevealed = writable<boolean>(false);

// Run in the client; don't let svelte compile it out
if (browser) {
  const GAME_STATE_KEY = 'state';
  let savedGameState = window.localStorage.getItem(GAME_STATE_KEY);
  let initialGameState: AnswerState[];
  if (savedGameState !== null) {
    initialGameState = JSON.parse(savedGameState);
  } else {
    initialGameState = Array(NUM_ANSWERS).fill(AnswerState.UNCOMPLETED);
  }
  gameState.set(initialGameState);
  gameState.subscribe((v) => {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(v));
  });

  const SCORES_KEY = 'scores';
  let savedScores = window.localStorage.getItem(SCORES_KEY);
  let initialScores: string;
  if (savedScores !== null) {
    initialScores = savedScores;
  } else {
    initialScores = '';
  }
  scores.set(initialScores);
  scores.subscribe((v) => {
    localStorage.setItem(SCORES_KEY, v);
  });

  const CATEGORIES_REVEALED_KEY = 'categoriesRevealed';
  let savedCategoriesRevealed = window.localStorage.getItem(CATEGORIES_REVEALED_KEY);
  let initialCategoriesRevealed = savedCategoriesRevealed === 'true';
  categoriesRevealed.set(initialCategoriesRevealed);
  categoriesRevealed.subscribe((v) => {
    localStorage.setItem(CATEGORIES_REVEALED_KEY, v ? 'true' : 'false');
  });
}

export { gameState, scores, categoriesRevealed };
