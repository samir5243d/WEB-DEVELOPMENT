let button = document.getElementById("btn");

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b>yayy you were clicked </b> Enjoy your click!";
});

button.addEventListener("dblclick", () => {
    alert(".box").innerHTML = "<b>yayy you were double clicked </b> Enjoy your double click!";
});