// -----------ЦИКЛ 1-----------
// let age = 0;
// while (age < 18) {
//   console.log('Вам', age);
//   age++;
// }



// -----------ЦИКЛ 2-----------
// let age2 = 0;
// do {
//   console.log('Вам', age2);
//   age2++;
// } while (age2 < 18)



// -----------ЦИКЛ 3-----------
// for(let age3 = 0; age3<18; age3++) {
//   console.log('Вам', age3);
// }




// ------------------------Завдання 1------------------------------
// Вивести в консоль числа від 1 до 5 всіма циклами

// console.log('Цикл while')
// let num = 1
// while(num < 6) {
//   console.log(num)
//   num++;
// }
// console.log('Цикл do while')
// let num2 = 1
// do {
//   console.log(num2)
//   num2++;
// } while (num2 < 6)

// console.log('Цикл for')
// for(let num3 = 1; num3<6; num3++) {
//   console.log(num3)
// }


// ------------------------Завдання 2------------------------------
// Переписати на while

// let number = 0;
// while(number < 5) {
//   console.log(`Число ${number}`);
//   number++;
// }

// ------------------------Завдання 3------------------------------
// Виведіть в консоль всі непарні числа за допомогою циклу for
// for(let i = 1; i<50; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

// let x = 10;
// let count = 0;

// while (x > 5) {
//   x -= 2;
//   count++;
// }

// console.log("Кількість ітерацій:", count);

// ------------------------Завдання 4------------------------------
// let grades = '9,9,8,7,9,9';
// let totatGrades = 0;
// let count = 0;

// for (let i = 0; i < grades.length; i++) {
//   if (grades[i] === ',') {
//     continue;
//   }
//   if (Number(grades[i]) < 7) {
//     console.log('Ви не можете вчитися в нашій школі');
//     break;
//   }
//   totatGrades += Number(grades[i]);
//   count++;
//   console.log(grades[i]);
// }
// console.log('Середня бал: ' + totatGrades / count);


// ------------------------Завдання 5------------------------------
// Напиши цикл, який пропонує в prompt ввести число, більше 100. Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.
// let number;

// // do {
// //   number = Number(prompt('Введи число більше 100'))
// // } while(number <= 100 || Number.isNaN(number))


// for (let number = Number(prompt('Введи число більше 100')); number <= 100; number = Number(prompt('Введи число ще раз'))) {
// }

// ------------------------Завдання 6------------------------------
// Напиши скрипт який порахує суму всіх парних чисел, які входять в діапазон чисел в змінних від min до max. 
// Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому 2 парних числа - 2 та 4, їх сума 6.
// Можна зробити отримання значень мінімального і максимального числа через інпут.

// let min = Number(prompt("Введіть мінімальне число:"));
// let max = Number(prompt("Введіть максимальне число:"));

// if (isNaN(min) || isNaN(max)) {
//   alert("Введіть коректні числа.");
// } else {
//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     if (i % 2 == 0) {
//       sum += i;
//     }
//   }

//   alert(`Сума парних чисел у діапазоні від ${min} до ${max} дорівнює ${sum}`);
// }




// ------------------------Завдання 1------------------------------
console.log(`--------Завдання 1----------`)
let i = 1;
while(i < 11) {
  console.log(i);
  i++;
}

// ------------------------Завдання 2------------------------------`
console.log(`--------Завдання 2----------`)
for(let i=2; i < 21; i++) {
  if(i % 2 !== 0) {
    continue;
  }
  console.log(i)
}


// ------------------------Завдання 3------------------------------`
console.log(`--------Завдання 3----------`)
for(i = 1; i<11; i++) {
  console.log(`7*${i} = ${i*7}`)
}

// ------------------------Завдання 4------------------------------`
console.log(`--------Завдання 4----------`)
let list = [1,2,3,4,5];
i = 0;
while(i < list.length) {
  console.log(list[i])
  i++;
}

// ------------------------Завдання 5------------------------------`
console.log(`--------Завдання 5----------`)
list = [1,2,3,4,5,6,7,8,9,10];
for(i=0; i<list.length; i++) {
  if(list[i] == 7) {
    console.log("Код стоп")
    break
  }

  console.log(list[i])
}

// ------------------------Завдання 6------------------------------`
console.log(`--------Завдання 6----------`)
let n = 8;
for(i=1; i < 10; i++) {
  if(i>= n) {
    break
  }
  console.log(i)
}

// ------------------------Завдання 7------------------------------`
console.log(`--------Завдання 7----------`)
i = 1;
while(i<= 20) {
  if(i%3 == 0) {
    i++
    continue;
  }

console.log(i)
i++
}