<script>
  import P5 from "@macfja/svelte-p5";

  export let color;
  export let trainer;
  export let trainerName;
  export let cardPokemon;
  export let friendCode;

  let trainerImg;
  let cardBackground;
  let pokemonList = [];
  let pressStart2p;

  function setup(p5) {
    p5.createCanvas(244, 158);

    p5.textFont(pressStart2p);
    p5.textAlign(p5.CENTER, p5.CENTER);
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
      p5.image(img, 1 + (idx%3 * 50), idx < 3 ? 26 : 29 + 36);
    });
 
    p5.textSize(12);
    p5.fill(255, 255, 255)
    p5.text(trainerName, 56, 30);

    p5.textSize(7);
    p5.text(friendCode, 184, 35);
  }

  function preload(p5) {
    cardBackground = p5.loadImage(cardPath);
    trainerImg = p5.loadImage(trainerPath);
    cardPokemon.forEach((pokemon, idx) => {
      pokemonList.push(p5.loadImage(pokemon.icon));
    });

    pressStart2p = p5.loadFont('/fonts/PressStart2P-Regular.ttf');

  }



  let cardPath = `/cards/${color}card.png`;
  let trainerPath = `sprites/workerice.png`;
</script>


<!-- 
    <img src={cardPath} alt="{color} colored card" />
    
    <img src={trainerPath} alt="{trainer} trainer" /> -->

<P5 {setup} {draw} {preload}/>
