<template>
    <div class="relative overflow-hidden bg-primary-50 py-32">
        <div class="mx-auto grid max-w-7xl gap-12">
            <div class="text-center">
                <div id="TESTEMUNHO" class="font-title text-4xl">
                    Avaliações de Clientes
                </div>
            </div>

            <ClientOnly>
                <SecondaryTestimonialsSlider :service="TestimonialService" />
                <template #fallback>
                    <div class="grid justify-center">
                        <div>
                            <div class="grid justify-center gap-6 md:grid-cols-2">
                                <div v-for="(item, i) in TestimonialService.get().slice(0, 2)" :key="i">
                                    <DomainGenericsTestimonial :data="item" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">

const TestimonialService = useTestimonials(TESTIMONIAL_CONTENT);

</script>