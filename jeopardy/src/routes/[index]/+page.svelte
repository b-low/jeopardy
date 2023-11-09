<script lang="ts">
  import { goto } from '$app/navigation';
  import { AnswerState, getAnswer, getCategoryTitle } from '$lib/data';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { gameState } from '$lib/stores';

  export let data: PageData;

  const answer = getAnswer(Number(data.index));
  $: state = $gameState[answer.index];
  const shortUrl = `/short/${answer.filename}`;
  const fullUrl = `/full/${answer.filename}`;
  let shortVideo: HTMLMediaElement;
  let fullVideo: HTMLMediaElement;
  let startedPlayingFull = false;
  let revealed = false;

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
      revealed = true;
    }
  }

  function playPause() {
    if (revealed) {
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

  function playAndReveal() {
    playFull();
    revealFull();
  }

  function guess() {
    if (startedPlayingFull) {
      updateGameState(AnswerState.COMPLETED_GUESSED);
    } else {
      updateGameState(AnswerState.COMPLETED_GUESSED_BONUS);
    }
    playAndReveal();
  }

  function fail() {
    updateGameState(AnswerState.COMPLETED_FAILED);
    playAndReveal();
  }

  function handleKeypress(event: KeyboardEvent) {
    console.log(event.key);
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
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.5;

    &.completed-failed {
      background-color: rgb(73, 20, 20);
    }

    &.completed-guessed {
      background-color: rgb(20, 73, 31);
    }

    &.completed-guessed-bonus {
      background-color: rgb(73, 56, 20);
    }
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: baseline;

    &.category-title {
      margin-top: 80px;

      > * {
        display: inline;
        margin: 0;
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

    &.series-title {
      display: none;
      margin-top: 100px;

      &.revealed {
        display: flex;
      }

      .series {
        margin: 0;
        font-weight: 400;
        font-size: 32px;
      }
    }
  }

  .video-mask {
    display: none;
    margin: 24px auto 0;
    border-radius: 24px;
    overflow: hidden;
    width: 1280px;
    height: 720px;
    box-shadow: 0 0 10px 5px rgba(25, 25, 25, 0.71);

    &.revealed {
      display: block;
    }
  }

  video {
    width: 100%;
  }
</style>

<svelte:window on:keyup={handleKeypress} />

<div class="bg {state}"></div>

<div class="category-title title">
  <h2 class="category">{getCategoryTitle(answer.category)}</h2>
  <span>-</span>
  <h2 class="points">{answer.points}</h2>
</div>

<div class="series-title title" class:revealed>
  <h3 class="series">{answer.series}</h3>
</div>

<div class="video-mask" class:revealed>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video id="short" src={shortUrl} hidden></video>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video id="full" src={fullUrl} controls></video>
</div>
