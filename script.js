document.addEventListener("DOMContentLoaded", function() {
    let toggle = document.querySelector(".switch");
    // let home = document.querySelector(".home");
    // let nav = document.querySelector("nav");
    let body = document.querySelector("html");

    toggle.addEventListener("click", () => {
        document.documentElement.style.backgroundColor = "black";
        document.documentElement.style.color = "white";
        // home.style.backgroundColor = "black";
        // nav.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
    });
});

