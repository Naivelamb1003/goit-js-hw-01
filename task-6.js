// 1.переменные
// 2.

// const Apple = prompt("Please enter a number!");
// const sumApple = Number.parseInt(Apple) * 2;
// console.log(sumApple);
// console.log(typeof sumApple);

let input;
let total = 0;

while (input !== null) {
  input = prompt("Пожалуйста, введите число!");
  console.log(input);
  if (input !== null) {
    total += Number.parseInt(input);
  }
}

alert(`Общая сумма чисел равна ${total}`);
