<template>
    <div class="default-layout">
        <Header />
        <div>
            <slot />
        </div>
    </div>
</template>
<style scoped>
    .default-layout {
        position: relative;
        overflow-x: hidden;
        height: 100vh;
    }

    .default-layout::after {
        content: "";
        position: absolute;
        background-image: url('~/assets/img/bg-pattern-circle.svg');
        background-repeat: no-repeat;
        top: -172px;
        left: 770px;
        height: 780px;
        width: 780px;
        z-index: -1;
        /* Adjust the height as needed */
    }

    @media (max-width: 768px) {
        .default-layout::after {
            top: -463px;
            left: -37px;
            height: 949px;
            width: 949px;
        }
    }

    /* mobile @ 375px */
    @media (max-width: 375px) {
        .default-layout::after {
            top: -463px;
            left: -37px;
            height: 780px;
            width: 780px;
        }
    }
</style>
