<script>
    import { getImageURL, url } from "$lib/utils/getUrls";
    export let image

    let test = getImageURL(image[0].collectionId, image[0].id, image[0].Hintergrundbild, 400)
    // console.log(image)
</script>

<div>
    <img src={ url + test} alt="Hintergrundbild">
</div>

<style>
    div{
        width: 100lvw;
        height: 100dvh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        overflow: hidden;
        background-color: rgb(139, 139, 139);
        display: flex;
        justify-content: center;
    }
    div img{
        /* position: absolute; */
        bottom: 0;
        left: 0;
        right: 0;
        max-width: 1200px;
    }


    @media screen and (orientation: landscape){
        img{
            width: 100%;
        }
    }
    @media screen and (orientation: portrait){
        img{
            height: 100%;
        }
    }
    @media screen and (orientation: portrait) and (max-width: 700px){
        img{
            height: 100%;
            margin-left: -30%;
        }
    }
</style>