<script lang="ts">
  import { goto } from '$app/navigation';
  import { NUM_ANSWERS, getCategoryTitle, grid } from '$lib/data';
  import { AnswerState, answerCategories } from '$lib/types';
  import { categoriesRevealed, gameState, scores } from '$lib/stores';
  import AnswerTile from './AnswerTile.svelte';

  let inoriRevealed = false;

  function handleKeyUp(event: KeyboardEvent) {
    if (event.target && (event.target as any).tagName !== 'BODY') {
      return;
    }
    switch (event.key) {
      case 'c':
        categoriesRevealed.set(!$categoriesRevealed);
        break;
      case 'e':
        goto('/-1');
        break;
      case 'f':
        goto('/format');
        break;
      case '\\':
        goto('/final');
        break;
      case 'I':
        inoriRevealed = !inoriRevealed;
        break;
      case 'R':
        if (confirm('Reset?')) {
          gameState.set(Array(NUM_ANSWERS).fill(AnswerState.UNCOMPLETED));
          scores.set('');
          categoriesRevealed.set(false);
        }
        break;
      default:
        break;
    }
  }
</script>

<style lang="scss">
  .grid {
    display: grid;
    margin: auto;
    grid-template-columns: repeat(6, 280px);
    justify-content: center;
    justify-items: center;
    gap: 40px;
    text-align: center;

    .tile {
      box-sizing: border-box;
      padding: 25px;
    }
  }

  .answers {
    grid-template-rows: repeat(5, 180px);
    align-items: center;
  }

  .categories {
    align-items: end;

    .category {
      padding: 25px 0;

      h2 {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }

  :global(.inori) {
    margin-top: 40px;
    transition: color 0.5s;

    .inoriRevealed > & {
      color: rgb(207, 36, 36);
    }
  }
</style>

<svelte:window on:keyup={handleKeyUp} />

<div class="categories grid">
  {#each answerCategories as category, i}
    <div class="category tile">
      <h2 class:inoriRevealed>
        {#if $categoriesRevealed}
          {@html getCategoryTitle(category)}
        {:else}
          Category {i + 1}
        {/if}
      </h2>
    </div>
  {/each}
</div>
<div class="answers grid">
  {#each grid as answer}
    <AnswerTile {answer} />
  {/each}
</div>
