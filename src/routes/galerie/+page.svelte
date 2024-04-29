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
</script>

{#each data.galerie as event }
    <div>
        <h3>{event.Datum.slice(0,4)}</h3>
        <div>
            <h2>{@html event.Titel}</h2>
            <p>{@html event.Text}</p>
        </div>
        {#if event.Plakat !== ''}
            <img src={url + getImageURL(event.collectionId, event.id, event.Plakat)}>
        {/if}
    </div>
{/each}

{#if img}
<Background image={img}></Background>
{/if}

<style>
    div > * {
        margin: 0;
    }
    div{
        /* border-left: solid 2px; */
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        margin-bottom: 2rem;
    }
    h3{ 
        margin: 0 2rem 0 0;
    }
    div div {
        border: none;
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    img{
        width: 100%;
        justify-self: flex-end;
    }

    @media screen and (min-width: 666px){
        div {
            flex-direction: row;
        }
    }
</style>