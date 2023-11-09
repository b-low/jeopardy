<script lang="ts">
  import { goto } from '$app/navigation';
  import { AnswerState, getAnswer, getCategoryTitle } from '$lib/data';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { gameState } from '$lib/stores';

  export let data: PageData;

  const answer = getAnswer(Number(data.index));
  const shortUrl = `/short/${answer.filename}`;
  const fullUrl = `/full/${answer.filename}`;
  let shortVideo: HTMLMediaElement;
  let fullVideo: HTMLMediaElement;
  let startedPlayingFull = false;

  onMount(() => {
    shortVideo = document.getElementById('short') as HTMLMediaElement;
    fullVideo = document.getElementById('full') as HTMLMediaElement;
  });

  function playFull() {
    if (fullVideo.paused) {
      shortVideo.pause();
      fullVideo.currentTime = 0;
      fullVideo.play();
      startedPlayingFull = true;
    }
  }

  function revealFull() {
    if (startedPlayingFull) {
      fullVideo.style.display = 'block';
    }
  }

  function playPause() {
    if (fullVideo.style.display === 'block') {
      if (fullVideo.paused) {
        fullVideo.play();
      } else {
        fullVideo.pause();
      }
    } else {
      if (fullVideo.paused) {
        if (startedPlayingFull) {
          fullVideo.play();
        } else {
          if (shortVideo.paused) {
            shortVideo.currentTime = 0;
            shortVideo.play();
          } else {
            shortVideo.pause();
          }
        }
      } else {
        fullVideo.pause();
      }
    }
  }

  function updateGameState(state: AnswerState) {
    gameState.update((gameState) => {
      gameState[answer.index] = state;
      return gameState;
    });
  }

  function guess() {
    if (startedPlayingFull) {
      updateGameState(AnswerState.COMPLETED_GUESSED);
    } else {
      updateGameState(AnswerState.COMPLETED_GUESSED_BONUS);
    }
  }

  function fail() {
    updateGameState(AnswerState.COMPLETED_FAILED);
  }

  function handleKeypress(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        goto('/');
        break;
      case ' ':
        playPause();
        break;
      case 'Enter':
        playFull();
        break;
      case 'S':
        revealFull();
        break;
      case 'G':
        guess();
        break;
      case 'F':
        fail();
        break;
      default:
        break;
    }
  }
</script>

<style lang="scss">
  .title {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 70px;

    > * {
      display: inline;
    }

    .category {
      font-size: 48px;
      font-weight: 500;
    }

    span {
      font-size: 32px;
      margin: 0 20px;
    }

    .points {
      font-weight: 400;
      font-size: 32px;
    }
  }

  video {
    margin: auto;
    display: none;
  }
</style>

<svelte:window on:keyup={handleKeypress} />

<div class="title">
  <h2 class="category">{getCategoryTitle(answer.category)}</h2>
  <span>-</span>
  <h3 class="points">{answer.points}</h3>
</div>

<!-- svelte-ignore a11y-media-has-caption -->
<video id="short" src={shortUrl}></video>
<!-- svelte-ignore a11y-media-has-caption -->
<video id="full" src={fullUrl} controls></video>
