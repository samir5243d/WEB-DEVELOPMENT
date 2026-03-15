// async function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 5300);
//     })

// }


async function getData(){
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    console.log(data)
    return 455

}

async function main(){}
console.log("loading modules")

console.log("do something else")

console.log("load data")

let data = getData()
console.log(data)

console.log("process data")

console.log("task 2")


main()

