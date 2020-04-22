<script context="module">
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
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 20px;
    overflow: hidden;
  }

  .card:last-child {
    border: none;
  }

  .date {
    font-size: 12px;
    color: #777;
    margin-top: -6px;
  }
</style>

<svelte:head>
  <title>Strathwaldean Quad</title>
</svelte:head>

{#each posts as post}
  <div class="card">
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <h2>{post.title}</h2>
    <div class="date">{post.date}</div>
    {@html post.html}
  </div>
{/each}
