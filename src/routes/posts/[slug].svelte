<script context="module">
  import Ghost from "../../components/ghost.svelte";

  export async function preload({ params }) {
    const res = await this.fetch(`posts/${params.slug}.json`);
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

<svelte:head>
  <title>{post.title} | Strathwaldean Quad</title>
</svelte:head>

<Ghost
  title={post.title}
  date={post.created_at}
  featureImage={post.feature_image}
  author={post.primary_author.name}>
  {@html post.html}
</Ghost>
