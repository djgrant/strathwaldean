<script>
  import { fade } from "svelte/transition";
  import { stores } from "@sapper/app";
  import Loader from "../components/loader.svelte";
  import Nav from "../components/nav.svelte";

  const { preloading } = stores();
  export let segment;
</script>

<style src="../global.css" global>

</style>

{#if $preloading}
  <Loader />
{/if}

<Nav {segment} />

{#if !$preloading}
  <main class="container" transition:fade={{ duration: 200 }}>
    <slot />
  </main>
{/if}
