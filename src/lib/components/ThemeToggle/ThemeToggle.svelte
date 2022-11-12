<script lang="ts">
	import { theme } from '$lib/stores';
	import { toggleTheme } from '$lib/theme';
</script>

<button
	class="theme-toggle"
	id="theme-toggle"
	title="Toggles light & dark"
	on:click|preventDefault={() => toggleTheme(theme, $theme)}
>
	<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
		<mask id="moon">
			<rect x="0" y="0" width="100%" height="100%" fill="white" />
			<circle cx="40" cy="8" r="11" fill="black" />
		</mask>
		<circle id="sun" cx="12" cy="12" r="11" mask="url(#moon)" />
		<g id="sun-beams">
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</g>
	</svg>
</button>

<style lang="postcss">
	.theme-toggle {
		width: 30px;
		height: 40px;
	}

	.theme-toggle:hover,
	.theme-toggle:focus {
		border: var(--main-highlight-color);
	}

	#moon,
	#sun {
		fill: var(--nav-icon);
		stroke: none;

		@nest :hover > svg > &, :focus > svg > & {
			fill: var(--main-highlight-color);
		}
	}

	#sun {
		transition: transform 0.5s var(--ease-4);
		transform-origin: center center;
	}

	#sun-beams {
		--_opacity-dur: 0.15s;
		stroke: var(--nav-icon);
		stroke-width: 2px;
		transform-origin: center center;
		transition: transform 0.5s var(--ease-elastic-4), opacity var(--_opacity-dur) var(--ease-3);

		@nest :hover > svg > & {
			stroke: var(--nav-icon-hover);
		}
	}

	#moon > circle {
		transition: transform 0.5s var(--ease-out-3);
	}
</style>
