<script setup lang="ts">
defineProps({
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: 'Enter value'
    }
})
defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <input type="text" :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="px-2 py-1 border rounded-sm outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 placeholder:select-none">
</template>