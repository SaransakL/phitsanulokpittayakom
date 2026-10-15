<script setup>
import { posts } from '~/data/announcements'

const route = useRoute()

const post = posts.find(
  post => post.slug === route.params.slug
)

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

useHead({
  title: post.title
})
</script>

<template>
  <article class="article">
    <div class="container article-container">

      <img
        :src="post.image"
        :alt="post.title"
        class="article-image"
      >

      <div class="article-header">        
        <h1>{{ post.title }}</h1>
        <time>{{ post.date }}</time>
      </div>

      <div class="article-content">
        <p
          v-for="paragraph in post.content.split('\n\n')"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>

    </div>
  </article>
</template>