<script>
  import Nav from "../components/nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<main class="container">
  <slot />
</main>
