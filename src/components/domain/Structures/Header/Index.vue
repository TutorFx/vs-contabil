<template>
    <Teleport to="body">
        <div v-if="isMenuOpen" class="fixed z-50">
            <DomainGenericsContainer>
                <nav class="grid h-screen w-screen grid-rows-[max-content_1fr] bg-white">
                    <div class="grid grid-flow-col justify-end gap-4 px-12 py-6">
                        <button class="md:hidden" aria-label="Fechar Menu" @click="isMenuOpen = !isMenuOpen">
                            <Icon size="34" name="line-md:close-small" />
                        </button>
                    </div>
                    <div class="px-6">
                        <ul class="grid gap-4 pt-24">
                            <NuxtLink v-for="(item, i) in menu.get()" :key="i" v-bind="item.getBinding()" @click.capture="isMenuOpen = !isMenuOpen">
                                <li class="rounded-full px-3 py-1 font-title text-4xl text-primary before:hidden hover:bg-orange-100">
                                    {{ item.content }}
                                </li>
                            </NuxtLink>
                        </ul>
                    </div>
                </nav>
            </DomainGenericsContainer>
        </div>
    </Teleport>
    <nav class="py-4">
        <DomainGenericsContainer>
            <div class="grid grid-flow-col grid-cols-[max-content_1fr] items-center px-6">
                <NuxtLink to="/">
                    <NuxtImg alt="Logotipo da VS Contábil" width="200px" height="auto" src="/brand/logo.png" />
                </NuxtLink>
                <div class="grid grid-flow-col justify-end gap-4 px-6">
                    <button v-if="!isMenuOpen" class="md:hidden" aria-label="Abrir Menu" @click="isMenuOpen = !isMenuOpen">
                        <Icon size="30" name="line-md:close-to-menu-alt-transition" />
                    </button>
                </div>
                <div class="hidden md:block">
                    <menu class="grid grid-flow-col justify-end gap-4">
                        <NuxtLink v-for="(item, i) in menu.get()" :key="i" v-bind="item.getBinding()">
                            <div class="rounded-full px-3 py-1 hover:bg-orange-100">
                                {{ item.content }}
                            </div>
                        </NuxtLink>
                    </menu>
                </div>
            </div>
        </DomainGenericsContainer>
    </nav>
</template>

<script setup>
// State
const isMenuOpen = ref(false);

// Composables
const menu = useMenu(NAVBAR_CONTENT);
</script>