// function nice(name) {
//     console.log("Hey " + name + " YOU ARE NICE!")
//     console.log("Hey " + name + " YOU ARE GOOD!")
//     console.log("Hey " + name + " YOUR TSHIRT IS NICE !")
//     console.log("Hey " + name + " YOUR COURSE IS UNDERSTATNDABLE!")

// }

// nice("SAMIR")

// nice("mohenjodlo")

function sum(a, b, c = 3) {
  //    console.log(a+b)

  return a + b + c;
}

RESULT1 = sum(3, 5);
RESULT2 = sum(88, 5);
RESULT3 = sum(63, 5);

console.log("THE SUM OF THESE NUMBERS IS: ", RESULT1);
console.log("THE SUM OF THESE NUMBERS IS: ", RESULT2);
console.log("THE SUM OF THESE NUMBERS IS: ", RESULT3);


const func1 = (x)=>{
    console.log("I AM AN ARROW FUNCTION", x)
}
func1(34);
func1(66);
func1(84);

