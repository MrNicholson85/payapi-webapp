<template>
    <div class="hero content">
        <div class="md:w-1/2">
            <h1 class="text-preset-h1">Start building with our APIs for absolutely free.</h1>
            <div class="demo-form">
                <input type="text" placeholder="Enter email address" class="demo-input" />
                <button class="py-4 font-bold cursor-pointer flex justify-center w-63.5 btn style-1 text-white rounded-radius-full">Schedule a Demo</button>
            </div>
            <span class="flex pl-6.5 mt-4 text-sm text-slate-500">
                <p>Have any questions? <NuxtLink href="/contact" class="text-brand-slate-600 hover:text-brand-rose-400 underline-offset-4 font-bold underline">Contact us</NuxtLink></p>
            </span>
        </div>
        <div class="md:w-1/2">
            <img src="~/assets/img/illustration-phone-mockup.svg" alt="Hero Image" />
        </div>
    </div>
</template>
<style scoped>
@reference "../assets/css/main.css";

    .hero {
        @apply grid md:flex md:justify-between md:items-center md:gap-8;
    }

    .hero h1.text-preset-h1 {
        @apply text-brand-slate-700;
    }

    .hero .demo-form {
        @apply border w-111.5 border-slate-300 rounded-full flex justify-between items-center mt-8;
    }

    .hero .demo-form .demo-input {
        @apply ml-6 border-none w-full md:w-3/4;
    }
</style>
