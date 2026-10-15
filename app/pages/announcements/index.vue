<script setup>
import { ref, computed, watch } from 'vue'
import { posts } from '~/data/announcements'

useHead({
  title: 'ประชาสัมพันธ์ - โรงเรียนพิษณุโลกพิทยาคม'
})

const currentPage = ref(1)
const itemsPerPage = 6

// จำนวนหน้าทั้งหมด
const totalPages = computed(() =>
  Math.ceil(posts.length / itemsPerPage)
)

// ข่าวที่แสดงในหน้าปัจจุบัน
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  return posts.slice(start, end)
})

// หมายเลขหน้าสำหรับแสดงผล
const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)

  for (let page = start; page <= end; page++) {
    pages.push(page)
  }

  return pages
})

// กลับไปหน้าแรกเมื่อจำนวนหน้าเปลี่ยน
watch(totalPages, (total) => {
  if (currentPage.value > total) {
    currentPage.value = Math.max(1, total)
  }
})

function goToPage(page) {
  if (page < 1 || page > totalPages.value) return

  currentPage.value = page

  // เลื่อนกลับไปยังหัวข้อหน้า
  if (import.meta.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <section class="announces-page">
    <div class="container">

      <div class="page-heading">
        <h1>ประชาสัมพันธ์</h1>
      </div>

      <div v-if="paginatedPosts.length" class="blog-grid">
        <AnnounceCard
          v-for="post in paginatedPosts"
          :key="post.slug"
          :post="post"
        />
      </div>

      <div v-else class="empty-state">
        <p>ยังไม่มีข่าวประชาสัมพันธ์</p>
      </div>

      <!-- Pagination -->
      <nav
        v-if="totalPages > 1"
        class="pagination"
        aria-label="เปลี่ยนหน้าข่าวประชาสัมพันธ์"
      >
        <button
          class="page-btn arrow-btn"
          :disabled="currentPage === 1"
          aria-label="หน้าก่อนหน้า"
          @click="goToPage(currentPage - 1)"
        >
          <i class="bi bi-chevron-left"></i>
        </button>

        <button
          v-for="page in visiblePages"
          :key="page"
          class="page-btn"
          :class="{ active: currentPage === page }"
          :aria-current="currentPage === page ? 'page' : undefined"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>

        <button
          class="page-btn arrow-btn"
          :disabled="currentPage === totalPages"
          aria-label="หน้าถัดไป"
          @click="goToPage(currentPage + 1)"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
      </nav>

    </div>
  </section>
</template>