<script setup>
import { posts } from '~/data/announcements'

useHead({
  title: 'โรงเรียนพิษณุโลกพิทยาคม'
})

// ประชาสัมพันธ์ล่าสุด 3 รายการ
const latestPosts = posts.slice(0, 3)

</script>

<template>
  <!-- Hero -->
  <div class="hero">
    <img
      src="/assets/demo-hero.png"
      alt="โรงเรียนพิษณุโลกพิทยาคม"
    >
  </div>

  <!-- ประชาสัมพันธ์ -->
  <section class="latest-announces">
    <div class="container">
      <div class="section-heading">
        <h2>ประชาสัมพันธ์</h2>

        <NuxtLink to="/announcements">
          ดูทั้งหมด
        </NuxtLink>
      </div>

      <div class="blog-grid">
        <AnnounceCard
          v-for="post in latestPosts"
          :key="post.slug"
          :post="post"
        />
      </div>
    </div>
  </section>

  <!-- กิจกรรม -->
  <section class="latest-events">
    <div class="container">
      <div class="section-heading">
        <h2>กิจกรรม</h2>

        <NuxtLink to="/events">
          ดูทั้งหมด
        </NuxtLink>
      </div>

      <div class="blog-grid">
        <BlogCard
          v-for="event in latestEvents"
          :key="event.slug"
          :post="event"
        />
      </div>
    </div>
  </section>
</template>