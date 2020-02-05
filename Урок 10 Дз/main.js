"use strict";

const books = document.querySelectorAll('.books');
const book2 = document.querySelectorAll('.book')[0];
const book1 = document.querySelectorAll('.book')[1];
const book6 = document.querySelectorAll('.book')[2];
const book4 = document.querySelectorAll('.book')[3];
const book3 = document.querySelectorAll('.book')[4];
const book5 = document.querySelectorAll('.book')[5];

const book3Name = document.querySelectorAll('a')[4];

const deletAdvertising = document.querySelector('.adv');

const list2 = document.querySelectorAll('ul')[0];
const list5 = document.querySelectorAll('ul')[5];
const list6 = document.querySelectorAll('ul')[2];

const replacementBlock = () => {
   books[0].insertBefore(books[0].children[1], books[0].children[0]);
   books[0].insertBefore(books[0].children[4], books[0].children[2]);
   books[0].insertBefore(books[0].children[3], null);
};

const replacementLi = () => {
    list2.insertBefore(list2.children[2], null);
    list2.insertBefore(list2.children[5], list2.children[3]);
    list2.insertBefore(list2.children[7], list2.children[4]);

    list5.insertBefore(list5.children[9], list5.children[2]);
    list5.insertBefore(list5.children[4], list5.children[3]);
    list5.insertBefore(list5.children[5], list5.children[4]);
    list5.insertBefore(list5.children[6], list5.children[9]);

    list6.insertAdjacentHTML('beforeEnd', '<li>Глава 8: За пределами ES6</li>');
    list6.insertBefore(list6.children[10], list6.children[9]);
};

replacementBlock();//Меняю местами блоки

book3Name.innerText = `Книга 3. this и Прототипы Объектов`;//Меня заголовок в 3 книге

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";//Меняю фон

deletAdvertising.style.display = 'none';//Убираю рекламу

replacementLi();


