<template>
    <form @submit.prevent="searchPosts()">
        <input class="w-100" type="text" v-model="search" placeholder="Search..." />
    </form>
</template>


<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';
export default {
    setup() {
        const search = ref('')
        return {
            search,

            async searchPosts() {
                try {
                    const searchTerm = search.value
                    await postsService.searchPosts(searchTerm)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        };
    },
};
</script>


<style lang="scss" scoped>

</style>