<script lang="ts">
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
  $: bonusAvailable =
    state === AnswerState.COMPLETED_GUESSED_BONUS ||
    (AnswerState.UNCOMPLETED && !startedPlayingFull);

  onMount(() => {
    // const VOLUME = 0.05;
    const VOLUME = 1;
    shortVideo = document.getElementById('short') as HTMLMediaElement;
    shortVideo.volume = VOLUME;
    fullVideo = document.getElementById('full') as HTMLMediaElement;
    fullVideo.volume = VOLUME;
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

  function handleKeyUp(event: KeyboardEvent) {
    if (event.target && (event.target as any).tagName !== 'BODY') {
      return;
    }
    switch (event.key) {
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

  function handleKeyDown(event: KeyboardEvent) {
    if (event.target && (event.target as any).tagName === 'BODY' && event.key === ' ') {
      event.preventDefault();
    }
  }
</script>

<style lang="scss">
  body {
    text-align: center;
  }

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

  .title-container {
    text-align: center;
  }

  .title {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;

    &.category-title {
      position: relative;
      margin-top: 80px;

      > * {
        display: inline;
        margin: 0;
      }

      .category {
        font-size: 48px;
        font-weight: 500;
      }

      .separator {
        margin: 0 20px;
        font-size: 36px;
      }

      .points {
        font-size: 36px;
        font-weight: 400;
      }

      .bonus-indicator {
        position: absolute;
        right: -30px;
        top: -10px;
        font-size: 28px;
        font-weight: 700;
        color: rgb(221, 178, 86);
        text-shadow: 1px 1px 2px rgb(157, 120, 40);
        transform: rotate(30deg);
      }

      .ed-indicator {
        position: absolute;
        bottom: 12px;
        left: -52px;
        padding: 2px 8px;
        font-size: 18px;
        font-weight: 700;
        font-variant: small-caps;
        background-color: rgb(154, 67, 198);
        border-radius: 8px;
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

<svelte:window on:keyup={handleKeyUp} on:keydown={handleKeyDown} />

<div class="bg {state}"></div>

<div class="title-container">
  <div class="category-title title">
    {#if answer.ed}
      <span class="ed-indicator">ED</span>
    {/if}
    <h2 class="category">{@html getCategoryTitle(answer.category)}</h2>
    <span class="separator">-</span>
    <h2 class="points">{answer.points}</h2>
    {#if bonusAvailable}
      <span class="bonus-indicator">x2</span>
    {/if}
  </div>

  <div class="series-title title" class:revealed>
    <h3 class="series">{answer.series}</h3>
  </div>
</div>

<div class="video-mask" class:revealed>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video id="short" src={shortUrl} hidden></video>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video id="full" src={fullUrl} controls></video>
</div>
