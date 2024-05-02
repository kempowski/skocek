<script lang="ts">
    import Background from '$lib/layout/Background.svelte'
    import TopButton from '$lib/layout/TopButton.svelte';
    import Overlay from '$lib/layout/Overlay.svelte';
    import { getData } from "$lib/utils/getData";
    import { getImageURL, url } from '$lib/utils/getUrls.js';
    import { browser } from '$app/environment';
    import { fade } from 'svelte/transition';
    
    export let data 

    let img
    $: selectedSerie = data.serien[0].id
    $: elementsToDisplay = data.arbeiten[selectedSerie] 
    $: elementsToDisplay.sort((b,a) => parseInt(a.Jahr, 10) - parseInt(b.Jahr, 10))
    // $: console.log(elementsToDisplay)
    
    let folder = []

    $: if (browser){
        let imgData = getData()
        img = imgData.hintergrundbild
        // console.log(img[0])
    }
    
    function serieSwitch(index){
        let katId = data.serien[index].id
        selectedSerie = katId
        // elementsToDisplay = data.serien[katId]
    }


    let overlayOpen = false
    let arbeitShow
    let showingIndex

    function openOverlay(arbeit, index){
        overlayOpen = true
        arbeitShow = arbeit
        showingIndex = index
    }

    function handleOverlayExit(){
        overlayOpen = false
    }
</script>

<nav>
    {#each data.serien as serie, ix }
        <button
            class="serieButton {selectedSerie == serie.id ? "selectedSerie" : ""}"
            on:click={() => serieSwitch(ix)}>{serie.Serien_name}</button>
    {/each}
</nav>

<div id="wrapCard">
    <!-- {#if elementsToDisplay} -->
        {#each elementsToDisplay as arbeit, ix }
            <div class="Card" in:fade>
                <div class="wrapImg">
                    <img 
                        src={url + getImageURL(arbeit.collectionId, arbeit.id, arbeit.bild1, 400)} 
                        on:click={() => openOverlay(arbeit, ix)}
                        alt="gemaelde">
                </div>
                <h3>
                    {arbeit.Name},
                    {arbeit.Jahr}
                </h3>
                <h4>
                    {arbeit.Format}
                </h4>
            </div>
        {/each}
    <!-- {/if} -->
</div>


{#if overlayOpen}
    <Overlay on:handleExit={handleOverlayExit} {arbeitShow} {elementsToDisplay} {showingIndex}></Overlay>
{/if}


<TopButton></TopButton>

{#if img}
    <Background image={img}></Background>
{/if}





<style>
    nav{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    #wrapCard{
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .wrapImg{
        /* height: 300px; */
        overflow: hidden;
        display: flex; 
        /* align-items: center; */
        overflow: hidden;
    }
    .wrapImg img{
        width: 100%;
        max-width: 500px;
        aspect-ratio: auto;
    }
    .Card{
        width: fit-content;
        margin-bottom: 2rem;
    }
    h3{
        font-size: 12pt;
        margin: 0.5rem 0 0 0;
    }
    h4{
        margin: 0;
        font-size: 10pt;
        font-weight: 500;
    }
    .serieButton{
        border: none;
        width: fit-content;
        margin: 0.5rem 0;
    }
    .serieButton:hover{
        background-color: transparent;
    }
    .selectedSerie{
        border-bottom: 2px solid;
    }

    @media screen and (min-width: 666px){
        nav{
            flex-direction: row;
        }
        .Card{
            width: 49%;
        }
        .Card img{
            /* width:100%; */
        }
        .wrapImg{
            /* height: 300px ; */
        }
    }

</style>