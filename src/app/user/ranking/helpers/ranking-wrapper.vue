<script>
  export default { }
</script>

<template lang="html">
  <div>
    <app-pagination
      :total="count"
      :current.sync="page"
      :perPage="20" />

    <box-user
      v-for="(user, key) in records"
      :user="user"
      :key="key"
      :position="number + (key + 1)" />
  </div>
</template>
