<script>
  export let form;
</script>

{#if form}
  {#if form.error}
    <h1>{form.error}</h1>
  {:else}
    <img src={form.image} alt="" />
  {/if}
{/if}
