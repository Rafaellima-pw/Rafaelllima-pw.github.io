type = "text/javascript" >
    window.addEventListener("scroll", function () {
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0)
    })

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const elements = document.querySelectorAll('.motion');

elements.forEach((element) => myObserver.observe(element))


function clickMenu() {
    if (navBar.style.display == 'block') {
        navBar.style.display = 'none'
    } else {
        navBar.style.display = 'block'
    }

}