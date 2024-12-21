<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is the default <a href="https://svelte.dev/docs/kit">SvelteKit</a> demo app, but with hash-based
		routing — instead of determining the current route from the URL pathname, SvelteKit determines it
		from the hash.
	</p>

	<p>
		This is useful in situations where (for example) you don't control the webserver where your app
		is deployed, and can't specify a <code>200.html</code> fallback page or similar. It's also useful
		in the context of things like Electron apps.
	</p>

	<p>
		It comes with some caveats: you can't use server-side rendering (or indeed any server logic),
		and you have to make sure that the links in your app all start with <code>/#/</code>, or they
		won't work. Beyond that, everything works exactly like a normal SvelteKit app.
	</p>
</div>
