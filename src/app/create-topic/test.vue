<template>
  <div>
    <b>{{item.uid}}</b>
    <span>{{ item.label }}</span>
  </div>
</template>

<script>
export default {
  props: { item: { required: true } }
}
</script>
