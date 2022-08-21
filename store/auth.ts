import { defineStore } from "pinia";
import { User } from "~~/models/User";

export const useAuthStore = defineStore('auth', () => {
    const count = useState('count', () => 5)
    const user = useState('user', () => null)

    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    async function loginAdmin() {
        await useFetch('/api/login', { initialCache: false, params: { admin: true, editor: false }, async onResponse({ response }) {
            user.value = response._data
        } })
    }

    async function loginEditor() {
        await useFetch('/api/login', { initialCache: false, params: { admin: false, editor: true }, async onResponse({ response }) {
            user.value = response._data
        } })
    }

    function logout() {
        user.value = null
    }

    return { count, user, doubleCount, loginAdmin, loginEditor, logout, increment }
})