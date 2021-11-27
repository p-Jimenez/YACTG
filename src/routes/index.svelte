<script>
import { onMount } from "svelte";
import Card from "../components/Card.svelte";
import { pokemonList, fetchPokemon } from "../store/pokemon";
import { capitalizeFirstLetter, checkIfImageExists } from '../lib/utils'
import axios from "axios";
import Pokemon from "../components/Pokemon.svelte";

let card = "black";
let trainer = "workerice";
let trainerName = "";
let active = 0;
let term = "";
let filteredPokemon = [];
let cardPokemon = [];
let friendCode;

const cardBackgrounds = [
    {
        name: "black"
    },
    {
        name: "blue"
    },
    {
        name: "green"
    },
    {
        name: "red"
    },
    {
        name: "yellow"
    }
];

$: {
    if (term) {
        filteredPokemon = $pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(term.toLowerCase()));
    } else {
        filteredPokemon = $pokemonList;
    }

    // $pokemonList.forEach((pokemon, index) => {
    //         checkIfImageExists(pokemon.img, exists => {
    //             if (exists) {                
    //                 pokemon.ready = true;
    //                 pokemon.name = capitalizeFirstLetter(pokemon.name);
    //                 pokemon = pokemon;
    //             } else {
    //                 // remove pokemon from list
    //                 $pokemonList.splice(index, 1);
    //             }

    //         });

    // });

    // $pokemonList = $pokemonList;
}


const changeTab = (tab) => {
    active = tab;
    if ($pokemonList.length === 0 && tab === 1) {
        fetchPokemon(tab);
    }
}

const addPokemon = (pokemon) => {
    if (cardPokemon.length < 6) {
        cardPokemon.push(pokemon);
        cardPokemon = cardPokemon;
    }
}

const removePokemon = (pokemon) => {
    cardPokemon.splice(cardPokemon.indexOf(pokemon), 1);
    cardPokemon = cardPokemon;
}

</script>

<h1 class="text-gray-200">Yet Another Trainer Card Generator</h1>

<div class="h-40">
    {#key cardPokemon || card || trainerName}
    <Card color={card} {trainer} {cardPokemon} {trainerName} {friendCode}/>
    {/key}
</div>

<div class="tabs tabs-boxed">
    <a class="tab {active === 0 ? 'tab-active' : ''}" on:click={() => changeTab(0)}>Trainer</a>
    <a class="tab {active === 1 ? 'tab-active' : ''}" on:click={() => changeTab(1)}>Pokémon</a>
    <a class="tab {active === 2 ? 'tab-active' : ''}" on:click={() => changeTab(2)}>Badges</a>
    <a class="tab {active === 3 ? 'tab-active' : ''}" on:click={() => changeTab(3)}>Background</a>
</div>

{#if active === 0}
Trainers
<div class="form-control">
    <labe class="label">Name</labe>
    <input bind:value={trainerName} class="input input-bordered">
</div>
<div class="form-control">
    <label class="label">Friend code</label>
    <input bind:value={friendCode} class="input input-bordered">
</div>
{/if}
{#if active === 1}
<div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
    {#each cardPokemon as pokemon}
    <div class="m-6 indicator">
        <button class="indicator-item btn-error btn-circle btn-xs" on:click={() => removePokemon(pokemon)}>  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6">   
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
            </svg>
        </button> 
        <Pokemon pokemon={pokemon} />
    </div>
    {/each}
</div>
    <input bind:value={term} class="form-control mb-4">
    <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {#each filteredPokemon as pokemon}
            <Pokemon on:click={() => addPokemon(pokemon)} pokemon={pokemon} />
        {/each}
    </div>
{/if}
{#if $pokemonList.length === 0}
<!-- <button class="btn btn-lg btn-ghost btn-circle loading"></button> -->
{/if}
{#if active === 2}
Badges
{/if}
{#if active === 3}
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center" ng-click>
    {#each cardBackgrounds as background}
    <img class="cursor-pointer" src="cards/{background.name}card.png" alt={background.name} on:click={() => {card = background.name}}>
    {/each}
</div>
{/if}
