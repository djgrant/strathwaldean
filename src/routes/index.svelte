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

</style>

<svelte:head>
  <title>Latest | Strathwaldean Quad</title>
</svelte:head>

{#each posts as post}
  <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
  <h2>{post.title}</h2>
  {@html post.preview}
  <a rel="prefetch" href="blog/{post.slug}">Read more</a>
{/each}
