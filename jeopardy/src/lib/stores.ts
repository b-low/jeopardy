import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { NUM_ANSWERS, grid } from './data';

interface AnswerState {
  completed: boolean;
}
const gameState = writable<AnswerState[]>(Array(NUM_ANSWERS).fill({ completed: false }));

// Run in the client; don't let svelte compile it out
if (browser) {
  const GAME_STATE_KEY = 'state';

  let savedGameState = window.localStorage.getItem(GAME_STATE_KEY);
  let initialGameState: AnswerState[];
  if (savedGameState !== null) {
    initialGameState = JSON.parse(savedGameState);
  } else {
    initialGameState = Array(NUM_ANSWERS).fill({ completed: false });
  }
  gameState.set(initialGameState);

  gameState.subscribe((state) => {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
  });
}
