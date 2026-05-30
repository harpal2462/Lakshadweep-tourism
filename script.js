// LOGIC FOR CURSOR — only on non-touch devices
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

var isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (isTouchDevice) {
    crsr.style.display = "none";
    blur.style.display = "none";
} else {
    document.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + "px";
        crsr.style.top = dets.y + "px";

        blur.style.left = dets.x - 250 + "px";
        blur.style.top = dets.y - 250 + "px";
    });
}

// HAMBURGER MENU TOGGLE
var menuBtn = document.querySelector("#menu-btn");
var navLinks = document.querySelector("#nav-links");
var menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        menuIcon.className = "ri-close-line";
    } else {
        menuIcon.className = "ri-menu-line";
    }
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll("h4").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuIcon.className = "ri-menu-line";
    });
});


// GSAP FOR NAVBAR
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})
// GSAP FOR MAIN PAGE
gsap.to("#main", {
    backgroundColor: "#000",
    // duration:0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: " top -30%",
        end: "top -75%",
        scrub: 1
    }

})
// GSAP FOR INVERTED COMMAS ON PAGE3
gsap.from("#colon1", {
    x: -70,
    y: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 35%",
        scrub: 4,
    }
})
gsap.from("#colon2", {
    x: 70,
    y: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})

// GSAP FOR BEHIND TEXT OF PAGE 4
gsap.from("#page4-h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4-h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})