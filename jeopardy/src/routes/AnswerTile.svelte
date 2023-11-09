<script lang="ts">
  import type { Answer } from '$lib/data';

  export let answer: Answer;
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
    background-color: rgba(37, 56, 91, 0.5);
    box-shadow: 0 0 10px 5px rgba(25, 25, 25, 0.71);
    color: rgb(240, 242, 245);
    font-size: 40px;
    font-weight: 700;
  }
</style>

<a class="answer tile" href="{answer.category}/{answer.points}">{answer.points}</a>
