import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router';
import ListStudentsPage from "@/views/ListStudentsPage";
import CreateStudentPage from "@/views/CreateStudentPage";
import HomePage from "@/views/HomePage";

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/students', name: "Alunos", component: ListStudentsPage },
];
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

