<script>

    let y
    let showButton = false

    function scrollUp(){
        // console.log('hi')
        window.scrollTo(0, 0);
    }

    $: if ( y > 1000) {
        showButton = true
    } else {
        showButton = false
    }

    function test(){
        // console.log("ho")
    }
</script>

<button on:click={scrollUp} class:showButton={showButton} >
    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="17" y="40" width="31" height="8" transform="rotate(-90 17 40)" fill="black"/>
        <path d="M39 24L21 6L3 24" stroke="black" stroke-width="8"/>
        </svg>
</button>
<svelte:window bind:scrollY={y} />

<style>
    button{
        position: fixed;
        bottom: 0; 
        right: 1rem;
        margin: 0 0rem 2rem 0;
        opacity: 0;
        background-color: white;
        border-radius: 100%;
        padding: 0.5rem;
        border: none;
    }
    .showButton{
        opacity: 1;
    }

    @media screen and (min-width: 666px){
        button{
            right: calc((100vw - 800px)/2);
        }
    }
</style>