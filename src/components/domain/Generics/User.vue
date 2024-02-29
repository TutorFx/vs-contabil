<template>
    <span>
        <div class="grid grid-flow-col items-center justify-start gap-3">
            <div class="size-16 max-h-16 max-w-16 overflow-hidden rounded-full bg-primary-content">
                <NuxtImg :alt="`Foto de ${user.name}, que é ${user.role} na ${user.org}`" sizes="xs:64px sm:64px md:64px lg:64px" :src="user.image" />
            </div>
            <div>
                <b>{{ user.name }}</b>
                <div class="grid grid-flow-col justify-start gap-1">
                    <span>{{ user.role }}</span>
                    <span>{{ user.org }}</span>
                </div>
            </div>
        </div>
    </span>
</template>

<script setup lang="ts">
import type { ITestimonialUser } from "@/composables/testimonial"
defineProps<{ user: ITestimonialUser }>()
</script>