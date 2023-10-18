


// navbar
let a = document.getElementById("nav");
let flow = document.querySelector(".flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuicon = document.querySelector("#menuIcon");
let Lorem = document.querySelector(".Lorem");
let Founder = document.querySelector(".Founder");
let Benifit = document.querySelector(".Benifit");
let Program = document.querySelector(".Program");
let Lorem2 = document.querySelector(".Lorem2");
let Lorem3 = document.querySelector(".Lorem3");
let myBtn = document.querySelector(".myBtn");

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

myBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


menuicon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("fix-lft")) {
        a.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
});

Lorem.addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Founder.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Benifit.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Program.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Lorem2.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Lorem3.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});




setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden")
}, 2000)


