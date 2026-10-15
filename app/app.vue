<script setup>
useHead({
  meta: [
    {
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ]
})
</script>

<template>
  <div class="app">
    <Header />

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>