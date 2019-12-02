import axios from 'axios'

export default {
  actions: {
    async fetchAlbums(ctx, payload) {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/albums?" + payload.params + "&_limit=" + payload.limit)
      const albums = response.data;
      ctx.commit('updateAlbums', albums)
    }
  },
  mutations: {
    updateAlbums(state, albums) {
      state.albums = albums
    },
    clearAlbums(state) {
      state.albums = []
    }
  },
  state: {
    albums: [],
  },
  getters: {
    allAlbums(state) {
      return state.albums
    }
  }
}