<script>
	import { isLoggedIn, user } from './../../stores.js';
</script>

{#if $isLoggedIn}
	<section>
		<div class="flex flex-col items-center justify-center gap-6 mt-20">
			<h1 class="bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text text-4xl font-bold font-mono">Profile</h1>
			<img class="rounded-full" src={$user.photoURL} alt={$user.displayName} />
			<h3 class="bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text text-xl font-bold font-mono">{$user.displayName}</h3>
			<p class="font-semibold font-mono">{$user.email}</p>
		</div>
	</section>
{/if}
