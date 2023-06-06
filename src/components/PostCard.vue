<template>
    <div class="post-card elevation-1 rounded">
        <div class="d-flex gap-3 align-items-center">
            <img class="post-cover-img" :src="post.imgUrl" :alt="post.body">
            <div>
                <p class="fs-5">
                    {{ post.body }}
                </p>
                <p>
                    <router-link :to="{name: 'Profile', params: { id: post.creatorId }}">
                        <img class="post-maker rounded-circle" :src="post.creator.picture" :alt="post.creator.name">
                    </router-link>
                    <em>
                        @{{ post.creator.name }} - Created At: {{ post.createdAt }}
                    </em>
                    <p>
                        Likes: {{ post.likes.length }}
                    </p>
                    <div class="align-content-bottom text-end">
                        <button @click="deletePost(post.id)" v-if="post.creator.id == account.id" class="btn btn-outline-danger"><i class="mdi mdi-delete"></i></button>
                    </div>
                </p>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { Post } from "../models/Post.js";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";

export default {
    
    props: {
        post: {type: Post, required: true}
    },
    setup(){
        return {

            async deletePost(postId){
                try {
                    await postsService.deletePost(postId)
                } catch (error) {
                    Pop.toast(error.message)
                }
            },
            account: computed(()=> AppState.account)
        }
    }
}
</script>


<style lang="scss" scoped>

.post-card {
  --backgroundColor: rgb(255, 255, 255);

  background-color: var(--backgroundColor);
  margin-bottom: 2rem;
}
.post-cover-img {
    max-width: 350px;
    max-height: 350px;
    object-fit: contain;
  }

  .post-maker {
    height: 60px;
    aspect-ratio: 1/1;
    object-fit: cover;

  }

</style>