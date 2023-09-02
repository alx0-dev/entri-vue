import { defineStore } from 'pinia'

export const useEntriStore = defineStore('entri', {
  state: () => ({
    uid: '',
    config: ''
  }),
  getters: {},
  actions: {
    getUid() {
      const params = new URLSearchParams(document.location.search)
      this.uid = params.get('uid')
    }
  }
})
