import LoginComponent from './login/main.vue'
import RegisterComponent from './register/main.vue'
import RegisterFinish from './register-finish/main.vue'
import RecoveryPassword from './recovery-password'

export const finishRoute = {
  path: '/auth/finish',
  name: 'register-finish',
  component: RegisterFinish,
  meta: { requireAuth: true }
}

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
  }, {
    path: '/password-reset',
    name: 'password-recovery-route',
    component: RecoveryPassword,
    meta: { requireAuth: false }
  }
]
