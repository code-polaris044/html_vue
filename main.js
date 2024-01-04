"use strict";
const app = Vue.createApp({
    data() {
        return {
            show: true,
            message_en: "Hello Vue!",
            message_ja: "こんにちは Vue!",
            lang: "ja",
            message: "てすと",
            pSize: "20px",
            isCapital: true,
            list: [
                { code: "A01", name: "プロダクトA" },
                { code: "B01", name: "プロダクトB" },
                { code: "C02", name: "プロダクトC" },
            ],
            stock: 10,
            price: 2000,
            year: new Date().getFullYear(),
        };
    },
    mounted() {
        this.lang = document.documentElement.lang;
    },
    methods: {
        now1() {
            return new Date().toLocaleString();
        },
    },
    computed: {
        isUrudoshi() {
            if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        },
        now2() {
            return new Date().toLocaleString();
        },
    },
});
app.config.globalProperties.$filters = {
    number_format(val) {
        return val.toLocaleString();
    },
};
const vm = app.mount("#app");
