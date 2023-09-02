<script setup>
import { RouterView } from 'vue-router'
import CompanyHeader from './components/CompanyHeader.vue'
import EntriFooter from './components/EntriFooter.vue'
import { navigationHelper } from './helpers/navigationHelper.js'
import { useEntriStore } from './stores/entri'

// http://localhost:5173/?uid=data

const store = useEntriStore()
const uid = navigationHelper.getUid()

if (uid) {
  store.uid = uid
  store.config = navigationHelper.fetchConfig(uid)
} else {
  console.log('no uid found')
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <div class="container-content">
          <header>
            <CompanyHeader />
          </header>
          <div class="content-view">
            <RouterView />
          </div>
        </div>
      </div>
      <EntriFooter />
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
}

.container {
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
