<script>
  import P5 from "@macfja/svelte-p5";

  export let color;
  export let trainer;
  export let cardPokemon;


  let trainerImg;
  let cardBackground;
  let pokemonList = [];

  function setup(p5) {

    p5.createCanvas(244, 158);

  }


  function draw(p5) {
    // p5.loadImage(cardPath, (img) => {
    //   p5.image(img, 0, 0);
    //   p5.loadImage(trainerPath, (img) => {
    //     p5.image(img, 150, 32);
    //   });
    //   cardPokemon.forEach((pokemon, idx) => {
    //       p5.loadImage(pokemon.img, (img) => {
    //         img.resize(img.width / 2, img.height / 2);
    //         p5.image(img, (idx%3 * 50), idx < 3 ? 40 : 80);
    //       });
    //     });
    // });

    p5.image(cardBackground, 0, 0);
    p5.image(trainerImg, 150, 32);

    // cardPokemon.forEach((pokemon, idx) => {
    //   p5.loadImage(pokemon.img, (img) => { 
    //     img.resize(img.width / 2, img.height / 2);
    //     p5.image(img, (idx%3 * 50), idx < 3 ? 40 : 80);
    //   });
    // });

    pokemonList.forEach((img, idx) => {
      // img.resize(img.width / 2, img.height / 2);
      p5.image(img, (idx%3 * 50), idx < 3 ? 40 : 80, img.width / 2, img.height / 2);
    });

  }

  function preload(p5) {
    cardBackground = p5.loadImage(cardPath);
    trainerImg = p5.loadImage(trainerPath);
    cardPokemon.forEach((pokemon, idx) => {
      pokemonList.push(p5.loadImage(pokemon.img));
    });
  }



  let cardPath = `/cards/${color}card.png`;
  let trainerPath = `https://cors-anywhere.herokuapp.com/https://play.pokemonshowdown.com/sprites/trainers/${trainer}.png`;
</script>


<!-- 
    <img src={cardPath} alt="{color} colored card" />
    
    <img src={trainerPath} alt="{trainer} trainer" /> -->

<P5 {setup} {draw} {preload}/>
