<template>
    <div id="project">
        <div class="p-2">
            <a :href="url" target="_blank">
                <div class="position-relative shadow pointer">
                    <img class="d-block rounded w-100 h-auto" :src="thumb" />
                    <div class="overlay w-100 h-100 text-white d-flex align-items-center justify-content-center">
                        <div>
                            <h2 class="m-1 font-weight-bold">{{name}}</h2>
                            <h4 class="m-1">{{description}}</h4>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: `project`,
    props: {
        name: String,
        description: String,
        thumb: String,
        url: String
    }
}
</script>

<style>
.pointer {
    cursor: pointer;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(75, 184, 210, 0.7);
}

.pointer:hover .overlay {
  opacity: 1;
  box-shadow: 0px 0px 30px black;
}
</style>

