'use strict';

const board = document.querySelector('.board');
const cells = document.querySelectorAll('.board__item');

board.addEventListener('click', function (event) {//один обработчик на весь блок
  let target = event.target; // где был клик?

  /**проверить, свободна ли ячейка*/
  if (target.dataset.field == 'pc' || target.dataset.field == 'player') { //клик на свободной ячейке?
    console.log('эта ячейка занята!');
  } else {
    /**Установить стили для кликнутой ячейки */
    target.dataset.field = 'player';
    target.classList.add('board__item--active-player');


    /**************** */
    /** ПЕРВЫЙ ХОД ИГРОКА*/
    /**Если крестики сделали первый ход в центр:*/
    if (cells[4].dataset.field === 'player') {
      cells[2].dataset.field = 'pc';
      cells[2].classList.add('board__item--active-pc');
    }

    /**Если крестики сделали первый ход в угол:*/
    if (cells[0].dataset.field === 'player' ||
      cells[2].dataset.field === 'player' ||
      cells[6].dataset.field === 'player' ||
      cells[8].dataset.field === 'player') {
      cells[4].dataset.field = 'pc';
      cells[4].classList.add('board__item--active-pc');
    }
    /**************** */

    /**************** */
    /** ВТОРОЙ ХОД ИГРОКА*/

  }
});

