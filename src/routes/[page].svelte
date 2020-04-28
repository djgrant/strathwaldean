<script context="module">
  import Ghost from "../components/ghost.svelte";
  export async function preload({ params, query }) {
    const res = await this.fetch(`${params.page}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { page: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let page;
</script>

<style>
  @media screen and (max-width: 600px) {
    h1 {
      display: none;
    }
  }
</style>

<svelte:head>
  <title>Strathwaldean Quad</title>
</svelte:head>

<Ghost>
  <h1>{page.title}</h1>
  {@html page.html}
</Ghost>
