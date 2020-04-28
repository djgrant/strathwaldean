<script context="module">
  import Ghost from "../components/ghost.svelte";

  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .card {
    /* background: white; */
    /* padding: 20px 22px; */
    /* border-radius: 3px; */
    /* border: 1px solid #e3e3e3; */
    /* border-bottom: 1px solid #e3e3e3; */
    padding-bottom: 28px;
    /* margin-bottom: 20px; */
    overflow: hidden;
  }

  .card:last-child {
    border: none;
  }

  .date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #888;
    margin-top: -8px;
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 16px !important;
  }
</style>

<svelte:head>
  <title>Strathwaldean Quad</title>
</svelte:head>

{#each posts as post}
  <div class="card">
    <Ghost>
      <h1>{post.title}</h1>
      <div class="date">{new Date(post.created_at).toDateString()}</div>
      <p>
        {@html post.excerpt}
      </p>
      <a href={`/blog/${post.slug}`}>Continue reading →</a>
    </Ghost>
  </div>
{/each}
