import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';

import router from './router';

import CompaniesIndex from '@/components/companies/CompaniesIndex.vue';
//import CompaniesIndex from './resources/js/components/companies/CompaniesIndex.vue';

console.log('ok');

createApp({
    components: {
        CompaniesIndex
    }
}).use(router).mount('#app');
