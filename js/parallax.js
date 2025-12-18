window.addEventListener("scroll", (e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
}
));
var number1 = document.querySelector("#number1");
function getRndInteger(e, t) {
    return Math.floor(Math.random() * (t - e)) + e
}
if (number1) {
    number1.setAttribute("data-target", getRndInteger(512, 917))
}
var number2 = document.querySelector("#number2");
if (number2) {
    number2.setAttribute("data-target", getRndInteger(109, 151))
}
var number3 = document.querySelector("#number3");
if (number3) {
    number3.setAttribute("data-target", getRndInteger(3, 6))
}
var element = document.querySelectorAll(".dynamic-accent")
  , Visible = function(e) {
    for (let o = 0; o < element.length; o++) {
        if (!e[o])
            continue;
        var t = {
            top: window.pageYOffset + e[o].getBoundingClientRect().top,
            bottom: window.pageYOffset + e[o].getBoundingClientRect().bottom
        }
          , n = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };
        if (t.bottom > n.top && t.top < n.bottom && (element[o].classList.add("dynamic-accent-active"),
        element[o].classList.contains("counter"))) {
            document.querySelectorAll(".counter").forEach((e => {
                const t = () => {
                    const n = +e.getAttribute("data-target")
                      , o = +e.innerText;
                    o < n ? (e.innerText = o + 1,
                    setTimeout(t, 1)) : e.innerText = n
                }
                ;
                t()
            }
            ))
        }
    }
};
window.addEventListener("scroll", (function() {
    Visible(element)
}
)),
Visible(element);
