const BIRD = document.getElementById('bird');
const BACKGROUND = document.getElementById('main');

console.log(BIRD);
console.log(BACKGROUND);

//Функция получения координат птички
const getCoords = function (elem) {
  elem = BIRD;
  let box = elem.getBoundingClientRect();

  console.log(box)

  return {
    top: box.top + scrollY,
    bootom: box.bottom + scrollY,
    lef: box.left + scrollX,
    right: box.right + screenX
  }
}

//Функция падения птички
function goBottom() {
  let positionNow = getCoords()

  setTimeout(function () {
    x += 10
    BIRD.style.top = positionNow.top + x +'px';
    if (x < 290) {
      goBottom();
    }
  }, 1000)
}

let x = 0;
// goBottom();

//Реализация полета
const flyBird = function () {
  let positionNow = getCoords();
  BIRD.style.top = positionNow.top - 100 + 'px';
  goBottom();
  console.log(getCoords())
}

BACKGROUND.onclick = getCoords;