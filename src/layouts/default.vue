<template>
    <div class="relative grid min-h-[100dvh] grid-rows-[max-content_1fr_max-content]">
        <DomainStructuresHeader />
        <div>
            <slot />
        </div>
        <DomainStructuresFooter />
        <div class="pointer-events-none fixed bottom-0 right-0 z-50 p-5">
            <NuxtLink :href="`https://wa.me/${phone}`" target="_blank" class="pointer-events-auto">
                <Icon size="48px" name="logos:whatsapp-icon" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    const config = useRuntimeConfig();
    const phone = config.public.phone;
</script>