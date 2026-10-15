<script setup>
import { executives } from '~/data/executives'

useHead({
  title: 'ผู้บริหารโรงเรียน - โรงเรียนพิษณุโลกพิทยาคม'
})
</script>

<template>
  <section class="article">
    <div class="container">

      <div class="page-heading">
        <h1>ผู้บริหารโรงเรียน</h1>
      </div>

      <div class="management-grid">
        <article
          v-for="person in executives"
          :key="person.slug"
          class="management-card"
        >
          <img
            :src="person.image"
            :alt="person.name"
            class="management-image"
          >

          <div class="management-content">

            <h2>{{ person.name }}</h2>

            <p v-if="person.position">
              {{ person.position }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>