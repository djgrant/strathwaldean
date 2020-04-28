<script context="module">
  import Ghost from "../../components/ghost.svelte";

  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #888;
    margin-top: -14px;
    margin-bottom: 12px;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Ghost>
  <h1>{post.title}</h1>
  <div class="date">{new Date(post.created_at).toDateString()}</div>
  {@html post.html}
</Ghost>
