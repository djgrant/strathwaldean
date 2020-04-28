<script>
  export let title;
  export let date;
</script>

<style src="./ghost.css" global>
  .date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #888;
    margin-top: -14px;
    margin-bottom: 12px;
  }
</style>

<article class="ghost post-full-content">
  {#if title}
    <h1>{title}</h1>
  {/if}
  {#if date}
    <div class="date">{new Date(date).toDateString()}</div>
  {/if}
  <slot />
</article>
