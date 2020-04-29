<script>
  import GhostContent from "./ghost-content.svelte";
  export let title;
  export let date;
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
    margin-top: -8px;
    margin-bottom: 12px;
  }
</style>

<div class="ghost">
  <div class="feature-image">
    {#if featureImage}
      <img src={featureImage} alt="{title} feature image" />
    {/if}
  </div>
  {#if title}
    <h1>{title}</h1>
  {/if}
  {#if date}
    <div class="date">{new Date(date).toDateString()}</div>
  {/if}
  <GhostContent>
    <slot />
  </GhostContent>
</div>
