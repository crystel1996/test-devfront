<template>
    <div class="call-video">
        <div class="iframe-content flex items-center justify-center">
            <iframe 
                width="358" 
                height="235" 
                src="https://www.youtube.com/embed/zmjPmzJFEFA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="w-[358px] h-[235px] lg:w-[740px] lg:h-[485px]"
            >
            </iframe>
        </div>
    </div>
</template>

<style scoped>
    .call-video {
        background: #BF2A6B 0% 0% no-repeat padding-box;
        margin-left: 25px;
        border-top-left-radius: 75%;
        border-top-right-radius: 45%;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 70%;
        width: 100vw;
        height: 386px;
        position: relative;
        @media screen and (min-width: 1024px) {
            margin-top: -100px;
            height: 856px;
            max-width: 920px;
            border-top-left-radius: 75%;
            border-top-right-radius: 0%;
            border-bottom-left-radius: 75%;
            border-bottom-right-radius: 75%;
        }
    }
    .iframe-content {
        position: absolute;
        top: 54.2px;
        left: 0;
        right: 31px;
        @media screen and (min-width: 1024px) {
            top: 203px;
            right: 31px;
            bottom: 168px;
        }
    } 
    iframe {
        box-shadow: 7px 6px 13px #00000085;

    }
</style>