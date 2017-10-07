<template lang="html">
  <div class="copyright">
    <hr>
    <p>
      Desenvolvido por
      <a
        href="http://emanuelgdev.com.br"
        title="Ir para o site de Emanuel G Web Developer"> EmanuelGDev </a>
      e mantido por
      <a href="https://www.facebook.com/AlanPCosta"
        title="Conheça o perfil de Alan Costa, mantenedor do site Debate3D">
          Alan Costa
      </a>
    </p>
  </div>
</template>

<style scoped lang="scss" media="screen">
  .copyright {
    position: relative;
    width: 100%;
    font-size: 1.1em;
    text-align: center;
    color: white;
    padding: .5em .5em 20px .5em;
    background-color: #3a4752;

    hr {
      display: block;
      margin: 20px auto;
      max-width: 1022px;
      height: 2px;
      background-color: whitesmoke;
    }
  }

  .copyright a:hover {
    color: #00aa9e;
    text-decoration: underline;
  }
</style>
