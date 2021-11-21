<script>
  import P5 from "@macfja/svelte-p5";

  export let color;
  export let trainer;

  function setup(p5) {
    p5.createCanvas(400, 400);

    p5.loadImage(cardPath, (img) => {
      image(img, 0, 0);
    });
  }

  function draw(p5) {
  }

  let cardPath = `/cards/${color}card.png`;
  let trainerPath = `https://play.pokemonshowdown.com/sprites/trainers/${trainer}.png`;
</script>

<p>{color} card</p>
<!-- 
    <img src={cardPath} alt="{color} colored card" />
    
    <img src={trainerPath} alt="{trainer} trainer" /> -->

<P5 {setup} {draw} />
