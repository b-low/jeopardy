<script lang="ts">
  import { categories, getCategoryTitle } from '$lib/data';
  import type { PageData } from './$types';

  export let data: PageData;

  const category = categories[Number(data.categoryIndex)];
  const points = data.points;

  function handleKeypress(event: KeyboardEvent) {
    console.log(event.key);
    // switch (event.key) {
    // }
  }
</script>

<style lang="scss">
  .title {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 70px;
    font-size: 30px;

    > * {
      display: inline;
    }

    .category {
      font-weight: 500;
    }

    span {
      margin: 0 20px;
    }

    .points {
      font-weight: 400;
    }
  }
</style>

<svelte:window on:keyup={handleKeypress} />

<div class="title">
  <h2 class="category">{getCategoryTitle(category)}</h2>
  <span>-</span>
  <h3 class="points">{points}</h3>
</div>
