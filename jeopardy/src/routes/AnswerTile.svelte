<script lang="ts">
  import type { Answer } from '$lib/data';
  import { gameState } from '$lib/stores';

  export let answer: Answer;
  $: state = $gameState[answer.index];
</script>

<style lang="scss">
  .answer {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: rgb(25, 35, 60);
    color: rgb(188, 194, 212);
    box-shadow: 0 0 10px 5px rgba(25, 25, 25, 0.71);
    font-size: 40px;
    font-weight: 700;

    &.completed-failed,
    &.completed-guessed,
    &.completed-guessed-bonus {
      opacity: 0.15;
    }

    &.completed-failed {
      background-color: rgb(73, 20, 20);
    }

    &.completed-guessed {
      background-color: transparent;
    }

    &.completed-guessed-bonus {
      background-color: rgb(73, 56, 20);
    }
  }
</style>

<a class="answer tile {state}" href="/{answer.index}">{answer.points}</a>
