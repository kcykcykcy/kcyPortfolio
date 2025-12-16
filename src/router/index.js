import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue'
import SkillPage from '../components/SkillPage.vue'
import ProjectPage from '../components/ProjectPage.vue'
import ContactPage from '../components/ContactPage.vue'

const routes = [
  { name: 'AboutPage', path: '/', component: AboutPage },
  { name: 'SkillPage', path: '/skill-page', component: SkillPage },
  { name: 'ProjectPage', path: '/project-page', component: ProjectPage },
  { name: 'ContactPage', path: '/contact-page', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
