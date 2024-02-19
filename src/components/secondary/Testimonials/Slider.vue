<template>
    <div ref="root" class="relative px-3" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <div class="absolute inset-y-0 left-full z-10 w-1/3 bg-gradient-to-l from-primary-50 from-30% to-transparent" />
        <div class="absolute inset-y-0 right-full z-10 w-1/3 bg-gradient-to-r from-primary-50 from-30% to-transparent" />
        <Swiper 
            :modules="[
                Autoplay,
                Mousewheel,
                Pagination
            ]" 
            :pagination="{}" 
            :autoplay="{ delay: 5000 }" 
            space-between="40"
            :mousewheel="{ releaseOnEdges: true }"
            :class="{ '!overflow-visible': hovering }" :breakpoints="BREAKPOINTS">
            <SwiperSlide v-for="(item, i) in service.get()" :key="i">
                <DomainGenericsTestimonial :data="item" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import type TestimonialService from '~/composables/testimonial/TestimonialService';
import 'swiper/css';
import 'swiper/css/pagination';

const hovering = ref(false);

defineProps<{
    service: TestimonialService
}>()

const BREAKPOINTS = {
    '300': {
        slidesPerView: 1,
        spaceBetween: 40,
    },
    '768': {
        slidesPerView: 1,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 2,
        spaceBetween: 50,
    },
    '1920': {
        slidesPerView: 2,
        spaceBetween: 50,
    },
}

</script>