/*ИГРОК-крестики сделал первый ход в центр*/

'use strict';

const board = document.querySelector('.board');
const cells = document.querySelectorAll('.board__item');

/*ИГРОК начал С ЦЕНТРА поля*/


/**ДАЛЬНЕЙШИЕ ВОЗМОЖНЫЕ ХОДЫ ИГРОКА */
cells[0].addEventListener('click', function (event) {
  console.log('*******');
  console.log('******* клик на cells[0]');
  addMainLogic(event); // главная рабочая функция
}, { once: true });

cells[1].addEventListener('click', function (event) {
  console.log('*******');
  console.log('******* клик на cells[1]');
  addMainLogic(event); // главная рабочая функция
}, { once: true });

cells[2].addEventListener('click', function (event) {
  console.log('*******');
  console.log('******* клик на cells[2]');
  addMainLogic(event); // главная рабочая функция
}, { once: true });

cells[3].addEventListener('click', function (e) {
  console.log('*******');
  console.log('******* клик на cells[3]');
  addMainLogic(event); // главная рабочая функция
}, { once: true });

cells[4].addEventListener('click', function (e) {
  console.log('*******');
  console.log('******* клик на cells[4]');
  let target = e.target; // где был клик?

  if (!(target.classList.contains('board__item--player') || target.classList.contains('board__item--pc'))) { //клик на свободной ячейке?
    markCellPlayer(target);// установить стили для кликнутой ячейки
    moveCorner(); // ПК - сделать ход в любой угол
  } else {
    console.log('эта ячейка занята!');
  }
}, { once: true });

cells[5].addEventListener('click', function (e) {
  console.log('*******');
  console.log('******* клик на cells[5]');
  addMainLogic(event); // главная рабочая функция
}, { once: true });

cells[6].addEventListener('click', function (event) {
  console.log('*******');
  console.log('******* клик на cells[6]');
  addMainLogic(event); // главная рабочая функция
}, { once: true });

cells[7].addEventListener('click', function (e) {
  console.log('*******');
  console.log('******* клик на cells[7]');
  addMainLogic(event); // главная рабочая функция
}, { once: true });

cells[8].addEventListener('click', function (event) {
  console.log('*******');
  console.log('******* клик на cells[8]');
  addMainLogic(event); // главная рабочая функция
}, { once: true });


/*********** */
/**ФУНКЦИИ */

/**функция - главной логики для ячейки*/
function addMainLogic(a) {
  let target = a.target; // где был клик?

  if (target.classList.contains('board__item--pc')) {
    // если ячейка занята ПК, ничего не делать
    console.log('addMainLogic(): эта ячейка занята ПК, ничего не делать');
    console.log('addMainLogic(): eventListener на этой ячейке больше не сработает, т.к. у него { once: true }');
  } else {
    console.log('addMainLogic(): эта ячейка свободна, работаю...');
    markCellPlayer(target); // применить стили для ячейки, ход Игрок

    if (checkVictoryPlayer() == true) {//проверить выигрыш Игрок
      return; // если true - выйти из функции
    } else if (checkEmptyCellPC()) { // проверка: заполненены две ячейки в линии ПК - ставить третью, это выигрыш
      checkVictoryPC(); //проверить выигрыш ПК
      return;
    } else if (checkEmptyCellPlayer() == true) {// проверка: заполненены две ячейки в линии Игрок - блокировать линию Игрока
      checkVictoryPC(); //проверить выигрыш ПК
      return;
    }
  }
}

/**функция случайное число в диапазоне, кратное num */
function rndInt(min, max, num) {
  let i = 0;
  while (i < 10) {
    let random = Math.floor(min + Math.random() * (max + 1 - min)); // генерируем числов в диапазоне
    let rem = random % num; // проверка деления без остатка

    if (rem == 0) {
      console.log('rndInt: return random = ' + random);
      return random;
    }
  }
}

/**функция - применить стили для ячейки, ход Игрок*/
function markCellPlayer(a) {
  if (!(a.classList.contains('board__item--player') || a.classList.contains('board__item--pc'))) { //клик на свободной ячейке?
    a.classList.add('board__item--player'); // установить стили для кликнутой ячейки
    console.log('markCellPlayer(): применил стили для ячейки, ход Игрока');
  } else {
    console.log('эта ячейка занята!');
  }
}

/**функция - применить стили для ячейки, ход ПК */
function markCellPC(a) {
  cells[a].classList.add('board__item--pc');
}

/**ход ПК в  СВОБОДНЫЙ угол*/
function moveCorner() {
  console.log('moveCorner(): старт');
  let n = 0;
  while (n < 10) {
    console.log('moveCorner(): обращаюсь к rndInt();');
    n = rndInt(0, 8, 2);// записать в переменную то, что вернет функция
    console.log('moveCorner(): n до условия = ' + n);
    if ((n == 0 || n == 2 || n == 6 || n == 8) && (!(cells[n].classList.contains('board__item--player') || cells[n].classList.contains('board__item--pc')))) { // найден № угла. Проверить, свободен-ли выбранный угол от хода Игрока и хода ПК
      console.log('moveCorner(): n после условия= ' + n);
      console.log('moveCorner(): хожу в угол, ячейка № ' + n);
      console.log('moveCorner(): стоп');
      markCellPC(n);
      break;
    }
  }
}

/**ход ПК в "1/4 креста" - !!!!! ПОКА НЕ ИСПОЛЬЗУЕТСЯ*/
function moveX(cell1, cell2) {
  let n = 0;
  while (n < 10) {
    n = rndInt(0, 6, 2);// записать в переменную то, что вернет функция
    if (n == cell1 || n == cell2) {
      markCellPC(n);
      break;
    }
  }
}

/**проверка -  если у ПК заполненены две ячейки в линии - ставить третью*/
function checkEmptyCellPC() {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  console.log('*********************');
  console.log('checkEmptyCellPC111(): старт - ПК - хочу занять третью (своб-ю) яч.');

  let temp = 0;

  function checkLine(a, b, c) {
    console.log(`checkEmptyCellPC111(): проверяю ${a} - ${b} и ${c}`);

    if (cells[a].classList.contains('board__item--pc') && cells[b].classList.contains('board__item--pc')) {
      cells[c].classList.add('board__item--pc');
      console.log(`checkEmptyCellPC111(): у ПК совпадение линии ${a} - ${b} и ${c}`);
      temp = 1;
      console.log(`temp = ${temp}`);
      return;
    } else {
      console.log(`checkEmptyCellPC111(): совпадений не нашел ${a} - ${b} и ${c}`);
    }
  }

  // проверка горизонтали
  for (let i = 0; i < 3; i++) {
    if (temp == 0) {
      let a = i * 3,
        b = i * 3 + 1,
        c = i * 3 + 2;
      console.log(`цикл: 1-передаю в checkLine() гориз: ${a} - ${b} и ${c}`);
      checkLine(a, b, c);
      console.log(`цикл: 2-передаю в checkLine() гориз: ${a} - ${c} и ${b}`);
      checkLine(a, c, b);
      console.log(`цикл: 3-передаю в checkLine() гориз: ${b} - ${c} и ${a}`);
      checkLine(b, c, a);
    } else { break; }
  }

  // проверка вертикали
  for (let i = 0; i < 3; i++) {
    if (temp == 0) {
      let a = i,
        b = i + 3,
        c = i + 6;
      console.log(`цикл: передаю в checkLine() верт: ${a} - ${b} и ${c}`);
      checkLine(a, b, c);
      console.log(`цикл: 2-передаю в checkLine() верт: ${a} - ${c} и ${b}`);
      checkLine(a, c, b);
      console.log(`цикл: 3-передаю в checkLine() верт: ${b} - ${c} и ${a}`);
      checkLine(b, c, a);
    } else { break; }
  }

  //проверка диагоналей
  if (temp == 0) {
    checkLine(0, 4, 8);
    checkLine(0, 8, 4);
    checkLine(4, 8, 0);
  }
  if (temp == 0) {
    checkLine(6, 4, 2);
    checkLine(6, 2, 4);
    checkLine(4, 2, 6);
  }

  console.log('checkEmptyCellPC111(): конец функции');
  if (temp == 1) { return true; } else { return false; }
}

/**проверка -  если у ИГРОКа заполненены две ячейки в линии - блокировать Игрока в линии*/
function checkEmptyCellPlayer() {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  console.log('*********************');
  console.log('checkEmptyCellPlayer(): старт - хочу блокир.  третью(своб-ю) яч. у ИГРОКА');

  let temp = 0;

  function checkLine(a, b, c) {
    console.log(`checkEmptyCellPlayer: начал проверку ${a} - ${b} - ${c}`);

    if (cells[a].classList.contains('board__item--player') && cells[b].classList.contains('board__item--player')) {
      console.log(`checkEmptyCellPlayer(): нашел совпадение - у Игрока две занятые ячейки в линии ${a} - ${b} - ${c}`);
      if (cells[c].classList.contains('board__item--pc')) {
        //если третья в линии занято ПК, тогда ходить в угол
        console.log(`checkEmptyCellPlayer(): третья в линии ${a} - ${b} - ${c} - уже занято ПК, поэтому хожу в угол`);
        moveCorner(); // ход в угол
        temp = 1;
        console.log(`temp = ${temp}`);
        return;
      } else {
        console.log('checkEmptyCellPlayer: блокирую линию Игрока');
        cells[c].classList.add('board__item--pc'); // блокировать линию Игрока
        temp = 1;
        console.log(`temp = ${temp}`);
        return;
      }
    }
  }

  // проверка горизонтали
  for (let i = 0; i < 3; i++) {
    if (temp == 0) {
      let a = i * 3,
        b = i * 3 + 1,
        c = i * 3 + 2;
      console.log(`1-передаю в checkLine(): ${a} - ${b} - ${c}`);
      checkLine(a, b, c);
      console.log(`2-передаю в checkLine(): ${a} - ${c} - ${b}`);
      checkLine(a, c, b);
      console.log(`3-передаю в checkLine(): ${b} - ${c} - ${a}`);
      checkLine(b, c, a);
    } else { break; }
  }

  // проверка вертикали
  for (let i = 0; i < 3; i++) {
    if (temp == 0) {
      let a = i,
        b = i + 3,
        c = i + 6;
      console.log(`передаю в checkLine(): ${a} - ${b} - ${c}`);
      checkLine(a, b, c);
      console.log(`2-передаю в checkLine(): ${a} - ${c} - ${b}`);
      checkLine(a, c, b);
      console.log(`3-передаю в checkLine(): ${b} - ${c} - ${a}`);
      checkLine(b, c, a);
    } else { break; }
  }

  //проверка диагоналей
  if (temp == 0) {
    checkLine(0, 4, 8);
    checkLine(0, 8, 4);
    checkLine(4, 8, 0);
  }
  if (temp == 0) {
    checkLine(6, 4, 2);
    checkLine(6, 2, 4);
    checkLine(4, 2, 6);
  }

  console.log('checkEmptyCellPlayer(): конец функции');
  if (temp == 1) { return true; } else { return false; }
}

/**проверка выигыша Игрок*/
function checkVictoryPlayer() {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  console.log('*********************');
  console.log('checkVictoryPlayer: старт');

  let temp = 0;

  function checkLine(a1, a2, a3) {
    console.log(`checkVictoryPlayer: начал проверку ${a1} - ${a2} - ${a3}`);
    if (cells[a1].classList.contains('board__item--player') && cells[a2].classList.contains('board__item--player') && cells[a3].classList.contains('board__item--player')) {
      cells[a1].classList.add('board__item--winning');
      cells[a2].classList.add('board__item--winning');
      cells[a3].classList.add('board__item--winning');
      console.log(`checkVictoryPlayer: выигрыш ИГРОК в линии ${a1} - ${a2} - ${a3}`);
      temp = 1;
      console.log(`temp = ${temp}`);
      return;
    } else {
      console.log(`checkVictoryPlayer: в линии ${a1} - ${a2} - ${a3} - нет совпадений`);
      console.log(`temp = ${temp}`);
      return temp; // 0
    }
  }

  // проверка горизонтали
  for (let i = 0; i < 3; i++) {
    if (temp == 0) {
      console.log(`передаю в checkLine(): ${i * 3} - ${(i * 3 + 1)} - ${(i * 3 + 2)}`);
      checkLine(i * 3, (i * 3 + 1), (i * 3 + 2));
    } else { break; }
  }

  // проверка вертикали
  for (let i = 0; i < 3; i++) {
    if (temp == 0) {
      console.log(`передаю в checkLine(): ${i} - ${(i + 3)} - ${(i + 6)}`);
      checkLine(i, (i + 3), (i + 6));
    } else { break; }
  }

  //проверка диагоналей
  if (temp == 0) { checkLine(0, 4, 8); }
  if (temp == 0) { checkLine(6, 4, 2); }

  console.log('checkVictoryPlayer: стоп');

  if (temp == 1) { return true; } else { return false; }
}

/**проверка выигыша ПК*/
function checkVictoryPC() {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  console.log('*********************');
  console.log('checkVictoryPC(): старт');

  let temp = 0;

  function checkLine(a1, a2, a3) {
    console.log(`checkVictoryPC: начал проверку ${a1} - ${a2} - ${a3}`);
    if (cells[a1].classList.contains('board__item--pc') && cells[a2].classList.contains('board__item--pc') && cells[a3].classList.contains('board__item--pc')) {
      cells[a1].classList.add('board__item--winning');
      cells[a2].classList.add('board__item--winning');
      cells[a3].classList.add('board__item--winning');
      console.log(`checkVictoryPC: выигрыш ПК в линии ${a1} - ${a2} - ${a3}`);
      temp = 1;
      console.log(`temp = ${temp}`);
      return;
    } else {
      console.log(`checkVictoryPC: в линии ${a1} - ${a2} - ${a3} - нет совпадений`);
      console.log(`temp = ${temp}`);
      return temp; // 0
    }
  }

  // проверка горизонтали
  for (let i = 0; i < 3; i++) {
    if (temp == 0) {
      console.log(`передаю в checkLine(): ${i * 3} - ${(i * 3 + 1)} - ${(i * 3 + 2)}`);
      checkLine(i * 3, (i * 3 + 1), (i * 3 + 2));
    } else { break; }
  }

  // проверка вертикали
  for (let i = 0; i < 3; i++) {
    if (temp == 0) {
      console.log(`передаю в checkLine(): ${i} - ${(i + 3)} - ${(i + 6)}`);
      checkLine(i, (i + 3), (i + 6));
    } else { break; }
  }

  //проверка диагоналей
  if (temp == 0) { checkLine(0, 4, 8); }
  if (temp == 0) { checkLine(6, 4, 2); }

  console.log('checkVictoryPC(): стоп');
}
