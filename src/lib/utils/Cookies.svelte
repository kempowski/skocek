<script>
    import { analytics } from "$lib/store";

    export let visited
    export let accepted
    // console.log(accepted)
    
    let cookiesAccepted = false
    let cookieMenuOpen = false

    if( !visited ){
        cookieMenuOpen = true
    }

    function toggle(){
        cookieMenuOpen = !cookieMenuOpen 
    }

    function setAccept(){
        console.log(document.cookie)
        document.cookie = "accepted"
        cookiesAccepted = true
        analytics.set("accepted")
        toggle()
    }
    function setDecline(){
        console.log(document.cookie)

        cookiesAccepted = false
        document.cookie = "declined"
        // analytics.set("declined")
        toggle()
    }
</script>


<button id="cookieMenu" on:click={toggle}>Cookies</button>

{#if cookieMenuOpen}
    
    <div id="cookieBanner">
        <p>
            Willkommen auf unserer Website! Um den EU-Vorschriften zu entsprechen, sind wir verpflichtet, Sie über die Cookies zu informieren, die wir auf dieser Website verwenden.
            <br>
            <br>
            Cookies sind kleine Textdateien, die von den von Ihnen besuchten Websites auf Ihrem Gerät gespeichert werden. Sie ermöglichen es uns, Ihre Präferenzen und Einstellungen zu speichern und Nutzungsdaten zu verfolgen, damit wir die Leistung und Funktionalität unserer Website verbessern können.
            <br>
            <br>
            Wir verwenden sowohl Sitzungscookies (die ablaufen, wenn Sie Ihren Browser schließen) als auch dauerhafte Cookies (die auf Ihrem Gerät bleiben, bis sie gelöscht werden). Zu den spezifischen Cookies, die wir verwenden, gehören:
            <br>
            <br>
                Google-Analytics-Cookies, die uns helfen zu verstehen, wie Besucher mit unserer Website interagieren, so dass wir Verbesserungen vornehmen können.
            <br>
            <br>
            Sie können die Verwendung von Cookies auf individueller Ebene über die Einstellungen Ihres Webbrowsers steuern. Bitte beachten Sie jedoch, dass die Deaktivierung bestimmter Cookies die Funktionalität unserer Website beeinträchtigen kann.
        </p>
        <button on:click={setAccept} class="cookieButton">Zustimmen</button>
        <button on:click={setDecline} class="cookieButton">Ablehnen</button>
        <button class="close" on:click={toggle}>x</button>
    </div>
{/if}


<style>
    #cookieBanner{
        position: fixed;
        width: 500px;
        height: fit-content;
        padding: 2rem;
        left: 0;
        bottom: 0;
        background-color: white;
        font-size: 10pt;
        filter: drop-shadow(0px 0px 10px black);

    }
    #cookieMenu{
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: white;
        padding: 0.25rem;
        border: 0;
    }
    .close{
        position: absolute;
        top: 0;
        right: 5px;
        background-color: transparent;
        border: none;
        font-size: 16pt;
    }
    .active{
        background-color: red;
    }
    .cookieButton{
        border: 0;
        background-color: antiquewhite;
        padding: 0.25rem;
    }
</style>