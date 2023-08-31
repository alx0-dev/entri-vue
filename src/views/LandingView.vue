<script setup>
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main>
    <div class="title">
      <h3>Welcome to</h3>
      <h1>ACME CORP</h1>
    </div>

    <Button label="Enter" @click="router.push({ path: '/registration', replace: true })" />
  </main>
</template>

<style lang="scss" scoped>
.title {
  margin-bottom: 40px;
}
</style>
