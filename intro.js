// 1-3 создать переменную item_1 , присвоить item_1 цифру 5, вывести в консоль item_1 
let item_1 = 5
console.log(item_1)

// 4-6 создать переменную item_2 , присвоить item_2 цифру 3, вывести в консоль item_2 

let item_2 = 3
console.log(item_2)

// 7-9 создать переменную item_3 , присвоить item_3 сложение item_1 и item_2 , вывести в консоль item_3

let item_3 = item_1 + item_2
console.log(item_3)

// 10-12 создать переменную item_4 , присвоить item_4 Yolochka , вывести в консоль item_4

let item_4 = "Yolochka"

//13 вывести в консоль сложение item_3 + item_4

console.log(item_3 + item_4)

//14 вывести в консоль умножение item_3 и item_4

console.log(item_3 * item_4)

//15-16 создать переменную item_5, присвоить item_5 перемен item_3

let item_5 = item_3
console.log(item_5)

//19-21

let item_6 = 15
let item_6_type = (typeof item_6)

console.log("item_6 == " + item_6, "item_6_type == " + item_6_type)

//22-25

let item_7 = String(item_6)
let item_7_type = (typeof item_7)

console.log("item_7 == " + item_7, "item_7_type == " + item_7_type)

//26-33

let age_1 = 10
let age_2 = 18
let age_3 = 60

if (age_1 < age_2) {
   console.log(`You don't have access cause your age ${age_1} it's less then`)
} else if (age_1 >= age_2 && age_1 < age_3) {
   console.log("Welcome")
} else if (age_1 > age_3) {
   console.log("Keep calm and look Culture channel")
}
else {
   console.log("Technical work.")
}