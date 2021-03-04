console.log("Astra Child Theme JS is running!");



document.addEventListener("DOMContentLoaded", function () {
    initScrollToTop();
    initTypedJs ();
});

// ---------- scroll to top function ---------- //

function initScrollToTop() {
    window.onscroll = function () {
        scrollFunction();
    };
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ---------- typed tekst function ---------- //

function initTypedJs() {
    new Typed(".typed", {
        strings: ["UX/UI DESIGNER", "CONTENT CREATOR", "SOME SPECIALIST",],
        typeSpeed: 75,
        loop: true,

    });
};

