<template lang="html">
  <social-sharing :url="url" inline-template class="block-button">
    <div>
      <network class="button is-medium share-button" network="facebook">
        <span class="icon"> <i class="fa fa-facebook"></i> </span>
        <span> Facebook </span>
      </network>
      <network class="button is-medium share-button" network="linkedin">
        <span class="icon"> <i class="fa fa-linkedin"></i> </span>
        <span> LinkedIn </span>
      </network>
      <network class="button is-medium share-button" network="twitter">
        <span class="icon"> <i class="fa fa-twitter"></i> </span>
        <span> Twitter </span>
      </network>
      <network class="button is-medium share-button" network="whatsapp">
        <span class="icon"> <i class="fa fa-whatsapp"></i> </span>
        <span> Whatsapp </span>
      </network>
    </div>
  </social-sharing>
</template>

<script>
export default {
  computed: {
    url () {
      return document.URL
    }
  }
}
</script>

<style lang="scss" scoped>
  .block-button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;

    & .button.share-button {
      flex-grow: 1;
      margin: 0.5em;
    }
  }
</style>
