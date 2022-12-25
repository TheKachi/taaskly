import { defineNuxtPlugin } from '#app'
import VMoney from './directive'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('money', VMoney)
})
