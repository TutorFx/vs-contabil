<template>
    <div>
        <div class="grid aspect-[16/7] gap-6 rounded-lg bg-primary-content p-10">
            <div class="text-center text-lg font-black">
                {{ data.comment.title }}
            </div>
            <div class="text-center">
                {{ data.comment.message }}
            </div>
        </div>
        <div class="flex justify-center">
            <div class="relative -top-4 size-8 rotate-45 rounded-ee-lg bg-primary-content" />
        </div>
        <div class="grid justify-center">
            <DomainGenericsUser :user="data.user" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    data: ITestimonial
}>()
</script>