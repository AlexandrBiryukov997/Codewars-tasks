// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание. Пустые массивы должны возвращать 0.

// Решение:

function find_average(array) {
    let numbers = 0;
  for(i = 0;i < array.length;i++) {
    if(array.length !== 0) {
      numbers += array[i];
    } else numbers = 0;
  }
    return numbers / array.length;
  }
    

