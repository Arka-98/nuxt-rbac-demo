<script setup></script>

<template>
    <nav class="px-6 py-3 border-b flex justify-between items-center">
        <h1>Nuxt Demo</h1>
        <div class="flex gap-4 text-sm">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink v-can:is_admin to="/admin">Admin</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/login">Login</NuxtLink>
            <NuxtLink to="/register">Register</NuxtLink>
        </div>
    </nav>
</template>

<style scoped></style>