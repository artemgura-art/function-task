/* УСІ ЗАВДАННЯ ВИКОНУЮТЬСЯ ВИКЛЮЧНО У ЦЬОМУ ФАЙЛІ JS. 
НЕ ПИШЕМО НІЧОГО в HTML, не створюємо інших файлів.
ДЛЯ ПЕРЕВІРКИ ВІДПРАВЛЯЄМО САМЕ ЦЕЙ ФАЙЛ.

Перевірити деякі з завдань можна самостійно через інспектор елементів. 
*/

//Завдання-1
/*
  - Знайти на сторінці елемент з класом task-one;
  - Додати до нього класс first-task
*/

// Відповідь до 1 завдання пишемо під цим текстом
/*

const taskOne = document.querySelector('.task-one');
taskOne.classList.add('first-task');

*/
//Завдання-2
/*
  - Знайти на сторінці елемент з класом task-two;
  - Перевірити, чи є й нього клас second
  - Вивести в консоль усі його класи
*/

// Відповідь до 2 завдання пишемо під цим текстом
/*
const taskTwo = document.querySelector('.task-two');

taskTwo.classList.contains('.second'); 


console.log(taskTwo.className);
*/
/* Треба вивести в консоль класи, а не сам елемент, для цього використовується .className */


//Завдання-3
/*
  - Знайти на сторінці елемент з класом task-three;
  - Вивести в консоль значення атрибута id цього елемента 
*/

// Відповідь до 3 завдання пишемо під цим текстом
/*
const taskThree = document.querySelector('.task-three');

const thirdId = document.getElementById('third').textContent;

console.log(thirdId);
*/
/* Ні, неправильно. Ми не ліземо дивитися, що там в HTML. 
У завданні написано - вивести в консоль значення атрибута id цього елемента. 
Шукаємо відповідну властивість  */

//Завдання-4
/*
  - Знайти на сторінці усі елементИ з класом new
  - вивести їхню кількість в консоль
*/

// Відповідь до 4 завдання пишемо під цим текстом
/*
const allNew = document.querySelectorAll('.new').length;

console.log(allNew);
*/
//Завдання-5
/*
  - Знайти на сторінці усі елементИ з класом new
  - додати кожному з цих елементів ще один клас з назвою "year"
  підказка: використовуємо цикл 
*/

// Відповідь до 5 завдання пишемо під цим текстом

// const allNew  = document.querySelectorAll('.new');



// for (const div of allNew) {
//   div.classList.add("year");
// }

// console.log(allNew);


//Завдання-6
/*
  - Знайти на сторінці елемент з класом task-six;
  - Змінити текст всередині цього елемента на "Шосте завдання"
*/

// Відповідь до 6 завдання пишемо під цим текстом
/*
const taskSix = document.querySelector('.task-six').textContent = 'Шосте завдання';

console.log(taskSix);
*/

//Завдання-7
/*
  - Знайти на сторінці елемент з класом task-seven, перевірити, чи це input;
  - Якщо так, то вивести в консоль його значення (value)
*/

// Відповідь до 7 завдання пишемо під цим текстом
/*
const taskSeven = document.querySelector('.task-seven').tagName;



console.log(document.querySelector(".task-seven").value);

*/
// Не бачу перевірки на інпут. Треба доробити

//Завдання-8
/*
  - Знайти на сторінці посилання в середині елемента з класом task-eight
  - Якщо так, то вивести в консоль текст посилання та назви(name) і значення(value) атрибутів цього посилання
  Для обходу атрибутів можна використати цикл for..of
*/

//Підказка - цикл має пройтися по атрибутах! цього посилання. 
//Для цього є спеціальна властивість
//Відповідно у кожного з атрибутів є name та value, які і треба виводити в консоль

// Відповідь до 8 завдання пишемо під цим текстом
/*
const taskEight = document.querySelector('.task-eight a');


 for ( div of taskEight.attributes){

  console.log(`${div.name}, ${div.value}`);
 
 }
*/

// console.log(taskEight);

//Завдання-9
/*
  - Знайти на сторінці елемент з класом task-nine;
  - видалити у нього усі класи
*/

// Відповідь до 9 завдання пишемо під цим текстом
/*
const taskNine = document.querySelector('.task-nine');
taskNine.removeAttribute('class');

console.log(taskNine);*/
//Завдання-10
/*
  - Знайти на сторінці елемент з класом task-ten;
  - Зробити фон елемента чорним
  - Зробити колір тексту білим
  - Збільшити розмір шрифта елемента - задати 40px
  - Задати скруглення бордерів - 20px
  - Задати паддінги - 15px
*/

// Відповідь до 10 завдання пишемо під цим текстом
/*
const taskTen = document.querySelector('.task-ten');
taskTen.style.cssText = 
`background-color: black;
color: #ffffff;
font-size: 40px;
border-radius: 20px;
padding-top: 15px;
`
console.log(taskTen);
*/