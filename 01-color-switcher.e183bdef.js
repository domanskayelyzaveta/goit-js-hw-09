function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e={startBtn:document.querySelector("data-start"),stopBtn:document.querySelector("data-stop")},n=123;e.startBtn.addEventListener("click",(e=>{n=setInterval(t,1e3)})),e.stopBtn.addEventListener("click",(t=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.e183bdef.js.map
