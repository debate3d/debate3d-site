<script>
import { mapState } from 'vuex'

export default {
  name: 'dashboard-footer',
  computed: {
    ...mapState(['version'])
  }
}
</script>

<template>
  <q-layout-footer reveal class="bg-blue-grey-10">
    <div class="row">
      <div class="col-md-6 text-right">
        <p class="caption text-white"> Links importantes </p>

        <ul>
          <li>
            <a
              class="text-white"
              href="mailto:debated3d@gmail.com"
              title="Envie-nos um email">
              debated3d@gmail.com
            </a>
          </li>

          <li>
            <router-link
              class="text-white"
              :to="{ name: 'user.terms' }">
              Termos de uso da plataforma
            </router-link>
          </li>
        </ul>
      </div>

      <div class="col-md-6">
        <p class="caption text-white"> Redes sociais </p>

        <a class="social-icon text-white" href="https://www.facebook.com/debate3d/" target="_blank">
          <q-icon color="white" name="fab fa-facebook" size="40px" />
        </a>
        <a class="social-icon text-white" href="https://twitter.com/Debate_3D" target="_blank">
          <q-icon color="white" name="fab fa-twitter" size="40px" />
        </a>
        <a class="social-icon text-white" href="https://www.instagram.com/debate_3d/" target="_blank">
          <q-icon color="white" name="fab fa-instagram" size="40px" />
        </a>
        <a class="social-icon text-white" href="https://www.linkedin.com/company-beta/16230450/" target="_blank">
          <q-icon color="white" name="fab fa-linkedin" size="40px" />
        </a>
      </div>
    </div>

    <hr style="margin: 0" />

    <div class="copyright">
      <p class="text-white text-center">
        Desenvolvido por
        <a
          class="text-info"
          href="http://emanuelgdev.com.br"
          title="Ir para o site de Emanuel G Web Developer"> EmanuelGDev </a>
        e mantido por
        <a
          class="text-info"
          href="https://www.facebook.com/AlanCostaSM"
          title="Conheça o perfil de Alan Costa, mantenedor do site Debate3D">
            Alan Costa
        </a>
      </p>

      <q-chip
        small
        dense
        square
        color="dark"
        class="app-version">
        Version {{ version }}
      </q-chip>
    </div>
  </q-layout-footer>
</template>

<style scoped>
.col-md-6 {
  padding: 10px;
}

.col-md-6 ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.col-md-6 .social-icon {
  margin: 5px;
}

.col-md-6 .caption {
  position: relative;
}

.col-md-6 .caption::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -0.5em;
  width: 40%;
  height: 1px;
  background-color: white;
  border-radius: 1px;
}

.col-md-6.text-right .caption::after {
  right: 0;
}

.copyright {
  padding-top: 10px;
}

.app-version {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>
