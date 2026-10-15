<script setup>
import { posts } from '~/data/blog'

useHead({
  title: 'โรงเรียนพิษณุโลกพิทยาคม'
})

const latestPosts = posts.slice(0, 3)
</script>

<template>
  <div class="hero">
    <img src="https://placehold.co/2560x1080" alt="">
  </div>

  <section class="latest">
    <div class="container">

      <div class="section-heading">
        <h2>ข่าวสารล่าสุด</h2>

        <NuxtLink to="/blog">
          ดูทั้งหมด
        </NuxtLink>
      </div>

      <div class="blog-grid">
        <BlogCard
          v-for="post in latestPosts"
          :key="post.slug"
          :post="post"
        />
      </div>

    </div>
  </section>
</template>