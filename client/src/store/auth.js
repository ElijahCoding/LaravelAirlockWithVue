export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null
    },
    getters: {
        authenticated(state) {
            return state.authenticated
        },

        user (state) {
            return state.user
        }
    },
    mutations: {

    },
    actions: {

    }
}