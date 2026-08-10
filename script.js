/* =========================================
   PAGE LOAD ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".container");

    container.classList.add("page-loaded");

});


/* =========================================
   BUTTON CLICK EFFECT
========================================= */

const buttons = document.querySelectorAll(".link-button");

buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        // Efek kecil saat tombol ditekan
        this.classList.add("clicked");

        setTimeout(() => {
            this.classList.remove("clicked");
        }, 300);

    });

});


/* =========================================
   RIPPLE EFFECT
========================================= */

buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* =========================================
   STAR PARTICLES
========================================= */

const starContainer = document.querySelector(".stars");

if (starContainer) {

    for (let i = 0; i < 70; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            2 + Math.random() * 4 + "s";

        const size =
            Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        starContainer.appendChild(star);

    }

}


/* =========================================
   LIVE TIME
========================================= */

function updateTime() {

    const now = new Date();

    let hours =
        String(now.getHours()).padStart(2, "0");

    let minutes =
        String(now.getMinutes()).padStart(2, "0");

    let seconds =
        String(now.getSeconds()).padStart(2, "0");


    console.log(
        `Waktu sekarang: ${hours}:${minutes}:${seconds}`
    );

}

setInterval(updateTime, 1000);


/* =========================================
   BUTTON HOVER SOUND EFFECT
========================================= */

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.setProperty(
            "--hover-x",
            "0px"
        );

    });

});


/* =========================================
   SCROLL ANIMATION
========================================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "show"
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(".schedule, .link-button, footer")
    .forEach((element) => {

        observer.observe(element);

    });


/* =========================================
   PREVENT EMPTY LINK JUMP
========================================= */

buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const link = this.getAttribute("href");

        if (link === "#" || !link) {

            event.preventDefault();

            console.log(
                "Link belum diisi."
            );

        }

    });

});