// Вам даны length и width четырехугольника. Многоугольник может быть прямоугольным или квадратным.

// Если это квадрат, вернуть его площадь. Если это прямоугольник, верните его периметр.

//Решение:

const areaOrPerimeter = function(l , w) {
    if(l === w) {
      return l*w;
    }
    else if(l !== w) {
      return (l+w)*2;
    }
  };
