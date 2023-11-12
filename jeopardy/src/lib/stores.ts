import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { AnswerState, NUM_ANSWERS } from './data';

const gameState = writable<AnswerState[]>(Array(NUM_ANSWERS).fill(AnswerState.UNCOMPLETED));
const scores = writable<string>('');

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
  gameState.subscribe((state) => {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
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
  scores.subscribe((s) => {
    localStorage.setItem(SCORES_KEY, s);
  });
}

export { gameState, scores };
