<script lang="ts">
  import { goto } from '$app/navigation';
  import { categories, getCategoryTitle, grid } from '$lib/data';
  import AnswerTile from './AnswerTile.svelte';

  function handleKeypress(event: KeyboardEvent) {
    switch (event.key) {
      case 'e':
        goto('/-1');
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

<svelte:window on:keyup={handleKeypress} />

<div class="categories grid">
  {#each categories as category}
    <div class="category tile">
      <h2>{getCategoryTitle(category)}</h2>
    </div>
  {/each}
</div>
<div class="answers grid">
  {#each grid as answer}
    <AnswerTile {answer} />
  {/each}
</div>
