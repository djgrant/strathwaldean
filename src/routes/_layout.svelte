<script>
  import Nav from "../components/nav.svelte";

  export let segment;
</script>

<style src="../global.css" global>

</style>

<Nav {segment} />

<main class="container">
  <slot />
</main>
