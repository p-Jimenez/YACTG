<script>
    import Card from '../components/Card.svelte'

    let color = "black";
    let trainer = "workerice";
    
</script>

<h1 class="text-gray-500">Yet Another Trainer Card Generator</h1>

<Card color={color} trainer={trainer}/>