<script>
  import GhostContent from "./ghost-content.svelte";
  export let title;
  export let date;
  export let author;
  export let featureImage;
</script>

<style>
  .feature-image img {
    width: 100%;
    max-height: 230px;
    object-fit: cover;
    margin-bottom: 2em;
  }

  .date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #888;
    margin-top: -16px;
    margin-bottom: 12px;
  }
</style>

<div class="ghost">
  {#if title}
    <h1>{title}</h1>
  {/if}
  <div class="date">
    {#if author}Posted by {author} on{/if}
    {#if date}{new Date(date).toDateString()}{/if}
  </div>
  {#if featureImage}
    <div class="feature-image">
      <img src={featureImage} alt="{title} feature image" />
    </div>
  {/if}
  <GhostContent>
    <slot />
  </GhostContent>
</div>
