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

    if (checkVictoryPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {//проверить выигрыш Игрок
      return; // если true - выйти из функции
    } else if (checkLastEmptyCellPC(0, 1, 2, 3, 4, 5, 6, 7, 8)) { // проверка: заполненены две ячейки в линии ПК - ставить третью, это выигрыш
      //checkVictoryPC111(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
      checkVictoryPC(); //проверить выигрыш ПК
      return;
    } else if (checkLastEmptyCellPlayer(0, 1, 2, 3, 4, 5, 6, 7, 8)) {// проверка: заполненены две ячейки в линии Игрок - блокировать линию Игрока
      //checkVictoryPC111(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш ПК
      checkVictoryPC(); //проверить выигрыш ПК
      return;
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
function checkLastEmptyCellPC(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  console.log('checkLastEmptyCellPC(): старт - хочу занять третью(своб-ю) яч.');

  //1-я горизонталь
  if (cells[aa].classList.contains('board__item--pc') && cells[ab].classList.contains('board__item--pc')) {
    cells[ac].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${aa}-${ab}`);
    return true;
  }
  if (cells[aa].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
    cells[ab].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${aa}-${ac}`);
    return true;
  }
  if (cells[ab].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
    cells[aa].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${ab}-${ac}`);
    return true;
  }

  //2-я горизонталь
  if (cells[ba].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc')) {
    cells[bc].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${ba}-${bb}`);
    return true;
  }
  if (cells[ba].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc')) {
    cells[bb].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${ba}-${bc}`);
    return true;
  }
  if (cells[bb].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc')) {
    cells[ba].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${bb}-${bc}`);
    return true;
  }

  //3-я горизонталь
  if (cells[ca].classList.contains('board__item--pc') && cells[cb].classList.contains('board__item--pc')) {
    cells[cc].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${ca}-${cb}`);
    return true;
  }
  if (cells[ca].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[cb].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${ca}-${cc}`);
    return true;
  }
  if (cells[cb].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[ca].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${cb}-${cc}`);
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

  console.log('checkLastEmptyCellPC(): конец функции');
}

/**ТЕСТ - проверка -  если у ПК заполненены две ячейки в линии - ставить третью*/
function checkLastEmptyCellPC111111(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  console.log('checkLastEmptyCellPC(): старт - хочу занять третью(своб-ю) яч.');

  function checkL(a1, a2, a3) {
    if (cells[a1].classList.contains('board__item--pc') && cells[a2].classList.contains('board__item--pc')) {
      cells[a3].classList.add('board__item--pc');
      console.log(`checkLastEmptyCellPC(): checkL: совпадение в ${aa}-${ab}`);
    }
  }
  //1-я горизонталь
  // if (cells[aa].classList.contains('board__item--pc') && cells[ab].classList.contains('board__item--pc')) {
  //   cells[ac].classList.add('board__item--pc');
  //   console.log(`checkLastEmptyCellPC(): совпадение в ${aa}-${ab}`);
  //   return true;
  // }
  // if (cells[aa].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
  //   cells[ab].classList.add('board__item--pc');
  //   console.log(`checkLastEmptyCellPC(): совпадение в ${aa}-${ac}`);
  //   return true;
  // }
  // if (cells[ab].classList.contains('board__item--pc') && cells[ac].classList.contains('board__item--pc')) {
  //   cells[aa].classList.add('board__item--pc');
  //   console.log(`checkLastEmptyCellPC(): совпадение в ${ab}-${ac}`);
  //   return true;
  // }

  //1-я горизонталь
  checkL(aa, ab, ac);
  checkL(aa, ac, ab);
  checkL(ab, ac, aa);

  //2-я горизонталь
  /*   if (cells[ba].classList.contains('board__item--pc') && cells[bb].classList.contains('board__item--pc')) {
      cells[bc].classList.add('board__item--pc');
      console.log(`checkLastEmptyCellPC(): совпадение в ${ba}-${bb}`);
      return true;
    }
    if (cells[ba].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc')) {
      cells[bb].classList.add('board__item--pc');
      console.log(`checkLastEmptyCellPC(): совпадение в ${ba}-${bc}`);
      return true;
    }
    if (cells[bb].classList.contains('board__item--pc') && cells[bc].classList.contains('board__item--pc')) {
      cells[ba].classList.add('board__item--pc');
      console.log(`checkLastEmptyCellPC(): совпадение в ${bb}-${bc}`);
      return true;
    } */

  //3-я горизонталь
  /* if (cells[ca].classList.contains('board__item--pc') && cells[cb].classList.contains('board__item--pc')) {
    cells[cc].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${ca}-${cb}`);
    return true;
  }
  if (cells[ca].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[cb].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${ca}-${cc}`);
    return true;
  }
  if (cells[cb].classList.contains('board__item--pc') && cells[cc].classList.contains('board__item--pc')) {
    cells[ca].classList.add('board__item--pc');
    console.log(`checkLastEmptyCellPC(): совпадение в ${cb}-${cc}`);
    return true;
  } */

  //3-я горизонталь
  checkL(ca, cb, cc);
  checkL(ca, cc, cb);
  checkL(cb, cc, ca);

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

  console.log('checkLastEmptyCellPC(): конец функции');
}

/**проверка -  если у ИГРОКа заполненены две ячейки в линии - блокировать Игрока в линии*/
function checkLastEmptyCellPlayer(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  console.log('checkLastEmptyCellPlayer(): старт - хочу блок-ть третью(своб-ю) яч.');

  function checkLine(a1, a2, a3) {
    if (cells[a1].classList.contains('board__item--player') && cells[a2].classList.contains('board__item--player')) {
      console.log(`checkLastEmptyCellPlayer(): нашел совпадение - у Игрока две занятые ячейки в линии ${a1} - ${a2} - ${a3}`);
      if (cells[a3].classList.contains('board__item--pc')) {
        //если третья в линии занято ПК, тогда ходить в угол
        console.log(`checkLastEmptyCellPlayer(): третья в линии ${a1} - ${a2} - ${a3} - уже занято ПК, поэтому хожу в угол`);
        moveCorner();
      } else {
        console.log('checkLastEmptyCellPlayer: блокирую линию Игрока');
        cells[a3].classList.add('board__item--pc'); // блокировать линию Игрока
      }
    }
  }

  //1-я горизонталь
  checkLine(aa, ab, ac);
  checkLine(aa, ac, ab);
  checkLine(ab, ac, aa);

  //2-я горизонталь
  checkLine(ba, bb, bc);
  checkLine(ba, bc, bb);
  checkLine(bb, bc, ba);

  //3-я горизонталь
  checkLine(ca, cb, cc);
  checkLine(ca, cc, cb);
  checkLine(cb, cc, ca);

  //1-я вертикаль
  checkLine(aa, ba, ca);
  checkLine(aa, ca, ba);
  checkLine(ba, ca, aa);

  //2-я вертикаль
  checkLine(ab, bb, cb);
  checkLine(ab, cb, bb);
  checkLine(bb, cb, ab);

  //3-я вертикаль
  checkLine(ac, bc, cc);
  checkLine(ac, cc, bc);
  checkLine(bc, cc, ac);

  //1-я диагональ
  checkLine(aa, bb, cc);
  checkLine(aa, cc, bb);
  checkLine(bb, cc, aa);

  //2-я диагональ
  checkLine(ca, bb, ac);
  checkLine(ca, ac, bb);
  checkLine(bb, ac, ca);

  console.log('checkLastEmptyCellPlayer(): конец функции');
}

/**проверка выигыша Игрок*/
function checkVictoryPlayer(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

  console.log('checkVictoryPlayer: старт');

  function checkLine(a1, a2, a3) {
    if (cells[a1].classList.contains('board__item--player') && cells[a2].classList.contains('board__item--player') && cells[a3].classList.contains('board__item--player')) {
      cells[aa].classList.add('board__item--winning');
      cells[ab].classList.add('board__item--winning');
      cells[ac].classList.add('board__item--winning');
      console.log(`checkVictoryPC: выигрыш ИГРОК в линии ${a1} - ${a2} - ${a3}`);
      return;
    }
  }

  //1-я горизонталь
  checkLine(aa, ab, ac); //0-1-2
  checkLine(aa, ac, ab); //0-2-1
  checkLine(ab, ac, aa); //1-2-0

  //2-я горизонталь
  checkLine(ba, bb, bc);
  checkLine(ba, bc, bb);
  checkLine(bb, bc, ba);

  //3-я горизонталь
  checkLine(ca, cb, cc);
  checkLine(ca, cc, cb);
  checkLine(cb, cc, ca);

  //1-я вертикаль
  checkLine(aa, ba, ca);
  checkLine(aa, ca, ba);
  checkLine(ba, ca, aa);

  //2-я вертикаль
  checkLine(ab, bb, cb);
  checkLine(ab, cb, bb);
  checkLine(bb, cb, ab);

  //3-я вертикаль
  checkLine(ac, bc, cc);
  checkLine(ac, cc, bc);
  checkLine(bc, cc, ac);

  //1-я диагональ
  checkLine(aa, bb, cc);
  checkLine(aa, cc, bb);
  checkLine(bb, cc, aa);

  //2-я диагональ
  checkLine(ca, bb, ac);
  checkLine(ca, ac, bb);
  checkLine(bb, ac, ca);

  console.log('checkVictoryPlayer: стоп');
}

/**проверка выигыша ПК*/
function checkVictoryPC() {
  //условная матрица ячеек
  //[aa, ab, ac]
  //[ba, bb, bc]
  //[ca, cb, cc]

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
