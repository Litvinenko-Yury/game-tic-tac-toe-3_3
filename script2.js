'use strict';

const cells = document.querySelectorAll('.board__item');


for (let i = 0; i < cells.length; i++) {
  console.log('i = ' + i);
  if (!cells[i].classList.contains('eee')) {
    console.log(cells[i]);
  }
}
