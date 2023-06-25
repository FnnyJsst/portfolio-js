document.addEventListener("DOMContentLoaded", function() {
    let toggle = document.querySelector(".switch");
    let body = document.querySelector("html");

    toggle.addEventListener("click", () => {
        document.documentElement.style.backgroundColor = "black";
        document.documentElement.style.color = "white";
        body.style.backgroundColor = "black";
    });

    toggle.addEventListener("dblclick", () => {
        document.documentElement.style.backgroundColor = "#FFEEEF";
        document.documentElement.style.color = "black";
        body.style.backgroundColor = "#FFEEEF";
});
});
