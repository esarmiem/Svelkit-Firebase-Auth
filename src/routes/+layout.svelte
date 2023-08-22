<script>
	import { isLoggedIn,user } from './../stores.js';
    import "../app.css";
	import {signOut, onAuthStateChanged} from "@firebase/auth"
	import {auth} from "../../src/firebase"
	import Footer from '../components/footer.svelte';

	const logout = async () => {
		try {
		await signOut(auth);
		$isLoggedIn = false;
		$user = {};
		} catch (error) {
			console.error(error);
		}
	}

	onAuthStateChanged(auth, authUser => {
		$user = authUser;
		$isLoggedIn = !!authUser;
	})
</script>

<main class="h-full w-full">
<header class="bg-white">
	<div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
		<a class="block text-teal-600" href="/">
			<span class="sr-only">Home</span>
			<svg width="34" height="34" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<path fill="#ffc24a" d="m5.8 24.6l.17-.237l8.02-15.214l.017-.161l-3.535-6.64a.656.656 0 0 0-1.227.207Z"/>
				<path fill="#ffa712" d="m5.9 24.42l.128-.25l7.937-15.056l-3.526-6.666a.6.6 0 0 0-1.133.206Z"/>
				<path fill="#f4bd62" d="m16.584 14.01l2.632-2.7l-2.633-5.021a.678.678 0 0 0-1.195 0l-1.407 2.682V9.2Z"/>
				<path fill="#ffa50e" d="m16.537 13.9l2.559-2.62l-2.559-4.88a.589.589 0 0 0-1.074-.047l-1.414 2.729l-.042.139Z"/>
				<path fill="#f6820c" d="m5.802 24.601l.077-.078l.279-.113l10.26-10.222l.13-.354l-2.559-4.878l-8.187 15.645z"/>
				<path fill="#fde068" d="m16.912 29.756l9.288-5.179l-2.654-16.331a.635.635 0 0 0-1.075-.346L5.8 24.6l9.233 5.155a1.927 1.927 0 0 0 1.878 0"/>
				<path fill="#fcca3f" d="M26.115 24.534L23.483 8.326a.557.557 0 0 0-.967-.353L5.9 24.569l9.131 5.1a1.912 1.912 0 0 0 1.863 0Z"/>
				<path fill="#eeab37" d="M16.912 29.6a1.927 1.927 0 0 1-1.878 0l-9.158-5.078l-.076.078l9.233 5.155a1.927 1.927 0 0 0 1.878 0l9.289-5.178l-.023-.14Z"/>
			</svg>
		</a>

		<div class="flex flex-1 items-center justify-end md:justify-between">
			<nav aria-label="Global" class="hidden md:block">
				<ul class="flex items-center gap-6 text-sm lg:text-lg xl:text-xl">
					<li>
						<a class="text-gray-500 transition hover:text-yellow-500/75 lg:hover:font-semibold" href="/"> Home </a>
					</li>

					{#if $isLoggedIn}

					<li>
						<a class="text-gray-500 transition hover:text-yellow-500/75 lg:hover:font-semibold" href="/profile"> Profile </a>
					</li>

					<li>
						<a class="text-gray-500 transition hover:text-yellow-500/75 lg:hover:font-semibold" href="/" on:click={logout}> Logout </a>
					</li>

					{:else}

					<li>
						<a class="text-gray-500 transition hover:text-yellow-500/75 lg:hover:font-semibold" href="/login"> Login </a>
					</li>
					
					{/if}
				</ul>
			</nav>

			<div class="flex items-center gap-4">
				<div class="sm:flex sm:gap-4">
					<a
						class="block rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-yellow-700 lg:text-md"
						href="/login"
					>
						Login
					</a>
				</div>

				<button
					class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
				>
					<span class="sr-only">Toggle menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>
<slot/>
<Footer/>
</main>

