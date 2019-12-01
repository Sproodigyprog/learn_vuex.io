<template>
  <div id="app">
    <div id="buttons">
      <v-btn @click="getData()">Get data</v-btn>
      <v-btn @click="removeData()">Remove data</v-btn>
    </div>
    <div id="inputs">
      <v-text-field :placeholder="placeholder" autofocus v-model="params">
        <v-icon slot="prepend" v-html="url">https://jsonplaceholder.typicode.com/posts?</v-icon>
      </v-text-field>
      <v-text-field type="number" min="1" max="30" v-model="limit">
        <v-icon slot="prepend">&_limit=</v-icon>
      </v-text-field>
    </div>
    <hr />
    <v-tabs fixed-tabs>
      <v-tab @click="createUrl">Posts</v-tab>
      <v-tab @click="createUrl">Comments</v-tab>
      <v-tab @click="createUrl">Albums</v-tab>
      <v-tab @click="createUrl">Photos</v-tab>

      <v-tab-item>
        <div class="post" v-for="post in allPosts" :key="post.id">
          <h1>userId: {{ post.userId }}</h1>
          <h2>id: {{ post.id }}</h2>
          <h3>title: {{ post.title }}</h3>
          <p>body: {{ post.body }}</p>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="post" v-for="comment in allComments" :key="comment.id">
          <h1>postId: {{ comment.postId }}</h1>
          <h2>id: {{ comment.id }}</h2>
          <h3>name: {{ comment.name }}</h3>
          <h4>email: {{ comment.email }}</h4>
          <p>body: {{comment.body}}</p>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="post" v-for="album in allAlbums" :key="album.id">
          <h1>userId: {{ album.userId }}</h1>
          <h2>id: {{ album.id }}</h2>
          <h3>title: {{ album.title }}</h3>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="post" v-for="photo in allPhotos" :key="photo.id">
          <h1>albumId: {{ photo.albumId }}</h1>
          <h2>id: {{ photo.id }}</h2>
          <h3>title: {{ photo.title }}</h3>
          <img :src="photo.thumbnailUrl" />
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      url: "",
      params: "",
      limit: 1,
      placeholder: "see hints on jsonplaceholder"
    };
  },

  computed: mapGetters([
    "allPosts",
    "allComments",
    "allAlbums",
    "allPhotos",
    "removePosts"
  ]),
  methods: {
    getData() {
      let payload = { limit: this.limit, params: this.params };
      this.$store.dispatch("fetchPosts", payload);
      this.$store.dispatch("fetchAlbums", payload);
      this.$store.dispatch("fetchComments", payload);
      this.$store.dispatch("fetchPhotos", payload);
    },
    removeData() {
      this.$store.dispatch("removePosts");
      this.$store.dispatch("removeAlbums");
      this.$store.dispatch("removeComments");
      this.$store.dispatch("removePhotos");
    },
    createUrl(event) {
      let folder = event.target.innerText.toLowerCase();
      this.url = `https://jsonplaceholder.typicode.com/${folder}?`;
    }
  }
};
</script>

<style scoped>
#app {
  padding: 0 1rem;
}

.post {
  border: 2px solid grey;
  border-top-left-radius: 30px;
  background-color: rgb(223, 228, 170);
  padding: 20px;
  margin: 5px;
}

#buttons {
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
}
.v-btn {
  margin: 0 5px;
}

.v-icon {
  word-break: keep-all;
}

#data {
  border: 2px solid blue;
}

#inputs {
  display: flex;
  justify-content: center;
}
</style>
