import axios from 'axios'

export default {
  actions: {
    fetchPosts(ctx, payload) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts?" + payload.params + "&_limit=" + payload.limit)
        .then(function (response) {
          const posts = response.data;
          ctx.commit('updatePosts', posts)
        });
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    clearPosts(state) {
      state.posts = []
    }
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
}
