<script>
    import Background from '$lib/layout/Background.svelte'
    import TopButton from '$lib/layout/TopButton.svelte';
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
    // console.log (data.uber[0])
</script>

<nav>
    {#each data.uber as text, ix }
        <a href="#{text.Slug}">{text.Titel}</a>
    {/each}
</nav>

{#each data.uber as text, ix }
    {#if ix === 0}
        <p id={text.Slug}>
            {@html text.Text}
        </p>
    {:else}
        <h2 id={text.Slug}>
            {text.Titel}
        </h2>
        <p>
            {@html text.Text}
        </p>
    {/if}
{/each}


<TopButton></TopButton>

{#if img}
    <Background image={img}></Background>
{/if}


<style>
    nav{
        position: fixed ;
        right: calc((100vw - 800px)/2);
        margin: 1rem 1rem 0 0;
        display: flex;
        flex-direction: column;
        text-align: right;
    }
    nav a {
        color: black;
        margin: 0.2rem 0;
    }
    p {
        max-width: 60%;
    }
</style>