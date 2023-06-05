<template>
    <div class="post-card elevation-1">
        <div class="d-flex gap-3 align-items-center">
            <img class="post-cover-img" :src="post.imgUrl" :alt="post.body">
            <div>
                <p class="fs-3">
                    {{ post.body }}
                </p>
                <p>
                    <img class="post-maker rounded-circle" :src="post.creator.picture" :alt="post.creator.name">
                    <em>
                        @{{ post.creator.name }} - Created At: {{ post.createdAt }}
                    </em>
                    <p>
                        {{ post.likes.length }}
                    </p>
                </p>
            </div>
        </div>
    </div>
</template>


<script>
import { Post } from "../models/Post.js";

export default {
    
    props: {
        post: {type: Post, required: true}
    },
    setup(){
        return {}
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