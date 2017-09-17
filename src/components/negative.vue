<!-- Este component, a princípio, so aparece para os components da view Meu Deck e Meus cards -->
<template lang="html">
  <div class="negative-message">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="478.2px" height="478.2px" viewBox="0 0 478.2 478.2" style="enable-background:new 0 0 478.2 478.2;" xml:space="preserve"
      >
    <g>
      <path d="M133.9,191.3c0-10.5,8.6-19.1,19.1-19.1s19.1,8.6,19.1,19.1s-8.6,19.1-19.1,19.1S133.9,201.8,133.9,191.3z M478.2,239.1
        C478.2,371.1,371.1,478.2,239.1,478.2C107.1,478.2,0,371.1,0,239.1C0,107.1,107.1,0,239.1,0C371,0,478.2,107.1,478.2,239.1z
         M459,239.1C459,116.7,361.5,19.2,239.1,19.2C116.7,19.2,19.2,116.7,19.2,239.1C19.2,361.5,116.7,459,239.1,459
        C361.5,459,459,361.5,459,239.1z M325.1,210.4c10.5,0,19.101-8.6,19.101-19.1s-8.601-19.1-19.101-19.1s-19.1,8.6-19.1,19.1
        S314.6,210.4,325.1,210.4z M133.9,344.3V363.4c0,0,38.2-38.2,105.2-38.2c67,0,105.2,38.2,105.2,38.2V344.3
        c0,0-38.2-38.2-105.2-38.2C172.1,306.1,133.9,344.3,133.9,344.3z"/>
    </g>
    </svg>
    <p class="subtitle"> {{ message }} </p>
  </div>
</template>

<script>
export default {
  name: 'negative',
  props: ['message']
}
</script>

<style lang="sass" scoped>
.negative-message
  display: flex
  align-items: center
  flex-direction: column

  svg
    max-width: 200px
    max-height: 200px
    fill: #1b1a20

  .subtitle
    margin-top: 1em
    display: flex
    align-items: center
    flex-direction: column
</style>
