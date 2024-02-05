<template>
    <div>
        <DomainGenericsContainer>
            <div class="xs:gap-6 grid gap-24 px-6 py-24 lg:grid-cols-2">
                <div>
                    <div class="grid gap-6">
                        <h2 class="font-title text-4xl">
                            Dúvidas Complexas?
                        </h2>
                        <div class="text-lg text-stone-700">
                            Agende um horário conosco e vamos juntos transformar esses desafios em oportunidades para o seu
                            negócio. Estamos ansiosos para colaborar com você!
                        </div>
                        <div>
                            <DomainGenericsUser :user="owner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mx-auto max-w-lg rounded-xl bg-stone-100 p-6 lg:p-12">
                        <div class="block rounded-lg p-4 lg:p-12">
                            <div class="grid gap-3">
                                <DomainFormInput 
                                    id="nome" 
                                    v-model="formdata.nome" 
                                    label="Nome" 
                                    placeholder="José Faria" />
                                <DomainFormInput
                                    id="phone" v-model="formdata.phone" v-maska
                                    data-maska="['(##) ####-####', '(##) # ####-####']" placeholder="(##) # ####-####"
                                    label="Número de WhatsApp" />
                                <DomainFormInput
                                    id="email" v-model="formdata.email" label="Email"
                                    placeholder="exemplo@gmail.com" />
                                <DomainFormTextarea
                                    id="message" v-model="formdata.message" label="Mensagem"
                                    placeholder="Como eu abro uma empresa?" />
                                <DomainGenericsButton>
                                    Enviar
                                </DomainGenericsButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DomainGenericsContainer>
    </div>
</template> 



<script setup lang="ts">

const owner = {
    name: "Vyctor Soares",
    org: "VS Contábil",
    role: "CEO",
    image: "/home/profile ceo.png"
}

const formdata = ref({
    nome: "",
    phone: "",
    email: "",
    message: ""
})
</script>

<style scoped>
.block {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='23' ry='23' stroke='black' stroke-width='4' stroke-dasharray='10%2c 20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 23px;
}
</style>