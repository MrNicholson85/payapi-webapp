<template>
    <nav class="content flex justify-between items-center py-4 px-8">
        <div class="flex justify-between w-full md:justify-normal items-center">
            <div class="md:mr-16">
                <NuxtLink to="/"><img src="~/assets/img/Logo.svg" alt="Logo" /></NuxtLink>
            </div>
            <ul class="items-center space-x-4 hidden md:flex">    
                <li>
                    <NuxtLink to="/pricing" class="nav-item">Pricing</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="nav-item">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact" class="nav-item">Contact</NuxtLink>
                </li>
            </ul>
            <button class="block md:hidden"><img src="~/assets/img/menu.svg"></button>
        </div>
        <NuxtLink to="/contact" class="btn style-1 hidden md:flex">Schedule a Demo</NuxtLink>
    </nav>
</template>
