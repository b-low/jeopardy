<script lang="ts">
  import { goto } from '$app/navigation';
  import { AnswerState, NUM_ANSWERS, categories, getCategoryTitle, grid } from '$lib/data';
  import { gameState } from '$lib/stores';
  import AnswerTile from './AnswerTile.svelte';

  let inoriRevealed = false;

  function handleKeypress(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
      case 'e':
        goto('/-1');
        break;
      case '\\':
        goto('/final');
        break;
      case 'R':
        if (confirm('Reset?')) {
          gameState.set(Array(NUM_ANSWERS).fill(AnswerState.UNCOMPLETED));
        }
        break;
      case 'I':
        inoriRevealed = true;
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

<svelte:window on:keyup={handleKeypress} />

<div class="categories grid">
  {#each categories as category}
    <div class="category tile">
      <h2 class:inoriRevealed>{@html getCategoryTitle(category)}</h2>
    </div>
  {/each}
</div>
<div class="answers grid">
  {#each grid as answer}
    <AnswerTile {answer} />
  {/each}
</div>
