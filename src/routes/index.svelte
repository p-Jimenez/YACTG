<script>
    import Card from "../components/Card.svelte";
    import { onMount } from "svelte";
    import { Pokedex } from "pokeapi-js-wrapper";

    const P = new Pokedex();

    let color = "black";
    let trainer = "workerice";

    (async () => {
        const golduck = await P.getPokemonByName("golduck");
        console.log(golduck);
    })();
    
</script>

<h1 class="text-gray-500">Yet Another Trainer Card Generator</h1>

<Card {color} {trainer} />
