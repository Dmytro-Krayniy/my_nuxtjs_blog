<template>
  <div class="col-md-4">
    <div class="card my-4">
      <h5 class="card-header">Теги</h5>
      <div class="card-body">
        <div class="d-flex flex-wrap">
          <nuxt-link v-for="tag in tags" :key="tag.name" :to="`tags/${tag.name}`" class="m-2 h5">#{{ tag.name }}</nuxt-link>
        </div>
      </div>
    </div>

    <div class="card my-4">
      <h5 class="card-header">Последние статьи</h5>
      <div class="card-body" v-for="post in aside" :key="post.id">
        <h5 class="card-title">{{ post.h1 }}</h5>
        <img :src="post.image" alt="" class="card-img-top">
        <div class="truncate" v-html="post.description"></div>
        <nuxt-link :to="`/posts/${post.slug}`" class="card-link">Ссылка на статью</nuxt-link>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aside.vue",
  props: ["tags", "aside"],
}
</script>

<style scoped>

</style>