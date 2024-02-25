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

    ul {
      max-width: 800px;
      font-size: 24px;
      margin: auto;
      font-weight: 300;
    }

    li {
      margin-bottom: 1em;
    }

    .phase-list {
      ul {
        margin-bottom: 1em;
      }

      li {
        margin-bottom: 0;
      }
    }

    .prize-list {
      margin-top: -1em;
      margin-bottom: 1em;

      li {
        margin-bottom: 0;
      }
    }
  }
</style>

<div class="title-container">
  <div class="category-title title">
    <h2 class="category">Format</h2>
  </div>
</div>

<div class="question">
  <ul>
    <li>
      Buzz in by sending any message in the Discord chat. I'll call names in the queue sequentially
      to answer in voice.
    </li>
    <li>There are two phases to each guessing period:</li>
    <ol class="phase-list">
      <li><b>Bonus Phase</b></li>
      <ul>
        <li>A shorter clip will be played twice.</li>
        <li>
          Correct guesses will receive 1.5x points while incorrect guesses will receive a deduction
          of 1.5x points.
        </li>
      </ul>
      <li><b>Regular Phase</b></li>
      <ul>
        <li>The full (tv-size) music will be played.</li>
        <li>
          Correct guesses will receive points while incorrect guesses will not receive a deduction
          of points.
        </li>
      </ul>
    </ol>
    <li>
      You may only guess once per music. This means if you guess incorrectly in the <b
        >Bonus Phase</b
      >
      you cannot guess in the <b>Regular Phase</b>.
    </li>
    <li>No take-backsies once you put your name in the queue.</li>
    <li>The last correct guesser chooses the next music.</li>
  </ul>
</div>
