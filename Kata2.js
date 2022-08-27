// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание. Пустые массивы должны возвращать 0.

// Решение:

function find_average(array) {
    let numbers = 0;
    if(array.length === 0) {
      return 0;
    }
    for(i = 0;i < array.length;i++) {
      if(array.length !== 0) {
        numbers += array[i];
      } 
    }
    return numbers / array.length;
   }