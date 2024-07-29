<template>
  <h1>Привет, это страница signout</h1>
</template>

<script>
export default {
  async created () {
    await this.$auth.logout()
  }
}
</script>

<style scoped>

</style>