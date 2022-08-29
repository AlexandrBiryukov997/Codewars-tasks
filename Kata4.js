// Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост 2 ).

// если ИМТ <= 18,5, вернуть "Недостаточный вес"

// если ИМТ <= 25,0, вернуть «Нормальный»

// если ИМТ <= 30,0 вернуть "Избыточный вес"

// если ИМТ > 30, верните «Ожирение».

//Решение:

function bmi(weight, height) {
    let bmi = weight / (height ** 2)
   if(bmi <= 18.5) {
   return "Underweight";
     } else if (bmi <= 25.0)  {
       return "Normal";
     } else if (bmi <= 30.0) {
       return  "Overweight";
     } else if(bmi > 30 ) {
       return "Obese";
     }
   }