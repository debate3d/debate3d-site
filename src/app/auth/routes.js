import LoginComponent from './login/main.vue'
import RegisterComponent from './register/main.vue'

export default [
  {
    path: '/auth/login',
    name: 'auth-login',
    component: LoginComponent,
    meta: { requireAuth: false }
  }, {
    path: '/auth/register',
    name: 'auth-register',
    component: RegisterComponent,
    meta: { requireAuth: false }
  }
]
