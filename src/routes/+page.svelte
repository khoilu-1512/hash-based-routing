<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#await data.incidents}
		Loading incidents...
	{:then incidents}
		{#each incidents as incident}
			<p>{incident.number}</p>
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
