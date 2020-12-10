/*ИГРОК-крестики сделал первый ход в центр*/

'use strict';

const board = document.querySelector('.board');
const cells = document.querySelectorAll('.board__item');

board.addEventListener('click', function (event) {//один обработчик на весь блок
  let target = event.target; // где был клик?

  /**проверить, свободна ли ячейка*/
  if (target.classList.contains('board__item--player') || target.classList.contains('board__item--pc')) { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    /**Установить стили для кликнутой ячейки */
    markCellPlayer(target);
    //target.classList.add('board__item--player');

    moveCorner(); //ходить в любой угол

    winCheck(0, 1, 2, 3, 4, 5, 6, 7, 8); //проверить выигрыш
  }
});


/*********** */
/**ФУНКЦИИ */

/**функция случайное число в диапазоне */
function rndInt(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}


/**обозначить ячейку хода Player */
function markCellPlayer(cell) {
  cells[cell].classList.add('board__item--player');
}

/**обозначить ячейку хода ПК */
function markCellPC(cell) {
  cells[cell].classList.add('board__item--pc');
}

/**ход ПК в угол*/
function moveCorner() {
  let n = 0;
  while (n < 10) {
    n = rndInt(0, 8);// записать в переменную то, что вернет функция
    if (n == 0 || n == 2 || n == 6 || n == 8) {
      console.log('n = ' + n);
      markCellPC(n);
      break;
    }
  }
}





/**проверка выигыша*/
function winCheck(aa, ab, ac, ba, bb, bc, ca, cb, cc) {
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
