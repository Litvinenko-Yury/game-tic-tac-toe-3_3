'use strict';

const board = document.querySelector('.board');

console.log(board);

board.addEventListener('click', function (event) {//один обработчик на весь блок
  let target = event.target; // где был клик?

  if (target.classList.contains('board__item')) {//клик на ячейке?
    target.classList.add('board__item--active-gamer');
  }
});
