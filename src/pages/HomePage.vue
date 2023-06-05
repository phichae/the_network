<template>
  <section class="row container-fluid">
    <div class="col-3">

    </div>
    <div class="col-6">
      <div class="container">
        <div class="row my-2">
          <div class="col-12" v-for="p in posts" :key="p.id">
            <PostCard :post="p" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-3" v-for="a in ads" :key="a.title">
      <AdCard :ad="a" />
    </div>
  </section>
  <div class="p-4">
    <button :disabled="!newer" @click="changePage(newer)" class="btn btn-light mx-2">Previous</button>
    <button :disabled="!older" @click="changePage(older)" class="btn btn-light mx-2">Next</button>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js'
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { adsService } from '../services/AdsService.js';

export default {
  setup() {
    onMounted(() => {
      getPosts()
    })
    onMounted(()=> {
      getAds()
    })
    async function getPosts(){
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.error(error)
      }
    }
    async function getAds(){
      try {
        await adsService.getAds()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      ads: computed(()=> AppState.ads),
      posts: computed(()=> AppState.posts),
      newer: computed(() => AppState.newer),
      older: computed(() => AppState.older),
      async changePage(url) {
        try {
          await postsService.changePage(url)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
