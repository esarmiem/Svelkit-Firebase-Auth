<script>
	const heroTitle = 'Sveltkit & Firebase Google Authentication';
	const heroTitleSM = 'Sveltkit & Firebase Auth';

	const heroWords = heroTitle.split(' ');
	const heroLetters = heroWords.map((word) => word.split(''));
</script>

<section
	class="flex flex-col items-center gap-2 max-w-4xl 2xl:max-w-5xl justify-center load-hidden h-screen m-auto text-center"
>
	<h1
		class="flex flex-wrap gap-x-1 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl 2xl:text-8xl font-bold font-inter !leading-min hover:cursor-default"
	>
		{#each heroLetters as word, wordIndex}
			<span class="hidden lg:flex">
				{#each word as letter, letterIndex}
					<span
						class="letter hover:text-transparent bg-gradient-to-br bg-clip-text [-webkit-background-clip:text] from-orange-500 to-orange-800 transition-all duration-150"
					>
						{letter}
					</span>
				{/each}
			</span>
		{/each}
		<span class="lg:hidden" style="text-wrap: balance;">{heroTitleSM}</span>
	</h1>
	<img class="mx-auto h-80 sm:h-80 md:h-80 lg:h-80 xl:h-96" src="/sveltekit.webp" alt="sveltekit" />
</section>
