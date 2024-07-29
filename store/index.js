export const state = () => ({
    posts: [],
    pages_inf: {
        previous: '',
        next: '',
        current: 1,
        total: 1,
        search_query: '',
    }
})

export const mutations = {
    SET_POSTS (state, posts) {
        state.posts = posts
    },
    SET_TOTAL (state, total) {
        state.pages_inf.total = total
    },
    SET_NEXT (state, next) {
        state.pages_inf.next = next
    },
    SET_PREVIOUS (state, previous) {
        state.pages_inf.previous = previous
    },
    SET_CURRENT_PAGE (state, current_page) {
        state.pages_inf.current = current_page
    },
    SET_SEARCH_QUERY (state, search_query) {
        state.pages_inf.search_query = search_query
    },
}

import axios from "axios";
export const actions = {
    async loadAllPosts({commit}, {query_page}) {
        let page = query_page !== undefined ? query_page : '1';
        const {data} = await this.$axios.get(`http://127.0.0.1:8000/api/posts/?page=${page}`);
        commit('SET_POSTS', data.results);
        commit('SET_TOTAL', Math.ceil(data.count / 6));
        commit('SET_NEXT', data.next ? data.next.split('/')[5] : null);
        commit('SET_PREVIOUS', data.previous ? data.previous.split('/')[5] : null);
        commit('SET_CURRENT_PAGE', Number(page));
        commit('SET_SEARCH_QUERY', '');
        console.log(state.pages_inf);
    }
}