//importing router
import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

//below we're creating the routes
//importing components & views from their local loaction 
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            // intake form view for new clients to fill
            path: '/signup',
            name: 'signup',
            component: () => import('../views/SignUpView.vue')

        },
        {
            //displays all organization
            path: '/view',
            name: 'view',
            component: () => import('../views/OrganizationView.vue')
        },
        // {
        //     path:'/edit/:id',
        //     name: 'edit',
        //     component: () => import('../components/EditComponent.vue')
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router