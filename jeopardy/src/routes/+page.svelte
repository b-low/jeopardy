<script lang="ts">
  import { goto } from '$app/navigation';
  import { AnswerState, NUM_ANSWERS, answerCategories, getCategoryTitle, grid } from '$lib/data';
  import { categoriesRevealed, gameState, scores } from '$lib/stores';
  import AnswerTile from './AnswerTile.svelte';

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
      case '\\':
        goto('/final');
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
</style>

<svelte:window on:keyup={handleKeyUp} />

<div class="categories grid">
  {#each answerCategories as category, i}
    <div class="category tile">
      <h2>
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
