"use strict";
// В двумерном массив удалить столбцы где сумма элементов столбца < 0. 
// Массив должен быть размером 10 на 10, заполненым случайными числам 
// в диапазоне от -20 до +20

// debugger
let n = 10; 
let m = 10; 

let a = new Array(n);

for (let i = 0; i < a.length; i++) {
  a[i] = new Array(m);

  for (let j = 0; j < a[i].length; j++) {
    a[i][j] = Math.floor(Math.random() * 41) - 20;
  }
  // document.write(a + '<br>');

}
// debugger
for (let i = 0; i < a.length; i++) {
  // console.log(a);
  let d = 0;

  for (let row = 0; row < a[i].length; row++) {
    d += a[row][i];
  }


  for (let k = a.length - 1; k >= 0; --k) {
    console.log(a[k][i]);
    if (d < 0) {
      a[k][i] = '*';

//a.splice(так и не смогла правильно применить этот метод.
// Покажите пож. как это правильно сделать);

    }
    console.log(d);
  }
  console.log(a);

}

