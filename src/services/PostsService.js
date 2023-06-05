import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {

    async getPosts(){
        const res = await api.get('/api/posts')
        AppState.posts = res.data.posts
        AppState.newer = res.data.newer
        AppState.older = res.data.older
    }

    async changePage(url) {
        const res = await api.get(url)
        AppState.posts = res.data.posts
        AppState.newer = res.data.newer
        AppState.older = res.data.older
      }

      async searchPosts(searchTerm) {
        const res = await api.get('/api/posts/', {
            params: {
                query: searchTerm,
            }
        })

        AppState.query = searchTerm
        logger.log(res.data)
        AppState.posts = res.data.posts
    }
}

export const postsService = new PostsService()