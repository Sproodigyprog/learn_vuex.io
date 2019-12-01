import axios from 'axios'

export default {
  actions: {
    fetchPhotos(ctx, payload) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos?" + payload.params + "&_limit=" + payload.limit)
        .then(function (response) {
          const photos = response.data;
          ctx.commit('updatePhotos', photos)
        });
    },
    removePhotos(ctx) {
      ctx.commit('clearPhotos')
    }
  },
  mutations: {
    updatePhotos(state, photos) {
      state.photos = photos
    },
    clearPhotos(state) {
      state.photos = []
    }
  },
  state: {
    photos: [],
  },
  getters: {
    allPhotos(state) {
      return state.photos
    }
  }
}