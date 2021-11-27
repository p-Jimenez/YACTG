<script>
    import { capitalizeFirstLetter } from '../lib/utils';
    export let pokemon;
</script>


{#if pokemon}
<div class="mb-8 rounded-box w-28 h-auto pt-2 ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer" on:click>
    <p class="text-center">{capitalizeFirstLetter(pokemon.name)}</p>
    <img src={pokemon.img} alt={pokemon.name} class="w-auto mx-auto">
</div>
{/if}
