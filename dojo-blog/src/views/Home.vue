<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete post</button>
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue"
import getPosts from "../composables/getPosts"
import { ref } from '@vue/reactivity'


export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const showPosts = ref(true)
    const { posts, error, load } = getPosts();

    load();

    return { posts, showPosts, error }
  }
}
</script>
