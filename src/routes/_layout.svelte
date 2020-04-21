<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    background-color: white;
  }
</style>

<Nav {segment} />

<main class="container">
  <slot />
</main>
