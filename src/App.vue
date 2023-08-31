<script setup>
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

router.push({ path: '/', replace: true })
</script>

<template>
  <header>
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  font-size: 20px;
}
</style>
