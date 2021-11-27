<script>
  import P5 from "@macfja/svelte-p5";

  const dev = process.env.NODE_ENV === 'development';

  export let color;
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

    p5.image(cardBackground, 0, 0);
    p5.image(trainerImg, 150, 32);

    pokemonList.forEach((img, idx) => {
      // img.resize(img.width / 2, img.height / 2);
      p5.image(img, 1 + (idx%3 * 52), idx < 3 ? 26 : 29 + 36);
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

    pressStart2p = p5.loadFont(fontPath);

  }

  let cardPath = dev ? `/cards/${color}card.png` : `/YACTG/cards/${color}card.png`;
  let trainerPath = dev ? `/sprites/workerice.png` : `/YACTG/sprites/workerice.png`;
  let fontPath = dev ? `/fonts/PressStart2P-Regular.ttf` : `/YACTG/fonts/PressStart2P-Regular.ttf`;


  // let cardPath = `${dev ? '' : '/YACTG'}/cards/${color}card.png`;
  // let trainerPath = `${dev ? '' : '/YACTG'}/sprites/workerice.png`; //placeholder
</script>


<!-- 
    <img src={cardPath} alt="{color} colored card" />
    
    <img src={trainerPath} alt="{trainer} trainer" /> -->

<P5 {setup} {draw} {preload}/>
