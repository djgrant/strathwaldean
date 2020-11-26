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

<style global>
  .ghost h1 {
    margin-bottom: 24px;
  }
</style>

<svelte:head>
  <title>Strathwaldean Quad</title>
</svelte:head>

<Ghost title={page.title}>
  {@html page.html}
</Ghost>
