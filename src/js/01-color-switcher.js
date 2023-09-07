

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону < body > на випадкове значення,
// використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена,
// кнопка «Start» була неактивною(disabled).
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]")
}

let intervalId = 123;
// isActive = false;


refs.startBtn.addEventListener('click', () => {
    // if (!isActive) {
        intervalId = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
        // isActive = true;
        refs.startBtn.disabled = true; // або 
    // }
});

 
refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    // isActive = false;
    refs.startBtn.disabled = false; // або
});



