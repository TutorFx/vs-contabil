<template>
    <div class="grid min-h-[100dvh] grid-rows-[max-content_1fr_max-content]">
        <DomainStructuresHeader />
        <div>
            <slot />
        </div>
        <DomainStructuresFooter />
    </div>
</template>