import Vue from 'vue'
import Router from 'vue-router'
import Alunos from '../components/Aluno.vue'
import Home from '@/components/Home.vue'



Vue.use(Router)

export default new Router({
    routes: [
        {   path: '/alunos',
            nome: 'Alunos',
            component: Alunos
        },
        {   path: '/home',
            nome: 'Home',
            component: Home
        },
        {
            path: '/',
            nome: 'default',
            component: Home
        }
        
]
    
})