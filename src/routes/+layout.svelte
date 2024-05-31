<script>
    import '../app.css'
    import { fly } from 'svelte/transition';
    import Navigation from '$lib/layout/Navigation.svelte';
    import { page } from '$app/stores';
    import Analytics from '$lib/utils/Analytics.svelte';
    import { analytics } from '$lib/store';
    
    // console.log($page.route.id)

    let blackBG = false
    $: if ($page.route.id === '/werke'){
        blackBG = true
    } else {
        blackBG = false
    }

    let cookieOK = ''
    analytics.subscribe((value) => {
        console.log(value)
        cookieOK = value
    })
    // console.log(analytics)

</script>

<div id="wrap">

    <Navigation></Navigation>

    <div id="content" in:fly class="{blackBG ? 'blackBG' : 'whiteBG'}">
        <slot></slot>
    </div>
</div>

{#if cookieOK === "accepted"}
    <Analytics></Analytics>
<!-- {:else if cookieOK === "declined"} -->
    <!-- {console.log("declined")} -->
{/if}

<style>
    #wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    #content{
        width: 100%;
        max-width: 800px;
        /* min-height: 600px; */
        padding: 1rem 2rem;
        position: relative;
    }
    .blackBG{
        background-color: rgba(0, 0, 0, 0.9);
    }
    .whiteBG{
        background-color: rgba(255, 255, 255, 0.9);
    }
</style>