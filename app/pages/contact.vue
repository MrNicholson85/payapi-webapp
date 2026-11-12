<template>
    <div>
        <h1>Contact Us</h1>
        <p>Get in touch with us!</p>
    </div>
</template>
<script setup>
    useHead({
        title: 'Contact Us',
        meta: [
            { name: 'description', content: 'This is the contact page of our Nuxt app.' }
        ]
    });
    definePageMeta({
        layout: 'internal'
    });
</script>
