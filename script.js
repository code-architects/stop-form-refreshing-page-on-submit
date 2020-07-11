document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#text").value;
    document.querySelector("#name").style.display = "block"
    document.querySelector("#name").innerHTML = name;
});