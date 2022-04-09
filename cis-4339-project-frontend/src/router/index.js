//importing router
import { createRouter, createdWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

//below we're creating the routes
//importing components & views from their local loaction 
const router = createRouter({
    history: createdWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/create',
            name: 'create',
            component: () => import('../components/HelloWorld.vue')

        },
        {
            path: '/view',
            name: 'view',
            component: () => import('../components/ListComponent.vue')
        },
        {
            path:'/edit/:id',
            name: 'edit',
            component: () => import('../components/EditComponent.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        }
    ]




})

export default router