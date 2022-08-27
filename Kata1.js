// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. 
// Числа могут быть отрицательными или нецелыми.
// Если массив не содержит чисел, вы должны вернуть 0.

// Решение:
function sum (numbers) {
    let count = 0;
for (i = 0;i < numbers.length; i++) {
  if(numbers.length !== 0) {
    count += numbers[i]
  } else count = 0;
}
    return count;
};