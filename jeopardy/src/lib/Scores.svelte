<script lang="ts">
  import { scores } from './stores';
</script>

<style lang="scss">
  .score-container {
    margin: 100px 200px 50px;

    h3 {
      font-size: 40px;
      margin-bottom: 20px;
    }

    .scores {
      font-size: 28px;
      min-height: 600px;
      white-space: pre-wrap;
      outline: none;
    }
  }
</style>

<div class="score-container">
  <h3>Scores</h3>
  <div contenteditable class="scores" bind:innerText={$scores} spellcheck="false"></div>
</div>
