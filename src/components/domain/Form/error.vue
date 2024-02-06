<template>
    <div v-for="(e, i) in error.value" :key="i">
        {{ e.message }}
    </div>
</template>

<script setup lang="ts">
import type { ZodIssue } from 'zod';

withDefaults(defineProps<{ error: Ref<ZodIssue[]> }>(), {  })
</script>