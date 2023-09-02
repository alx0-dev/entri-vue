<script setup>
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import RegistrationForm from '../components/RegistrationForm.vue'

const router = useRouter()
</script>

<template>
  <div>
    <h3>Please enter your details:</h3>
    <RegistrationForm />
    <Button label="Continue" @click="router.push({ path: '/ending', replace: true })" outlined />
  </div>
</template>

<style lang="scss" scoped></style>
