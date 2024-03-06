import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faBriefcase, faFlask, faGraduationCap, faAtom, faAward, faScroll, faVials, faHandsHelping, faCode, faLaptopCode, faCogs, faTrophy, faFolderOpen, faGlobe, faHeart, faFileAlt, faNewspaper, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add all the icons you wish to use to the library
library.add(
  faUserSecret, 
  faBriefcase, 
  faFlask, 
  faGraduationCap, 
  faAtom, 
  faAward, 
  faScroll, 
  faVials, 
  faHandsHelping, 
  faCode, 
  faLaptopCode, 
  faCogs, 
  faTrophy, 
  faFolderOpen, 
  faGlobe, 
  faHeart,
  faNewspaper,
  faFileAlt, 
  faDownload
);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
