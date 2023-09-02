<script setup>
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useEntriStore } from '../stores/entri'

const router = useRouter()
const store = useEntriStore()
</script>

<template>
  <main v-if="store.config">
    <div class="title">
      <h3>Welcome to</h3>
      <h1>{{ store.config.companyName }}</h1>
      <h3>{{ store.config.companyOffice }}</h3>
    </div>

    <Button @click="router.push({ path: '/registration', replace: true })" outlined>
      <span class="btn-text">Enter</span>
      <Icon icon="carbon:arrow-right" />
    </Button>
  </main>
</template>

<style lang="scss" scoped>
.btn-text {
  padding-right: 5px;
}
.title {
  margin-bottom: 40px;
}
</style>
