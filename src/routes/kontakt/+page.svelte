<script>
    import Background from '$lib/layout/Background.svelte'
    import { getData } from "$lib/utils/getData";
    import { getImageURL, url } from '$lib/utils/getUrls.js';
    import { browser } from '$app/environment';
    
    export let data 

    let img

    $: if (browser){
        let imgData = getData()
        img = imgData.hintergrundbild
        // console.log(img[0])
    }

    // console.log(data)
</script>

{#each data.kontakt as entry}
    <p>{@html entry.Text}</p>
    <a href="mailto:{entry.Email}">{@html entry.Email}</a>

    
{/each}



{#if img}
<Background image={img}></Background>
{/if}