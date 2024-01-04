"use strict";

const app = Vue.createApp({
    data() {
        return {
            //データの保持
            pos: { x: 0, y: 0 },
            radius: 20,
        };
    },
    methods: {
        move(x, y) {
            this.pos.x += x;
            this.pos.y += y;
        },
    },
    computed: {
        //算出プロパティの定義
    },
    watch: {
        //監視の定義
    },
});

const ball = app.mount("#app");
