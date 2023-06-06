<template>
<h1>Hello from the profile page</h1>
</template>


<script>
import { onMounted } from 'vue';
import { Profile } from "../models/Profile.js"
import PostCard from '../components/PostCard.vue';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import Pop from '../utils/Pop.js';
import { profileService } from '../services/ProfileService.js';
import { AppState } from '../AppState.js';

export default {
    props: {
        profile: { type: Profile, required: true }
    },
    setup() {
        const route = useRoute();
        async function getProfile() {
            try {
                await profileService.getProfileById(route.params.id);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getProfile();
            // getPostsByProfile();
        });
        return {
            profile: computed(() => AppState.activeProfile),
            posts: computed(() => AppState.posts)

        }
    },
    components: { PostCard }
}
</script>


<style lang="scss" scoped>

</style>