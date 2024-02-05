<template>
    <div :style="backgroundStyles" class="bg-primary bg-cover py-12 text-primary-content">
        <DomainGenericsContainer class="grid gap-6">
            <div class="text-center">
                <div class="font-title text-4xl">
                    Algumas de nossas contagens
                </div>
                <div>
                    Os troféus de nossa jornada descritos em números
                </div>
            </div>
            <div class="grid justify-center">
                <div>
                    <div class="grid grid-cols-3 justify-center gap-3">
                        <div v-for="(count, i) in countings" :key="i">
                            <div class="text-center text-3xl font-black">
                                {{ count.number }}+
                            </div>
                            <div class="text-center">
                                {{ count.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DomainGenericsContainer>
    </div>
</template>

<script setup lang="ts">
const countings = ref([
    {
        title: "Clientes",
        number: 30
    },
    {
        title: "Empresas regularizadas",
        number: 300
    },
    {
        title: "Anos de jornada",
        number: 15
    }
])

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/brand/Patterns.svg', { sizes: 'xs:600px sm:650px md:1024px lg:1600px xl:1920vw' })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>