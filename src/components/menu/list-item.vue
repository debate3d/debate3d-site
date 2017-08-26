<script type="text/javascript">
  export default {
    props: [ 'label', 'route' ]
  }
</script>

<template>
  <li class="menu-item">
    <router-link :to="route"> {{ label }} </router-link>
  </li>
</template>
