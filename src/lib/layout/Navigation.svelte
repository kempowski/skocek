<script>
    import { fly } from "svelte/transition";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    
    let showMenu = false

    let vw
    $: if ( browser ){
        vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    }
    
    $: if (vw > 750){
        showMenu = true
    }

    
    function opener(){
        showMenu = !showMenu
    }


    // console.log($page)
</script>

<nav>
    <h1 id="name">
        <a href="/">günter skocek</a>
    </h1>
    {#if showMenu}
        <div id="menuWrap" 
            in:fly out:fly
            >
            <ul >
                <li>
                    <a href="/uber" on:click={opener}>Über</a>
                </li>
                <li>
                    <a href="/werke" on:click={opener}>Werke</a>
                </li>
                <li>
                    <a href="/kontakt" on:click={opener}>Kontakt</a>
                </li>
            </ul>
            <h2 id="nordweg">
                <a href="/galerie" on:click={opener}>Galerie Nordweg</a>
            </h2>
        </div>
    {/if}
    <button on:click={opener} id="menu">menu</button>
    <button on:click={opener} class:showExit={showMenu} class="close">schliessen</button>
    </nav>
    
    
<style>
nav{
    width: 100%;
    max-width: 800px;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
}
#name{
    margin: 0;
    justify-self: start;
    width: 360px;
    margin-left: -15px;
}
#name a {
    font-family: "Playfair Display";
    font-style: italic;
    font-size: 30pt;
    font-weight: 100;
    color: white;
    text-decoration: none;
    word-break: keep-all;
    text-transform: lowercase;
} 
#nordweg {
    margin: 0;
    margin-right: -27px;
}
#name a:hover, #nordweg a:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
}


@media (min-width: 750px) {
    nav ul{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        width: 295px;
    }
    nav ul li {
        list-style-type: none;
    }
    nav ul li a {
        color: white;
        font-family: "Playfair Display";
        font-style: italic;
        font-weight: 600;
        font-size: 15pt;
        text-decoration: none;
        text-decoration-thickness: 3px;
        transition: all 0.12s ease;
    }
    nav ul li a:hover {
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-underline-offset: 2px;
    }
    #menuWrap{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    #menu{
        display: none;
    }
    .close{
        display: none;
    }
    #nordweg a{
        font-family: "Playfair Display";
        font-style: italic;
        font-size: 30pt;
        font-weight: 100;
        color: white;
        text-decoration: none;
        word-break: keep-all;
        text-transform: lowercase;
    } 
    #nordweg {
        justify-self: flex-end;
        margin: 0;
        margin-right: -27px;
        /* width: 450px; */
    }
}

@media (max-width: 750px){
    #menuWrap {
        position: absolute;
        left: 0;
        top: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
        padding: 0 5rem;
    }
    nav ul {
        padding: 0;
        margin: 0
    }
    nav ul li {
        list-style: none;
        margin-bottom: 3rem;
        border-bottom: 2px solid;
    }
    nav ul li a, #nordweg a {
        text-decoration: none;
        color: black;
        font-size: 24pt;
        font-weight: 400;
    }
    #nordweg{
        border-bottom: 2px solid;
        margin-right: 0;
    }
    #nordweg a{
        text-decoration: none;
    }
    #nordweg a:hover{
        text-decoration: none;
    }

    #menu {
        margin: 0;
        background-color: transparent;
        color: white;
        border: none;
        font-size: 14pt;
        font-family: "Playfair";
        height: 30px;
        align-self: flex-end;
    }
    .close{
        background-color: red;
        background-color: transparent;
        border: none;
        display: none;
        z-index: 3;
        margin: 0;
        align-self: flex-end;
        font-family: "Playfair";
        top: 3rem;
        right: 2rem;
        position: absolute;
        height: 30px;
        font-size: 14pt;

    }
    .showExit{
        display: initial;
    }
}


</style>