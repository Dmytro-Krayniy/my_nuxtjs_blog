<template>
    <div>
        <Header :h1=title />
        <div class="container">
            <p class="my-3">Другие теги:
                <nuxt-link v-for="tag in tags" :to="`/tags/${tag.name}`" :key="name" class="badge badge-success mr-1">{{ tag.name }}</nuxt-link>
            </p>
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
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Header from "~/components/header";

export default {
    layout: "post_detail",
    async asyncData ({params}) {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/tags/${params.slug}`);
        const tags = await axios.get(`http://127.0.0.1:8000/api/tags/`);
        return {
            posts: data.results,
            title: `Tag: #${params.slug}`,
            tags: tags.data,
        }
    },
}
</script>

<style scoped>
</style>