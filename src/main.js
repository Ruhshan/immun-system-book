import Vue from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faResearchgate, faFacebook, faMedium} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon ,FontAwesomeLayers, FontAwesomeLayersText} from "@fortawesome/vue-fontawesome";

library.add(
  faChevronCircleLeft,
  faChevronCircleRight,
  faPlusCircle,
  faMinusCircle,
  faLinkedin,
  faMedium,
  faResearchgate,
  faFacebook,
  faResearchgate
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
