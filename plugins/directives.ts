import { action } from "~~/directives/v-can"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('global-focus', {
        created: (el) => el.focus()
    })
    nuxtApp.vueApp.directive('can', {
        created: action,
        // beforeUpdate: hide
    })
})