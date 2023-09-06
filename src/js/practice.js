// const refs = {
//     clockFaceEl: document.querySelector(".js"),
//     startBtn: document.querySelector(".jss")
//     stopBtn: document.querySelector(".jsst")
// }

// const stopwatch = {
//     initTime: 0,
//     intervalId: 123,
//     isActive: false,
//     start() {
//         if (this.isActive === true) {
//             return;
//         }
//         this.initTime = Date.now();
//         this.intervalId = setInterval(() => {
//             this.tick();
//         }, 1000);
//         this.isActive = true;
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         if (this.isActive === false) {
//             return;
//         }
//         this.isActive = false;
//     },
//     render(data) {
//         const { seconds, minutes, hours } = this.parseData(data)
//         refs.clockFaceEl. ...;
// },
    
//     tick() {
//         const diff = Date.now() - this.initTime;
//         this.render(diff)
//     },
//     parseTime(time) {
//         let seconds = Math.floor((time / 1000) % 60);
//         let minutes = Math.floor((time / 1000 / 60) % 60);
//         let hours = Math.floor((time / 1000 / 60 / 60) % 100);;
//         return { seconds, minutes, hours };
//     }
// }