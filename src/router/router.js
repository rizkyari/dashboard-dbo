import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import DashboardPage from '../views/DashboardPage.vue';
import AuthenticationManagement from '../views/AuthenticationManagement.vue';
import OrderManagement from '../views/OrderManagement.vue';
import CustomerManagement from '../views/CustomerManagement.vue';
import SupplierManagement from '../views/SupplierManagement.vue';

const routes = [
    {
      path: '/',
      redirect: '/login', 
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginForm,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage,
    },
    {
      path: '/authentication-management',
      name: 'AuthManagement',
      component: AuthenticationManagement,
    },
    {
      path: '/order-management',
      name: 'OrderManagement',
      component: OrderManagement,
    },
    {
      path: '/customer-management',
      name: 'CustomerManagement',
      component: CustomerManagement,
    },
    {
      path: '/supplier-management',
      name: 'SupplierManagement',
      component: SupplierManagement,
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    routes,
  });
  
export default router;