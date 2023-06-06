<template>
  <section class="row justify-content-center">
    <div class="col-6">
      <SearchBar :search="s" />
    </div>
  </section>
  <section class="row container-fluid">
    <div class="col-3">
      <div v-if="account">
        <form @submit.prevent="submitPostForm()">
          <div class="form-floating my-3">
            <input type="url" class="form-control" id="floatingInput" placeholder="Image URL" name="imgUrl" required v-model="editable.imgUrl">
            <label for="img-url">Image Url</label>
          </div>
          <div class="form-floating mb-3">
            <input type="body" class="form-control" id="floatingInput" placeholder="Caption" name="body" required v-model="editable.body">
            <label for="body">Caption</label>
          </div>
          <button type="submit" class="btn btn-outline-dark">Create</button>
        </form>
      </div>
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
    <div class="col-3">
      <div v-for="a in ads" :key="a.title">
        <AdCard :ad="a" />
      </div>
    </div>
  </section>
  <div class="p-4">
    <button :disabled="!newer" @click="changePage(newer)" class="btn btn-light mx-2">Previous</button>
    <button :disabled="!older" @click="changePage(older)" class="btn btn-light mx-2">Next</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js'
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { adsService } from '../services/AdsService.js';
import AdCard from '../components/AdCard.vue'
import PostCard from "../components/PostCard.vue";
import SearchBar from '../components/SearchBar.vue'

export default {
  components: { PostCard, AdCard, SearchBar },
  setup() {
    const editable = ref({})
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
      editable,
      ads: computed(()=> AppState.ads),
      posts: computed(()=> AppState.posts),
      newer: computed(() => AppState.newer),
      older: computed(() => AppState.older),
      account: computed(()=> AppState.account),
      async changePage(url) {
        try {
          await postsService.changePage(url)
        } catch (error) {
          Pop.error(error)
        }
      },

      async submitPostForm(){
        try {
          const formData = editable.value
          await postsService.createPost(formData)
          editable.value = {}
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
