import axios from "axios";

export const state = () => ({
    anime: [],
    page: 1,
    totalPages: 0,
    // sortOptions: [
    //     { value: 'title', name: 'По названию' },
    //     { value: 'body', name: 'По содержимому' },
    // ]
})

export const getters = {
    getAnime(state) {
        return state.anime
    },
}

export const mutations = {
    setAnime(state, anime) {
        state.anime = anime;
    },
    setPage(state, page) {
        state.page = page
    },
    setTotalPages(state, totalPages) {
        state.totalPages = totalPages
    },
}

export const actions = {
    async fetchAnime({ state, commit }) {
        console.log(123123);
        try {
            const response = await axios.get(`https://shikimori.one/animes/page/${state.page}.json`);
            // commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
            commit('setAnime', response.data)
        } catch (e) {
            console.log(e)
        }
    },
    async loadMoreAnime({ state, commit }) {
        try {
            commit('setPage', state.page + 1)
            const response = await axios.get('https://shikimori.one/animes/', {
                params: {
                    _page: state.page,
                    _limit: state.limit
                }
            });
            // commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
            commit('setAnime', [...state.anime, ...response.data]);
        } catch (e) {
            console.log(e)
        }
    }
}