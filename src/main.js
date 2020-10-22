import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import '@/assets/css/style.css';
import '@/assets/vendors/ti-icons/css/themify-icons.css';

Vue.config.productionTip = false

const requireComponent = require.context(
  // The relative path of the components folder
  './components/Common',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
