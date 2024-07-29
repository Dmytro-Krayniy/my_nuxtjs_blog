<template>
  <div>
    <SearchHeader @search_rezults="posts = $event"/>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav aria-label="breadcrumb" class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/">Главная</nuxt-link></li>
              <li class="breadcrumb-item active" aria-current="page">Поиск</li>
            </ol>
          </nav>
          <p class="lead">Найдено записей: {{posts.count}}</p>
          <div v-for="post in posts.results" :key="post.id">
            <nuxt-link :to="`/posts/${post.slug}`"><h3>{{ post.title }}</h3></nuxt-link>
            <p v-html="post.description"></p>
            <hr>
          </div>
        </div>  
      </div>
      <Paginator :pages=pages_inf />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchHeader from '~/components/search_header.vue';
import Paginator from "../components/paginator.vue";
export default {
  layout: 'post_detail',
  components: {SearchHeader, Paginator},
  watchQuery: ['q', 'page'],
  data () {
    return {
      posts: '',
      pages_inf: {
        previous: null,
        next: null,
        current: 1,
        total: 1,
        search_query: '',
      }
    }
  },
  async asyncData ({route}) {
    //console.log(route);
    let page = route.query.page !== undefined ? route.query.page : '1';
    const { data } = await axios.get(`http://localhost:8000/api/posts/?q=${route.query.q}&page=${page}`);
    console.log(data);
    return {
      posts: data,
      pages_inf: {
        previous: data.previous ? data.previous.split('/')[5] : null,
        next: data.next ? data.next.split('/')[5] : null,
        current: Number(page),
        total: Math.ceil(data.count / 6),
        search_query: `q=${route.query.q}&`,
      }
    }
  }
}
</script>

<style scoped>

</style>