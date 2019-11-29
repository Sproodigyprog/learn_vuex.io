<template>
  <div id="app">
    <v-tabs
      fixed-tabs
    >
      <v-tab>
        Posts
      </v-tab>
      <v-tab>
        Comments
      </v-tab>
      <v-tab>
        Albums
      </v-tab>
      <v-tab>
        Images
      </v-tab>
      <v-tab>
        CSR
      </v-tab>
      <v-tab>
        SSR
      </v-tab>

      <v-tab-item>
        <v-card>
          <v-card-text class="post" v-for="post in posts" :key="post.id">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <div class="post" v-for="comment in comments" :key="comment.id">
          <h2>{{comment.name}}</h2>
          <p>{{comment.email}}</p>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="post" v-for="album in albums" :key="album.id">
          <h2>{{album.title}}</h2>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="post" v-for="photo in photos" :key="photo.id">
          <h2>{{photo.title}}</h2>
          <img :src="photo.thumbnailUrl">
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      comments: [],
      albums: [],
      photos: []
    }
  },
  async mounted() {
    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const posts = await postsData.json()
    const commentsData = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
    const comments = await commentsData.json()
    const albumsData = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=3')
    const albums = await albumsData.json()
    const photosData = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
    const photos = await photosData.json()
    this.posts = posts
    this.comments = comments
    this.albums = albums
    this.photos = photos
  }
}
</script>

<style lang="css" scoped>
  #app {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .post {
    border: 2px solid grey;
    border-top-left-radius: 30px;
    background-color: rgb(223, 228, 170);
    padding: 20px;
    margin: 5px;
  }
</style>
