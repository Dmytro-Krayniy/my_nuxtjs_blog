<template>
  <div class="container">
    <h1 class="my-3">Recent articles</h1>
    <div class="row">
      <div v-for="post in posts" :key="post.slug" class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img :src="post.image" alt="" class="card-img-top card-img-height">
          <div class="card-body">
            <h4 class="card-title truncate">{{ post.h1 }}</h4>
            <div v-html="post.description" class="truncate"></div>
            <div class="mb-2">
              <span v-for="tag in post.tags">
                <nuxt-link :to="`/tags/${tag}`" class="mr-1 badge badge-info">#{{ tag }}</nuxt-link>
              </span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <nuxt-link :to="`/posts/${post.slug}`" class="btn btn-sm btn-outline-secondary">Подробнее</nuxt-link>
              </div>
              <small class="text-muted">{{ post.created_at }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Paginator :pages=pages_inf />
  </div>
</template>

<script>
import axios from "axios";
import Paginator from "../components/paginator.vue";
import { mapState } from 'vuex';
export default {
  components: {Paginator},
  watchQuery: ['page'],
  computed: {
    ...mapState(['posts', 'pages_inf'])
  },
  async fetch({store, route}) {
    await store.dispatch('loadAllPosts', {query_page: route.query.page})
  },
  head() {
    return {
      title: "Главная страница блога",
      meta: [
        { hid: "description", name: "description", content: "Это дискрипшн тут мы пишем текст не более 250 символов."},
        { hid: "keywords", name: "keywords", content: "перечисляем, ключевые, слова, для, главной"}
      ]
    }
  },
}
</script>

<style>

</style>