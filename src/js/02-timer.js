// Напиши скрипт таймера, який здійснює зворотний відлік до певної дати. Такий таймер може використовуватися у блогах та інтернет - магазинах,
//     сторінках реєстрації подій, під час технічного обслуговування тощо.Подивися демо - відео роботи таймера.

// HTML містить готову розмітку таймера, поля вибору кінцевої дати і кнопку, по кліку на яку, таймер повинен запускатися. 
// Додай мінімальне оформлення елементів інтерфейсу.

// Використовуй бібліотеку flatpickr для того, щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу. Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.


// Бібліотека очікує, що її ініціалізують на елементі input[type="text"], тому ми додали до HTML документу поле input#datetime-picker.

// <input type="text" id="datetime-picker" />

// Другим аргументом функції flatpickr(selector, options) можна передати необов'язковий об'єкт параметрів. Ми підготували для тебе об'єкт, який потрібен для виконання завдання. Розберися, за що відповідає кожна властивість в документації «Options», і використовуй його у своєму коді.

// Метод onClose() з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу, який створює flatpickr. Саме у ньому 
// варто обробляти дату, обрану користувачем.Параметр selectedDates - це масив обраних дат, тому ми беремо перший елемент.

// Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
// Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
// Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
// Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.
// Відлік часу

// Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати, і оновлювати інтерфейс
// таймера, показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx: xx: xx: xx.

// Кількість днів може складатися з більше, ніж двох цифр.
// Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто 00:00:00:00.

// Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };}

// Форматування часу

// Функція convertMs() повертає об'єкт з розрахованим часом, що залишився до кінцевої дати. Зверни увагу, що вона не форматує результат. 
// Тобто, якщо залишилося 4 хвилини або будь - якої іншої складової часу, то функція поверне 4, а не 04.В інтерфейсі таймера необхідно додавати 0,
// якщо в числі менше двох символів.Напиши функцію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.

// Бібліотека повідомлень

// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.
// Для відображення повідомлень користувачеві, замість window.alert(), використовуй бібліотеку notiflix.


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const dateTimeEl = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");


flatpickr(dateTimeEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {

    const dateDiff = selectedDates[0].getTime() - Date.now();

        if (dateDiff <= 0) {
            Notify.warning("Please choose a date in the future");
            startBtn.disabled = true;

        } else {
            startBtn.disabled = false;
        }
    }, 
});



 const timer = {
    deadline: new Date(),
        intervalId: null,
        days: document.querySelector("[data-days]"),
        hours: document.querySelector("[data-hours]"),
        minutes: document.querySelector("[data-minutes]"),
        seconds: document.querySelector("[data-seconds]"),
        start() {
        this.intervalId = setInterval(() => {
            const dateDiff = this.deadline - Date.now();

            if (dateDiff <= 0) {
                this.stop();

                return;
            }

            let { days, hours, minutes, seconds } = this.convertMs(dateDiff);
            this.updateTimerDisplay(days, hours, minutes, seconds);
         }, 1000);

        },
         stop() {
            clearInterval(this.intervalId);
        },
        
        updateTimerDisplay(days, hours, minutes, seconds) {
             this.days.textContent = this.addLeadingZero(days);
             this.hours.textContent = this.addLeadingZero(hours);
             this.minutes.textContent = this.addLeadingZero(minutes);
             this.seconds.textContent = this.addLeadingZero(seconds);
         },
        
         addLeadingZero(value) {
         return value.toString().padStart(2, "0");
         },


        convertMs(ms) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;


            const days = Math.floor(ms / day);
            const hours = Math.floor((ms % day) / hour);
            const minutes = Math.floor(((ms % day) % hour) / minute);
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            return { days, hours, minutes, seconds };
            }
        
        };

        const selectedHours = parseInt(document.querySelector(".flatpickr-time input.flatpickr-hour").value, 10);
        const selectedMinutes = parseInt(document.querySelector(".flatpickr-time input.flatpickr-minute").value, 10);
        


        startBtn.addEventListener('click', () => {
        const selectedDateTime = flatpickr.parseDate(dateTimeEl.value);
        selectedDateTime.setHours(selectedHours, selectedMinutes, 0, 0);
         timer.deadline = selectedDateTime;
        timer.start()
    });








