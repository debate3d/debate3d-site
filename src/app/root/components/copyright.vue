<template lang="html">
  <div class="copyright">
    <hr>
    <p>
      Desenvolvido por
      <a
        href="http://emanuelgdev.com.br"
        title="Ir para o site de Emanuel G Web Developer"> EmanuelGDev </a>
      e mantido por
      <a
        href="https://www.facebook.com/AlanCostaSM"
        title="Conheça o perfil de Alan Costa, mantenedor do site Debate3D">
          Alan Costa
      </a>
    </p>
  </div>
</template>

<style scoped lang="scss" media="screen">
  @import "../../../assets/sass/_extend";

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
      margin: 0 auto $space auto;
      max-width: 1022px;
      height: 2px;
      background-color: whitesmoke;
    }

    a {
      color: #3399ee;
    }
  }

  .copyright a:hover {
    color: white;
  }
</style>
