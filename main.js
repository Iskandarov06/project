var age = prompt("Yoshingizni kiriting");
alert("Natijani ko'rish uchun cansolni ochingпше")

// if (age >= 18) {
//   console.log("Ishlashingiz kerak");
// } else if (age <= 18) {
//   console.log("Yoshsiz. O'qishingiz kerak");
// } else if (age <= 50) {
//   console.log("Ishlashingiz kerak");
// } else if (age >= 50) {
//   console.log("Yaqinda pensiyaga chiqasiz");
// } else if (age >= 59) {
//   console.log("Pensionerga o'xshaysiz, hali tirik bolsangiz");
// } else if (age <= 150) {
//   console.log("Nimadir noto'g'ri ketib qoldi ");
// }


if(age >= 18 && age <= 50 ){
  console.log("Ishlashingiz kerak");
} else if(age <= 18){
  console.log("Yoshsiz. O'qishingiz kerak");
} else if(age >= 50 && age <= 59){
  console.log("Yaqinda pensiyaga chiqasiz");
} else if (age >= 59 && age <=150){
  console.log("Pensionerga o'xshaysiz, hali tirik bolsangiz");
} else {
  console.log("Nimadir noto'g'ri ketib qoldi ");
}