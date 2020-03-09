import axios from 'axios'

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
        async signIn ({ commit }, credentials) {
            await axios.get('/airlock/csrf-cookie')
            await axios.post('/login', credentials)
        },

        async me ({ commit }) {
            
        }
    }
}