<template>
    <div class="bg-primary-50 py-12">
        <DomainGenericsContainer>
            <div class="grid grid-cols-1 gap-12 px-6 lg:grid-cols-12">
                <div class="max-w-md pt-12 lg:col-span-4">
                    <div class="grid gap-6">
                        <h3 class="font-title text-4xl">
                            Porque nos contratar?
                        </h3>
                        <div class="text-xl text-gray-500">
                            Muitas vezes o processo contábil pode ser muito complicado. Descomplicamos para você!
                        </div>
                    </div>
                </div>
                <div class="grid max-w-xl gap-12 px-6 md:grid-cols-2 md:px-0 lg:col-span-8 lg:gap-6">
                    <div v-for="(feature, i) in features.get()" :key="i" class="grid aspect-square rounded-lg bg-primary-content p-8">
                        <NuxtImg :size="60" class="w-[60px]" :src="feature.path" />
                        <h5 class="font-title text-xl">
                            {{ feature.title }}
                        </h5>
                        <p class="text-primary">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>
            </div>
        </DomainGenericsContainer>
    </div>
</template>

<script setup lang="ts">
const features = useFeatures(FEATURES_CONTENT);
</script>