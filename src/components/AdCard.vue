<template>
    <div class="rounded my-2">
        <img class="img-fluid" :src="ad.square" :alt="ad.title">
    </div>


</template>


<script>

import { Ad } from "../models/Ad.js";
export default {
    props: {
        ad: {type: Ad, required: true}
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>