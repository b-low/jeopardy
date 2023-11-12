<script lang="ts">
</script>

<style lang="scss">
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
    }
  }

  .question {
    margin-top: 30px;

    p {
      max-width: 800px;
      font-size: 24px;
      margin: auto;
      font-weight: 300;
    }
  }
</style>

<div class="title-container">
  <div class="category-title title">
    <h2 class="category">Final Jeopardy</h2>
    <span class="separator">-</span>
    <h2 class="points">500</h2>
  </div>
</div>

<div class="question">
  <p>How many rolls will it take me to c6 Furina?</p>

  <p>(Expected value: 677.25)</p>
</div>
