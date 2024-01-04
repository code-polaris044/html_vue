"use strict";

// class Ball {
//     constructor(x, y) {
//         this.pos = {
//             x: x,
//             y: y,
//         };
//     }
//     move(x, y) {
//         this.pos.x += x;
//         this.pos.y += y;
//     }
// }

// let ball = [];

// for (let i = 0; i <= 100; i++) {
//     ball[i] = new Ball(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight));
// }

// for (let i = 0; i <= 100; i++) {
//     document.write('<div class="ball" style="top:' + ball[i].pos.y + "px;left:" + ball[i].pos.x + 'px;">⚫︎</div>');
// }

class Ball {
    constructor(x, y) {
        this.pos = {
            x: x,
            y: y,
        };
    }
    move(x, y) {
        this.pos.x += x;
        this.pos.y += y;
    }
}

let ball = [];

for (let i = 0; i <= 100; i++) {
    ball[i] = new Ball(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight));
    let newDiv = document.createElement("div");
    newDiv.className = "ball";
    newDiv.style.top = ball[i].pos.y + "px";
    newDiv.style.left = ball[i].pos.x + "px";
    newDiv.textContent = "冬";
    document.body.appendChild(newDiv);
}

console.log(ball[0].pos.x);
console.log(ball[0].pos.y);

console.log(ball[1].pos.x);
