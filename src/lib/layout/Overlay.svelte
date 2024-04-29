<script>
    import {createEventDispatcher} from 'svelte'
    import { getImageURL, url } from '$lib/utils/getUrls';
    const dispatch = createEventDispatcher()

    export let arbeitShow
    export let elementsToDisplay
    export let showingIndex

    $: displayElement = elementsToDisplay[showingIndex]

    // CUSTOM EVENT WAS ZU PARENT BUBBLET FUERS SCHLIESSEN
    function handleExit(){
        dispatch("handleExit", {closeOverlay: true})
    }

    // NAVIGATIONS BUTTONS PLUS EDGES
    function moveBy(val){
        showingIndex = showingIndex + val
        
        if ( showingIndex < 0){
            showingIndex = elementsToDisplay.length -1
        }
        if ( showingIndex > elementsToDisplay.length -1){
            showingIndex = 0
        }
    }

    // KEYBOARD EVENT HANDLER
    function handleKeydown(event) {
        if (event.key === 'Escape') {
            dispatch("handleExit", {closeOverlay: true})
        } else if (event.key === 'ArrowLeft') {
            moveBy(-1)
        } else if (event.key === 'ArrowRight') {
            moveBy(1)
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<div id="overlay">
    <button 
        id="exit" on:click={handleExit}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5.68629" y="0.0294383" width="40" height="8" transform="rotate(45 5.68629 0.0294383)" fill="white"/>
            <rect x="0.029438" y="28.3137" width="40" height="8" transform="rotate(-45 0.029438 28.3137)" fill="white"/>
        </svg>
            
    </button>

    <div class="bildWrap">
        <img src={url + getImageURL(displayElement.collectionId, displayElement.id, displayElement.bild1, 100)} alt="Gemaelde in grosser Ansicht">
        <h2>{displayElement.Name}</h2>
        <h3>
            {displayElement.Format}
            {displayElement.Jahr}
        </h3>
    </div>
    
    <div class="navButtons">
        <button on:click={() => moveBy(-1)}>
            <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="25" width="31" height="8" transform="rotate(180 40 25)" fill="white"/>
                <path d="M24 3L6 21L24 39" stroke="white" stroke-width="8"/>
            </svg>
        </button>
        <button on:click={() => moveBy(1)}>
            <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="17" width="31" height="8" fill="white"/>
                <path d="M16 39L34 21L16 3" stroke="white" stroke-width="8"/>
            </svg>                             
        </button>
    </div>
</div>

<style>
    #overlay{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.95);
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #exit{
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
    .bildWrap{
        color: white;
        width: fit-content;
        max-width: 900px;
    }
    .bildWrap img{
        width: 90vw;
        max-width: 900px;
        height: 100%;
        max-height: 60vh;
        aspect-ratio: auto;
    }
    h2{
        font-weight: 400;
        margin: 0;
        max-width: 50vw;
    }
    h3{
        margin: 0;
        font-weight: 300;
    }
    button{
        background-color: transparent;
        border: none;
    }
    .navButtons{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        width: fit-content;
    }

    @media screen and (min-width: 666px){
        .bildWrap img{
            width: initial;
        }
    }
</style>