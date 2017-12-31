<template lang="html">
  <footer class="app-footer">
    <div class="container">
      <div class="app-footer__links">
        <p class="subtitle"> Link importantes </p>
        <ul>
          <li>
            <a
              class="has-text-light"
              href="mailto:debated3d@gmail.com"
              title="Envie-nos um email">
              debated3d@gmail.com
            </a>
          </li>
          <li>
            <router-link
              class="has-text-light"
              to="/app/terms-of-use">
              Termos de uso da plataforma
            </router-link>
          </li>
        </ul>
      </div>


      <div class="app-footer__social">
        <p class="subtitle"> Redes sociais </p>
        <div class="social-blocks">
          <a class="has-text-light" href="https://www.facebook.com/debate3d/" target="_blank">
            <b-icon icon="facebook fa-3x" size="is-large" pack="fa"></b-icon>
          </a>
          <a class="has-text-light" href="https://twitter.com/Debate_3D" target="_blank">
            <b-icon icon="twitter fa-3x" size="is-large" pack="fa"></b-icon>
          </a>
          <a class="has-text-light" href="https://www.instagram.com/debate_3d/" target="_blank">
            <b-icon icon="instagram fa-3x" size="is-large" pack="fa"></b-icon>
          </a>
          <a class="has-text-light" href="https://www.linkedin.com/company-beta/16230450/" target="_blank">
            <b-icon icon="linkedin fa-3x" size="is-large" pack="fa"></b-icon>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/_extend";

  .app-footer {
    background-color: $menu-color;
    padding: $space 0;
    box-shadow: 0 -6px 6px -3px rgba(0,0,0,.2),
                0 -10px 14px 1px rgba(0,0,0,.14),
                0 -4px 18px 3px rgba(0,0,0,.12);

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
          width: 40%;
          height: 2px;
          background-color: white;
          border-radius: 1px;
        }
      }
    }

    &__links {
      text-align: right;

      .subtitle::after {
        right: 0;
      }
    }

    &__social {
      .subtitle::after {
        left: 0;
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
