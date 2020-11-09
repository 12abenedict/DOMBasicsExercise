
// 1
const portillos = document.getElementById('#portillos');
// 2
const images = document.getElementsByTagName('img');
// 3
const centered = document.getElementsByClassName('.center');
// 4
const ginosEast = document.querySelector('div');
// 5
const pTags = document.querySelectorAll('p');

// 6a
const h1 = document.querySelector('h1');
// 6b
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;
// 7a
const  others = document.querySelector('#others');
// 7b
others.innerHTML = `<h3>Other Favorites</h3>`;
// 8a
const a = document.querySelector('a');
// 8b
a.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;
// 9
h1.classList.add(`background`, `text-color`);
// 10
h1.classList.remove(`background`);
// 11a
const h4 = document.createElement('h4');
// 11b
h4.innerText = "CHICAGO: A great place to eat!";
// 11c
const body = document.querySelectorAll('body');
h4.prepend(body);
// 12a
const h5 = document.createElement('h5');
// 12b
h5.innerText = `See You In The  Windy City Sometme!`;
// 12c
h5.insertAdjacentElement(`beforeend`, a);
// 13
const li = document.querySelector(`li`);
li.remove();


// BONUS
// 14a
const divs = document.querySelectorAll(`div`);
// 14b
divs.classList.toggle(`background`);

