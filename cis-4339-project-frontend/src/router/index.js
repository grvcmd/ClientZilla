//importing router
import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '../views/ChartView.vue'

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
            // new organization registration view
            path: '/orgsignup',
            name: 'orgsignup',
            component: () => import('../views/OrgSignUpView.vue')
        },
        {
            //displays all organization
            path: '/view-orgs',
            name: 'view-orgs',
            component: () => import('../views/OrganizationView.vue')
        },
        {
            // Edit existing org
            path: '/edit-org',
            name: 'edit-org',
            component: () => import('../components/EditOrgComponent.vue')
        },
        {
            //display the orgs programs
            path:'/org-programs/:id',
            name: 'org-programs',
            component: () => import('../views/OrgProgramsView.vue')
        },
        {
            path: '/program-services/:id',
            name: 'program-services',
            component: () => import('../views/ProgramServicesView.vue')
        },

        {
            //created view to display clients
            path: '/view-clients',
            name: 'view-clients',
            component: () => import('../views/ClientView.vue')
        },
        {
            // View to edit clients
            path: '/edit-client',
            name: 'edit-client',
            component: () => import('../components/EditClientComponent.vue')
        },
        {
            // Chart view to see how many applicants each service has
            path: '/chart',
            name: 'chart',
            component: ChartView
        },
    ]
})

export default router