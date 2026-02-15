// console.log("Samir")

// let boxes= document.getElementsByClassName("box")// HTML collection

// console.log(boxes)

// boxes[2].style.backgroundColor="lightblue"


// document.getElementById("redbox").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green"// only first element will be selected


console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})