<template>
    <div class="mx-auto grid w-full max-w-7xl md:grid-cols-2">
        <div id="HERO" class="grid px-4 py-10 md:py-20">
            <div>
                <div class="grid grid-rows-[max-content] items-center justify-center gap-6 text-center md:justify-start md:text-start xl:gap-12">
                    <DomainGenericsNotification>
                        Entre em contato via WhatsApp
                    </DomainGenericsNotification>
                    <h2 class="font-title text-6xl text-primary md:text-7xl xl:-mr-40 xl:text-8xl">
                        VS Contábil: <br>Êxito Financeiro
                    </h2>
                    <p class="max-w-md text-xl">
                        Simplifique a gestão do seu negócio com nossas soluções integradas em Departamento Pessoal,
                        Fiscal e Contábil.
                    </p>
                    <div class="py-3">
                        <DomainGenericsButton to="#FORM" size="lg">
                            FALE COM UM ESPECIALISTA
                        </DomainGenericsButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative grid justify-center">
            <NuxtImg class="w-full" sizes="xs:600px sm:600px lg:690px" src="/home/vyctor.png" />
            <div class="absolute inset-0 -z-10">
                <svg class="overflow-visible" viewBox="0 0 750 811" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="405.5" cy="405.5" r="405.5" fill="#6EA8FF" fill-opacity="0.1" />
                    <circle cx="384.799" cy="323.101" r="316.607" fill="#6EA8FF" fill-opacity="0.1" />
                </svg>
            </div>
        </div>
    </div>
</template>