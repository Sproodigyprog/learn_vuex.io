import axios from 'axios'

export default {
  actions: {
    async fetchComments(ctx, payload) {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/comments?" + payload.params + "&_limit=" + payload.limit)
      const comments = response.data;
      ctx.commit('updateComments', comments)
    }
  },
  mutations: {
    updateComments(state, comments) {
      state.comments = comments
    },
    clearComments(state) {
      state.comments = []
    }
  },
  state: {
    comments: [],
  },
  getters: {
    allComments(state) {
      return state.comments
    }
  }
}