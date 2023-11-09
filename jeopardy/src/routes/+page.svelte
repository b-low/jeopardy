<script lang="ts">
  import { Category, grid } from '$lib/data';
  import AnswerTile from './AnswerTile.svelte';

  function getCategoryTitle(category: Category): string {
    switch (category) {
      case Category.I:
        return 'In another world with my Pixel 8 Pro on sale now for $999';
      case Category.NO:
        return "Don't judge an anime by its opening covers";
      case Category.RI:
        return 'Rizz is so stupid I call it Deen/stay night';
      case Category.MI:
        return 'Microplastic memories';
      case Category.NA:
        return 'Narcotics';
      case Category.SE:
        return 'Seasonal X';
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

<div class="categories grid">
  {#each Object.values(Category) as category}
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
