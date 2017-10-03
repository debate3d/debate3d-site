<template lang="html">
  <footer class="app-footer">
    <div class="container">
      <div class="app-footer__links">
        <p class="subtitle"> Link importantes </p>
        <ul>
          <li>
            <a
              href="mailto:debated3d@gmail.com"
              title="Envie-nos um email">
              debated3d@gmail.com
            </a>
          </li>
          <li>
            <router-link to="/terms-of-use">
              Termos de uso da plataforma
            </router-link>
          </li>
        </ul>
      </div>


        <div class="app-footer__social">
          <p class="subtitle"> Redes sociais </p>
          <div class="social-blocks">

        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .app-footer {
    background-color: #1B1A2C;
    padding: 20px 0;

    .container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    a:hover {
      color: white;
    }

    &__links,
    &__social {
      padding: 0 1em;
      width: 50%;

      .subtitle {
        position: relative;
        color: white;

        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -0.5em;
          left: 0;
          width: 40%;
          height: 2px;
          background-color: white;
          border-radius: 1px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .app-footer {
      .container {
        display: block;
      }

      &__links,
      &__social {
        width: 100%;
      }

      &__social {
        margin-top: 1em;
      }
    }
  }
</style>
