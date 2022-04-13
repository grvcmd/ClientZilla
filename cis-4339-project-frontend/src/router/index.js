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
            path: '/view-orgs',
            name: 'view-orgs',
            component: () => import('../views/OrganizationView.vue')
        },
        {
            //display the orgs programs
            path:'/org-programs/:id',
            name: 'org-programs',
            component: () => import('../views/OrgProgramsView.vue')
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router