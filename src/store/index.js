import Vue from "vue";
import Vuex from "vuex";
import posts from './modules/posts'
import albums from './modules/albums'
import comments from './modules/comments'
import photos from './modules/photos'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    albums,
    comments,
    photos
  }
});