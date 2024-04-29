import { browser } from "$app/environment";

export function getData() {
    if (browser){
            let dada = localStorage.getItem("daten")
            let cleanData = JSON.parse(dada)
            // console.log(dada['hauptmenu'])
            // hm = testi['hauptmenu']
            // console.log(clean['hauptmenu'])
    
            // $: menu = clean['hauptmenu']
            // console.log(menu)
            return cleanData
        }
}