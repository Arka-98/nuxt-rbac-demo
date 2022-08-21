<script setup lang="ts">
const input = reactive({ email: '', password: '', confPassword: '' })

const handleSubmit = () => {
    console.log(input)
}
</script>

<template>
    <div class="space-y-4 w-full mx-auto max-w-lg">
        <header>Register</header>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <CommonText v-model.trim="input.email" placeholder="Enter your email" />
            <CommonPassword v-model.trim="input.password" placeholder="Enter a password" />
            <CommonPassword v-model.trim="input.confPassword" placeholder="Confirm your password" />
            <CommonButton type="submit">Submit</CommonButton>
        </form>
    </div>
</template>

<style scoped>
</style>