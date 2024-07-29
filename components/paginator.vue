<template>
  <div>  
    <nav aria-label="Paginate me">
      <ul class="pagination justify-content-center">
        <nuxt-link v-if="pages.previous != null" class="page-link" :to="pages.previous" tabindex="-1">Предыдущая</nuxt-link>
        <li v-else class="page-item disabled">
          <a class="page-link disabled" href="#" tabindex="-1">Предыдущая</a>
        </li>
        <span v-for="i in pages.total">
          <li  v-if="pages.current === i" class="page-item active">
            <nuxt-link class="page-link" :to="`?${pages.search_query}page=${i}`">{{i}}</nuxt-link></li>
          <li v-else class="page-item">
            <nuxt-link class="page-link" :to="`?${pages.search_query}page=${i}`">{{i}}</nuxt-link></li>
        </span>
        <nuxt-link v-if="pages.next != null" class="page-link" :to="pages.next">Следующая</nuxt-link>
        <li v-else class="page-item disabled">
          <a class="page-link" href="#">Следующая</a>
        </li>
      </ul>
    </nav>
    <br>
  </div>
</template>

<script>
export default {
    name: 'Paginator',
    props: ['pages'],
}
</script>

<style scoped>
</style>