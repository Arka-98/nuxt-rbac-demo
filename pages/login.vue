<script setup lang="ts">
import Button from '~~/components/common/Button.vue';
const input = reactive({ email: '', password: '' })
const handleSubmit = () => {
    console.log(input)
}
onMounted(() => console.log('mounted'))
</script>

<template>
    <div class="space-y-4 w-full mx-auto max-w-lg">
        <header>Login</header>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <CommonText v-global-focus v-model.trim="input.email" placeholder="Enter your email" />
            <CommonPassword v-model.trim="input.password" placeholder="Enter your password" />
            <CommonButton type="submit">Submit</CommonButton>
        </form>
        <p :hidden="false">Hidden text</p>
    </div>
</template>

<style scoped>
</style>