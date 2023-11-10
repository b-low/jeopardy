<script lang="ts">
  import { goto } from '$app/navigation';

  // onNavigate((navigation) => {
  //   return new Promise((res) => setTimeout(res, 1000));
  // });

  function handleKeypress(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
      case 'Escape':
        goto('/');
        break;
      default:
        break;
    }
  }
</script>

<style lang="scss">
  :global(body) {
    color: rgb(229, 229, 229);
    font-family: 'Lexend Deca', sans-serif;
    background-color: #09111f;
  }
</style>

<!-- prettier-ignore -->
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</svelte:head>

<svelte:window on:keyup={handleKeypress} />

<slot />
