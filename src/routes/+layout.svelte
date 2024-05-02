<script>
    import '../app.css'
    import { fade } from 'svelte/transition';
    import Navigation from '$lib/layout/Navigation.svelte';
    
</script>

<div id="wrap">

    <Navigation></Navigation>

    <div id="content" in:fade>
        <slot></slot>
    </div>
</div>*


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
        background-color: rgba(255, 255, 255, 0.9);
        position: relative;
    }
</style>