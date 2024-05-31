<script>
    import { writable } from 'svelte/store';
    import { browser } from '$app/environment';
    import Background from '$lib/layout/Background.svelte'
    import Cookies from '$lib/utils/Cookies.svelte'

    export let data 


    export const backgroundImg = writable(data.hintergrundbild)
    // console.log(backgroundImg)

    if (browser){
        localStorage.setItem("daten", JSON.stringify(data));
        // const daten = JSON.parse(localStorage.getItem("daten"))
        // console.log(daten)
    }
</script>

<Cookies visited={data.visited} accepted={data.accepted}></Cookies>


<div>
    {@html data.startseite[0].textfeld}
</div>

<Background image={data.hintergrundbild}></Background>


<style>
    div{
        max-width: 100%;
        line-height: 25px;
    }
</style>