/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import AtividadeForm from '../components/AtividadeForm.vue'
import AtividadeList from '../components/AtividadeList.vue'
import VoluntarioForm from '../components/VoluntarioForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/nova-atividade',
    name: 'Nova Atividade',
    component: AtividadeForm
  },

  {
    path: '/minhas-atividades',
    name: 'Minhas Atividades',
    component: AtividadeList
  },
  {
    path: '/novo-voluntario',
    name: 'Novo Voluntário',
    component: VoluntarioForm
  }
]

const router = new VueRouter({
  routes
})

export default router
