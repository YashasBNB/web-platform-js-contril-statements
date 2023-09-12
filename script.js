// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.)
var a;
for (a = 1; a <= 100; a++) {
  if (a % 2 == 0) {
    console.log(a);
  }
}
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
var b = -1;
while (b < 99) {
  b += 2;
  console.log(b);
}

let number = 3;
do {
  console.log(number);
  number += 3;
} while (n < 100);
// // Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
do {
  var n = 3;
  n += 3;
  console.log(n);
} while (n < 100);
// // Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
for(let i=2;i<=100;i++)
{ if(i==2 || i==3 || i==5 || i==7) 
  console.log(i);
  if(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0)
  console.log(i);
}