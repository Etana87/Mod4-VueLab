import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Añadir iconos a la librería
library.add(faPlus, faTrash, faCheck)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})