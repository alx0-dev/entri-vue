<script setup>
import InputText from 'primevue/inputtext'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <div class="reg-input p-input-icon-left">
      <Icon icon="noto-v1:party-popper" />
      <InputText placeholder="First Name" />
    </div>
    <div class="reg-input p-input-icon-left">
      <Icon icon="noto-v1:party-popper" />
      <InputText placeholder="Last Name" />
    </div>
    <div class="reg-input p-input-icon-left">
      <Icon icon="noto-v1:party-popper" />
      <InputText placeholder="Contact Number" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reg-input {
  display: flex;
  margin: 10px 0;
}
</style>
