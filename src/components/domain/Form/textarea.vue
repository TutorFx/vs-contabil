<template>
    <div class="relative">
        <textarea :id="id" ref="el" v-model="model" :placeholder="placeholder" :type="type" :class="inputc" :title="title"
            :autocomplete="id" v-bind="{ ...attrs }" />
        <label :for="id" :class="labelc">
            {{ label }}
        </label>
    </div>
    <div class="px-6 text-sm">
        Sua dúvida pode conter até 4000 caracteres.
    </div>
</template>
  
<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { v4 as uuid } from "uuid";

defineOptions({
    inheritAttrs: false,
});

const attrs = useAttrs();

const baseInput =
    "peer block w-full rounded-lg border-2 bg-inherit px-2.5 pb-2.5 pt-4 text-sm outline-none focus:ring-0 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:transition-all placeholder:duration-500";
const baseLabel =
    "absolute -translate-y-2 top-1 left-1 z-10 origin-[0] scale-75 cursor-text select-none px-2 text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 transition-all duration-500 bg-stone-100 peer-focus:bg-stone-100";

const style = {
    primary: {
        input:
            "focus:border-primary peer-focus:placeholder:text-primary text-base-content border-gray-400",
        label: "peer-focus:text-primary text-base-content",
    },
    danger: {
        input: "!border-error !placeholder:text-error text-error",
        label: "text-error",
    },
};

const props = withDefaults(
    defineProps<{
        modelValue?: string;
        title?: string;
        placeholder?: string;
        id?: string;
        label: string;
        type?: string;
        theme?: keyof typeof style;
    }>(),
    {
        id: uuid(),
        modelValue: "",
        type: "text",
        theme: "primary",
    },
);

const inputc = computed(() => twMerge(style[props.theme].input, baseInput));
const labelc = computed(() => twMerge(style[props.theme].input, baseLabel));

const emits = defineEmits<{
    "update:modelValue": [id: string];
}>();

const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    },
});

const el = ref();
</script>