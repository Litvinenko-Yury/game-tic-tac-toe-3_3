/*ИГРОК-крестики сделал первый ход в центр*/

'use strict';

const board = document.querySelector('.board');
const cells = document.querySelectorAll('.board__item');

/*ИГРОК начал С ЦЕНТРА поля*/
cells[4].addEventListener('click', function (e) {
  console.log('клик на cells[4]');
  let target = e.target; // где был клик?

  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */

    moveCorner(); //сделать ход в любой угол
  }
}, { once: true });

/**ДАЛЬНЕЙШИЕ ВОЗМОЖНЫЕ ХОДЫ ИГРОКА */
cells[0].addEventListener('click', function (e) {
  console.log('клик на cells[0]');
  let target = e.target; // где был клик?
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */
  }

  if (checkEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у ПК две в ряд, ставлю третью');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } else if (checkEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у Игрока две в ряд, блокирую');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } /* else if (cells[8].classList.contains('board__item--player') || cells[8].classList.contains('board__item--pc')) { // если угол занят,
    moveX(1, 3);//тогда ходить в 1 или 3
  } else {
    cells[8].classList.add('board__item--pc'); // ход ПК в 8
  } */

  checkWinPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш Игрок
  checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
});

cells[1].addEventListener('click', function (e) {
  console.log('клик на cells[1]');
  let target = e.target; // где был клик?
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */
  }

  if (checkEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у ПК две в ряд, ставлю третью');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } else if (checkEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у Игрока две в ряд, блокирую');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } /* else {
    cells[7].classList.add('board__item--pc');
  } */

  checkWinPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш Игрок
  checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
});

cells[2].addEventListener('click', function (e) {
  console.log('клик на cells[2]');
  let target = e.target; // где был клик?
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */
  }

  if (checkEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у ПК две в ряд, ставлю третью');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } else if (checkEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у Игрока две в ряд, блокирую');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } /* else if (cells[6].classList.contains('board__item--player') || cells[6].classList.contains('board__item--pc')) { // если угол занят,
    moveX(1, 5);//тогда ходить в 1 или 5
  } else {
    cells[6].classList.add('board__item--pc'); // ход ПК в 6
  } */

  checkWinPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш Игрок
  checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
});

cells[3].addEventListener('click', function (e) {
  console.log('клик на cells[3]');
  let target = e.target; // где был клик?
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */
  }

  if (checkEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у ПК две в ряд, ставлю третью');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } else if (checkEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у Игрока две в ряд, блокирую');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } /* else {
    cells[5].classList.add('board__item--pc');
  } */

  checkWinPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш Игрок
  checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
});

cells[5].addEventListener('click', function (e) {
  console.log('клик на cells[5]');
  let target = e.target; // где был клик?
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */
  }

  if (checkEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у ПК две в ряд, ставлю третью');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } else if (checkEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у Игрока две в ряд, блокирую');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } /* else if (cells[7].classList.contains('board__item--player') || cells[7].classList.contains('board__item--pc')) {
    moveX(2, 3);//тогда ходить в 2 или 3
  } else {
    cells[7].classList.add('board__item--pc'); // ход ПК в 6
  } */

  checkWinPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш Игрок
  checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
});

cells[6].addEventListener('click', function (e) {
  console.log('клик на cells[6]');
  let target = e.target; // где был клик?
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */
  }

  if (checkEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у ПК две в ряд, ставлю третью');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } else if (checkEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у Игрока две в ряд, блокирую');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } /* else if (cells[2].classList.contains('board__item--player') || cells[2].classList.contains('board__item--pc')) {
    moveX(3, 7);
  } else {
    cells[2].classList.add('board__item--pc'); // ход ПК в 6?????????????? а нужно ходить в 7!!!!!!!!!!!
  } */

  checkWinPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш Игрок
  checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
});

cells[7].addEventListener('click', function (e) {
  console.log('клик на cells[7]');
  let target = e.target; // где был клик?
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */
  }

  if (checkEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у ПК две в ряд, ставлю третью');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } else if (checkEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у Игрока две в ряд, блокирую');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } /* else {
    cells[1].classList.add('board__item--pc');
  } */

  checkWinPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш Игрок
  checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
});

cells[8].addEventListener('click', function (e) {
  console.log('клик на cells[8]');
  let target = e.target; // где был клик?
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    target.classList.add('board__item--player'); // установить стили для кликнутой ячейки */
  }

  if (checkEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у ПК две в ряд, ставлю третью');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } else if (checkEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {
    console.log('нашел у Игрока две в ряд, блокирую');
    checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
  } /* else if (cells[0].classList.contains('board__item--player') || cells[0].classList.contains('board__item--pc')) {
    moveX(5, 7);
  } else {
    cells[0].classList.add('board__item--pc'); // ход ПК в 0
  } */

  checkWinPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш Игрок
  checkWinPC(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
});


/*********** */
/**ФУНКЦИИ */

/**функция случайное число в диапазоне */
function rndInt(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

/**пометить ячейку, ход Игрок */
function markCellPlayer(a) {
  //cells[a].classList.add('board__item--pc');
}

/**пометить ячейку, ход ПК */
function markCellPC(a) {
  cells[a].classList.add('board__item--pc');
}

/**ход ПК в  СВОБОДНЫЙ угол*/
function moveCorner() {
  let n = 0;
  while (n < 10) {
    n = rndInt(0, 8);// записать в переменную то, что вернет функция
    console.log('n до условия = ' + n);
    if (n == 0 || n == 2 || n == 6 || n == 8) { // найден № угла
      if (!cells[n].classList.contains('board__item--player') || !cells[n].classList.contains('board__item--pc')) { //проверка, свободен-ли угол
        console.log('n после = ' + n);
        markCellPC(n);
        break;
      }
    }
  }
}

/**ход ПК в "1/4 креста"*/
function moveX(cell1, cell2) {
  let n = 0;
  while (n < 10) {
    n = rndInt(0, 6);// записать в переменную то, что вернет функция
    if (n == cell1 || n == cell2) {
      markCellPC(n);
      break;
    }
  }
}

/**проверка -  если у ПК заполненены две ячейки в линии - ставить третью*/
function checkEmptyCellPC(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  //1-я горизонталь
  if (cells[aa].classList.contains('board__item--pc') && cells[ab].classList.contains('board__item--pc')) {
    cells[ac].classList.add('board__item--pc');
    return true;
  }
  if (cells[aa].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
    cells[ab].classList.add('board__item--pc');
    return true;
  }
  if (cells[ab].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
    cells[aa].classList.add('board__item--pc');
    return true;
  }

  //2-я горизонталь
  if (cells[ba].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc')) {
    cells[bc].classList.add('board__item--pc');
    return true;
  }
  if (cells[ba].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc')) {
    cells[bb].classList.add('board__item--pc');
    return true;
  }
  if (cells[bb].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc')) {
    cells[ba].classList.add('board__item--pc');
    return true;
  }

  //3-я горизонталь
  if (cells[ca].classList.contains('board__item--pc') && cells[cb].classList.contains('board__item--pc')) {
    cells[cc].classList.add('board__item--pc');
    return true;
  }
  if (cells[ca].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[cb].classList.add('board__item--pc');
    return true;
  }
  if (cells[cb].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[ca].classList.add('board__item--pc');
    return true;
  }

  //1-я вертикаль
  if (cells[aa].classList.contains('board__item--pc') && cells[ba].classList.contains('board__item--pc')) {
    cells[ca].classList.add('board__item--pc');
    return true;
  }
  if (cells[aa].classList.contains('board__item--pc') && cells[ca].classList.contains('board__item--pc')) {
    cells[ba].classList.add('board__item--pc');
    return true;
  }
  if (cells[ba].classList.contains('board__item--pc') && cells[ca].classList.contains('board__item--pc')) {
    cells[aa].classList.add('board__item--pc');
    return true;
  }

  //2-я вертикаль
  if (cells[ab].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc')) {
    cells[cb].classList.add('board__item--pc');
    return true;
  }
  if (cells[ab].classList.contains('board__item--pc') && cells[cb].classList.contains('board__item--pc')) {
    cells[bb].classList.add('board__item--pc');
    return true;
  }
  if (cells[bb].classList.contains('board__item--pc') && cells[cb].classList.contains('board__item--pc')) {
    cells[ab].classList.add('board__item--pc');
    return true;
  }

  //3-я вертикаль
  if (cells[ac].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc')) {
    cells[cc].classList.add('board__item--pc');
    return true;
  }
  if (cells[ac].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[bc].classList.add('board__item--pc');
    return true;
  }
  if (cells[bc].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[ac].classList.add('board__item--pc');
    return true;
  }

  //1-я диагональ
  if (cells[aa].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc')) {
    cells[cc].classList.add('board__item--pc');
    return true;
  }
  if (cells[aa].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[bb].classList.add('board__item--pc');
    return true;
  }
  if (cells[bb].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[aa].classList.add('board__item--pc');
    return true;
  }

  //2-я диагональ
  if (cells[ca].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc')) {
    cells[ac].classList.add('board__item--pc');
    return true;
  }
  if (cells[ca].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
    cells[bb].classList.add('board__item--pc');
    return true;
  }
  if (cells[bb].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
    cells[ca].classList.add('board__item--pc');
    return true;
  }
}

/**проверка -  если у ИГРОК заполненены две ячейки в линии - блокировать третью*/
function checkEmptyCellPlayer(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  //1-я горизонталь
  if (cells[ac].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ac] - занят, нужно ходить в другую ячейку, в угол');
    moveCorner();
    return;
  } else if (cells[aa].classList.contains('board__item--player') && cells[ab].classList.contains('board__item--player')) {
    cells[ac].classList.add('board__item--pc');
    return true;
  }
  if (cells[ab].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ab] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[aa].classList.contains('board__item--player') && cells[ac].classList.contains('board__item--player')) {
    cells[ab].classList.add('board__item--pc');
    return true;
  }
  if (cells[aa].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [aa] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ab].classList.contains('board__item--player') && cells[ac].classList.contains('board__item--player')) {
    cells[aa].classList.add('board__item--pc');
    return true;
  }

  //2-я горизонталь
  if (cells[bc].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [bc] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ba].classList.contains('board__item--player') && cells[bb].classList.contains('board__item--player')) {
    cells[bc].classList.add('board__item--pc');
    return true;
  }
  if (cells[bb].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [bb] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ba].classList.contains('board__item--player') && cells[bc].classList.contains('board__item--player')) {
    cells[bb].classList.add('board__item--pc');
    return true;
  }
  if (cells[ba].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ba] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[bb].classList.contains('board__item--player') && cells[bc].classList.contains('board__item--player')) {
    cells[ba].classList.add('board__item--pc');
    return true;
  }

  //3-я горизонталь
  if (cells[cc].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [cc] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ca].classList.contains('board__item--player') && cells[cb].classList.contains('board__item--player')) {
    cells[cc].classList.add('board__item--pc');
    return true;
  }
  if (cells[cb].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [cb] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ca].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[cb].classList.add('board__item--pc');
    return true;
  }
  if (cells[ca].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ca] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[cb].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[ca].classList.add('board__item--pc');
    return true;
  }

  //1-я вертикаль
  if (cells[ca].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ca] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[aa].classList.contains('board__item--player') && cells[ba].classList.contains('board__item--player')) {
    cells[ca].classList.add('board__item--pc');
    return true;
  }
  if (cells[ba].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ba] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[aa].classList.contains('board__item--player') && cells[ca].classList.contains('board__item--player')) {
    cells[ba].classList.add('board__item--pc');
    return true;
  }
  if (cells[aa].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [aa] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ba].classList.contains('board__item--player') && cells[ca].classList.contains('board__item--player')) {
    cells[aa].classList.add('board__item--pc');
    return true;
  }

  //2-я вертикаль
  if (cells[cb].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [cb] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ab].classList.contains('board__item--player') && cells[bb].classList.contains('board__item--player')) {
    cells[cb].classList.add('board__item--pc');
    return true;
  }
  if (cells[bb].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [bb] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ab].classList.contains('board__item--player') && cells[cb].classList.contains('board__item--player')) {
    cells[bb].classList.add('board__item--pc');
    return true;
  }
  if (cells[ab].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ab] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[bb].classList.contains('board__item--player') && cells[cb].classList.contains('board__item--player')) {
    cells[ab].classList.add('board__item--pc');
    return true;
  }

  //3-я вертикаль
  if (cells[cc].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [cc] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ac].classList.contains('board__item--player') && cells[bc].classList.contains('board__item--player')) {
    cells[cc].classList.add('board__item--pc');
    return true;
  }
  if (cells[bc].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [bc] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ac].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[bc].classList.add('board__item--pc');
    return true;
  }
  if (cells[ac].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ac] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[bc].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[ac].classList.add('board__item--pc');
    return true;
  }


  //1-я диагональ
  if (cells[cc].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [cc] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[aa].classList.contains('board__item--player') && cells[bb].classList.contains('board__item--player')) {
    cells[cc].classList.add('board__item--pc');
    return true;
  }

  if (cells[bb].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [bb] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[aa].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[bb].classList.add('board__item--pc');
    return true;
  }

  if (cells[aa].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [aa] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[bb].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[aa].classList.add('board__item--pc');
    return true;
  }

  //2-я диагональ
  if (cells[ac].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ac] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ca].classList.contains('board__item--player') && cells[bb].classList.contains('board__item--player')) {
    cells[ac].classList.add('board__item--pc');
    return true;
  }

  if (cells[bb].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [bb] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[ca].classList.contains('board__item--player') && cells[ac].classList.contains('board__item--player')) {
    cells[bb].classList.add('board__item--player');
    return true;
  }

  if (cells[ca].classList.contains('board__item--pc')) {
    console.log('игрок олень, но ничего не поделать: [ca] - занят, нужно ходить в другую ячейку');
    moveCorner();
    return;
  } else if (cells[bb].classList.contains('board__item--player') && cells[ac].classList.contains('board__item--player')) {
    cells[ca].classList.add('board__item--pc');
    return true;
  }
}

/**проверка выигыша Игрок*/
function checkWinPlayer(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  //1-я горизонталь
  if (cells[aa].classList.contains('board__item--player') && cells[ab].classList.contains('board__item--player') && cells[ac].classList.contains('board__item--player')) {
    cells[aa].classList.add('board__item--winning');
    cells[ab].classList.add('board__item--winning');
    cells[ac].classList.add('board__item--winning');
  }

  //2-я горизонталь
  if (cells[ba].classList.contains('board__item--player') && cells[bb].classList.contains('board__item--player') && cells[bc].classList.contains('board__item--player')) {
    cells[ba].classList.add('board__item--winning');
    cells[bb].classList.add('board__item--winning');
    cells[bc].classList.add('board__item--winning');
  }

  //3-я горизонталь
  if (cells[ca].classList.contains('board__item--player') && cells[cb].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[ca].classList.add('board__item--winning');
    cells[cb].classList.add('board__item--winning');
    cells[cc].classList.add('board__item--winning');
  }

  //1-я вертикаль
  if (cells[aa].classList.contains('board__item--player') && cells[ba].classList.contains('board__item--player') && cells[ca].classList.contains('board__item--player')) {
    cells[aa].classList.add('board__item--winning');
    cells[ba].classList.add('board__item--winning');
    cells[ca].classList.add('board__item--winning');
  }

  //2-я вертикаль
  if (cells[ab].classList.contains('board__item--player') && cells[bb].classList.contains('board__item--player') && cells[cb].classList.contains('board__item--player')) {
    cells[ab].classList.add('board__item--winning');
    cells[bb].classList.add('board__item--winning');
    cells[cb].classList.add('board__item--winning');
  }

  //3-я вертикаль
  if (cells[ac].classList.contains('board__item--player') && cells[bc].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[ac].classList.add('board__item--winning');
    cells[bc].classList.add('board__item--winning');
    cells[cc].classList.add('board__item--winning');
  }

  //1-я диагональ
  if (cells[aa].classList.contains('board__item--player') && cells[bb].classList.contains('board__item--player') && cells[cc].classList.contains('board__item--player')) {
    cells[aa].classList.add('board__item--winning');
    cells[bb].classList.add('board__item--winning');
    cells[cc].classList.add('board__item--winning');
  }

  //2-я диагональ
  if (cells[ca].classList.contains('board__item--player') && cells[bb].classList.contains('board__item--player') && cells[ac].classList.contains('board__item--player')) {
    cells[ca].classList.add('board__item--winning');
    cells[bb].classList.add('board__item--winning');
    cells[ac].classList.add('board__item--winning');
  }
}

/**проверка выигыша ПК*/
function checkWinPC(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  //1-я горизонталь
  console.log('начинается условие 1-я горизонталь');
  if (cells[aa].classList.contains('board__item--pc') && cells[ab].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
    console.log('условие true');
    cells[aa].classList.add('board__item--winning');
    cells[ab].classList.add('board__item--winning');
    cells[ac].classList.add('board__item--winning');
  }

  //2-я горизонталь
  if (cells[ba].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc')) {
    cells[ba].classList.add('board__item--winning');
    cells[bb].classList.add('board__item--winning');
    cells[bc].classList.add('board__item--winning');
  }

  //3-я горизонталь
  console.log('начинается условие 3-я горизонталь');
  if (cells[ca].classList.contains('board__item--pc') && cells[cb].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    console.log('условие true');
    cells[ca].classList.add('board__item--winning');
    cells[cb].classList.add('board__item--winning');
    cells[cc].classList.add('board__item--winning');
  }

  //1-я вертикаль
  if (cells[aa].classList.contains('board__item--pc') && cells[ba].classList.contains('board__item--pc') && cells[ca].classList.contains('board__item--pc')) {
    cells[aa].classList.add('board__item--winning');
    cells[ba].classList.add('board__item--winning');
    cells[ca].classList.add('board__item--winning');
  }

  //2-я вертикаль
  if (cells[ab].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc') && cells[cb].classList.contains('board__item--pc')) {
    cells[ab].classList.add('board__item--winning');
    cells[bb].classList.add('board__item--winning');
    cells[cb].classList.add('board__item--winning');
  }

  //3-я вертикаль
  if (cells[ac].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[ac].classList.add('board__item--winning');
    cells[bc].classList.add('board__item--winning');
    cells[cc].classList.add('board__item--winning');
  }

  //1-я диагональ
  if (cells[aa].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[aa].classList.add('board__item--winning');
    cells[bb].classList.add('board__item--winning');
    cells[cc].classList.add('board__item--winning');
  }

  //2-я диагональ
  if (cells[ca].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
    cells[ca].classList.add('board__item--winning');
    cells[bb].classList.add('board__item--winning');
    cells[ac].classList.add('board__item--winning');
  }
}
