<script setup>
import { posts } from '~/data/blog'

useHead({
  title: 'ข่าวสาร - โรงเรียนพิษณุโลกพิทยาคม'
})
</script>

<template>
  <section class="blog-page">
    <div class="container">

      <div class="page-heading">
        <h1>ข่าวสาร</h1>
      </div>

      <div class="blog-grid">
        <BlogCard
          v-for="post in posts"
          :key="post.slug"
          :post="post"
        />
      </div>

    </div>
  </section>
</template>