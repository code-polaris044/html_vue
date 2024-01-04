"use strict";

//vueの場合
const app = Vue.createApp({
    data() {
        return {
            show: true,
            stock: 10,
            // message: "",
            width: window.innerWidth,
            height: window.innerHeight,
            point: {
                x: 0,
                y: 0,
            },
        };
    },
    created() {
        addEventListener("resize", this.resizeHandler);
        addEventListener("mousemove", this.mousemoveHandler);
    },
    beforeUnmount() {
        removeEventListener("resize", this.resizeHandler);
        removeEventListener("mousemove", this.mousemoveHandler);
    },
    methods: {
        now1() {
            return new Date().toLocaleString();
        },
        onDeleItem() {
            this.stock--;
        },
        resizeHandler($event) {
            this.width = $event.target.innerWidth;
            this.height = $event.target.innerHeight;
        },
        mousemoveHandler(e) {
            this.point.x = e.clientX;
            this.point.y = e.clientY;
        },
    },
    watch: {
        // stock(newStock, oldStock) {
        //     if (newStock === 0) {
        //         this.message = "売れ切れ";
        //     }
        // },
        message() {
            console.log("商品のステータスが変更されました。");
        },
    },
    computed: {
        now2() {
            return new Date().toLocaleString();
        },
        message() {
            if (this.stock === 0) {
                return "売れ切れ";
            }
            return "";
        },
    },
});
const vm = app.mount("#app");

//vanillaで取得した場合
// const app1 = document.querySelector("#app1");
// const btn1 = app1.querySelector(".btn1");
// const num1 = app1.querySelector(".num1");

// let stock1 = 10;

// btn1.addEventListener("click", onDelerItem);

// function onDelerItem() {
//     stock1--;
//     updateStock();
// }

// function updateStock() {
//     if (stock1 >= 1) {
//         num1.textContent = "残り" + stock1 + "個";
//     } else {
//         app1.removeChild(btn1);
//         num1.textContent = "在庫切れ";
//     }
// }

// updateStock();
