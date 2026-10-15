<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink
    :to="`/announcements/${post.slug}`"
    class="blog-card"
  >
    <img
      :src="post.image"
      :alt="post.title"
      class="blog-card-image"
    >

    <div class="blog-card-content">
      <h2>{{ post.title }}</h2>

      <time>{{ post.date }}</time>
    </div>
  </NuxtLink>
</template>