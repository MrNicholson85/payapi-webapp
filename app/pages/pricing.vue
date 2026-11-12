<template>
    <div>
        <h1>Pricing</h1>
        <p>Here are our pricing options:</p>
    </div>
</template>
<script setup>
    useHead({
        title: 'Pricing',
        meta: [
            { name: 'description', content: 'This is the pricing page of our Nuxt app.' }
        ]
    });
    definePageMeta({
        layout: 'internal'
    });
</script>
