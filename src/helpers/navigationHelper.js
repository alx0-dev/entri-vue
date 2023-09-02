import data from '../assets/data.json'

export const navigationHelper = {
  getUid: () => {
    const params = new URLSearchParams(document.location.search)
    return params.get('uid')
  },
  fetchConfig: (uid) => {
    return data.find((x) => x.uid === uid)
  }
}
