const menu = document.querySelector(".menu")
const menuBar = document.querySelector(".menuBar")

menuBar.addEventListener("click", () => {
    menu.classList.toggle("close")

    if (!menu.classList.contains("close")) {
        document.body.classList.add("lockscroll")
    } else {
        document.body.classList.remove("lockscroll")
    }
})