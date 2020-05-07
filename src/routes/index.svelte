<script context="module">
  import Ghost from "../components/ghost.svelte";

  export function preload({ params, query }) {
    return this.fetch(`posts.json`)
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
  .post {
    padding-bottom: 28px;
  }

  p {
    margin-bottom: 16px !important;
  }
</style>

<svelte:head>
  <title>Strathwaldean Quad</title>
</svelte:head>

{#each posts as post, index}
  <div class="post">
    <Ghost
      title={post.title}
      date={post.created_at}
      featureImage={index === 0 && post.feature_image}>
      <p>
        {@html post.excerpt}
      </p>
      <a href={`/posts/${post.slug}`} rel="prefetch">Continue reading →</a>
    </Ghost>
  </div>
{/each}
