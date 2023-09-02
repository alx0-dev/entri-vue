<script setup>
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import CompanyHeader from './components/CompanyHeader.vue'

const router = useRouter()
const isLandingView = computed(() => router.currentRoute.value.path === '/')

router.push({ path: '/', replace: true })
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <div class="container-content">
          <header v-if="!isLandingView">
            <CompanyHeader />
          </header>
          <div class="content-view">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
header {
  margin: 40px 0;
}
.wrapper {
  height: 90vh;
  overflow: hidden;
  display: flex;
  position: fixed;
  top: 10vh;
}

.container {
  min-width: 100vw;
  display: flex;
}

.content {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.container-content {
  width: 70vw;
}

// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .container-content {
    width: 70vw;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .container-content {
    width: 60vw;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .container-content {
    width: 50vw;
  }
}

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .container-content {
    width: 40vw;
  }
}

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) {
  .container-content {
    width: 30vw;
  }
}
</style>
