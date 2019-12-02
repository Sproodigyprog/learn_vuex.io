import axios from 'axios'

export default {
  actions: {
    fetchAlbums(ctx, payload) {
      axios
        .get("https://jsonplaceholder.typicode.com/albums?" + payload.params + "&_limit=" + payload.limit)
        .then(function (response) {
          const albums = response.data;
          ctx.commit('updateAlbums', albums)
        });
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
