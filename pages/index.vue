<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~~/store/auth';

const store = useAuthStore()

const { user } = storeToRefs(store)

// watchEffect(() => console.log(user.value))
</script>

<template>
    <div class="space-y-2">
        <header>Hello this is Home</header>
        <div class="flex gap-3">
            <CommonButton @click="store.increment">Count is {{ store.count }}</CommonButton>
            <CommonButton @click="store.loginAdmin">Login as Admin</CommonButton>
            <CommonButton @click="store.loginEditor">Login as Editor</CommonButton>
        </div>
        <p v-can:is_admin>Admin only</p>
        <p v-can:is_editor>Editor only</p>
        <p>Authenticated only</p>
    </div>
</template>

<style scoped>
</style>