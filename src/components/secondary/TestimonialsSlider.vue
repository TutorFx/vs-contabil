<template>
    <div class="px-3">
        <Swiper :modules="[Autoplay, Mousewheel, Pagination]" :pagination="{}" :autoplay="{ delay: 5000 }" space-between="40"
            :mousewheel="{ releaseOnEdges: true }" class="!overflow-visible" :breakpoints="BREAKPOINTS">
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