"use strict";

//vueの場合
const app = Vue.createApp({
    data() {
        return {
            year: new Date().getFullYear(),
            massage: "これは一方通行のバインドです。",
            answer: "はい",
        };
    },
    methods: {
        yearInputHandler(e) {
            this.year = e.target.value;
        },
    },
});
const vm = app.mount("#app");
