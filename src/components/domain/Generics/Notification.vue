<template>
    <div class="flex justify-center md:justify-start">
        <div class="flex items-center gap-2 rounded-full bg-primary-100 px-3 py-2 pr-6">
            <span class="rounded-full bg-primary px-3 py-1 text-primary-content">INFO</span>
            <span>
                <slot />
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
type NotificationType = 'info'

withDefaults(defineProps<{ type?: NotificationType; }>(), {
    type: "info"
})
</script>