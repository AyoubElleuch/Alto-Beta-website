// Creator : Mohamed Ayoub Elleuch
// Email: mmdayoub3@gmail.com
console.log(
    "Made by: Mohamed Ayoub Elleuch\nEmail: mmdayoub3@gmail.com\nAll Rights Reserved © 2020"
);

import productsData from "./products.js";
$(window).ready(() => {
    //Smooth Scroll
    $(() => {
        $("a").on("click", function(event) {
            const nav = $("nav").height();
            if (this.hash !== "") {
                event.preventDefault();

                let hash = this.hash;

                $("html, body").animate({
                        scrollTop: $(hash).offset().top - nav,
                    },
                    800,
                    function() {
                        window.location.hash = hash - nav;
                    }
                );
            }
        });
    });
    // Main nav //
    $(() => {
        $(window).scroll(() => {
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
                $(".main-nav").css("background", "white");
                $(".nav-list li").css("color", "#999999");
                $(".nav-list li").hover(
                    function() {
                        $(this).css("color", "black");
                    },
                    function() {
                        $(this).css("color", "#999999");
                    }
                );
                $(".nav-image").attr("src", "images/bwLogo.svg");
                $(".main-nav").css("box-shadow", "0px 1px 5px rgba(0, 0, 0, 0.15)");
                $(".nav-wrapper").css("border-bottom", "none");
            } else {
                $(".main-nav").css("background", "transparent");
                $(".nav-list li").css("color", "rgba(255, 255, 255, .65)");
                $(".nav-list li").hover(
                    function() {
                        $(this).css("color", "white");
                    },
                    function() {
                        $(this).css("color", "rgba(255, 255, 255, .65)");
                    }
                );
                $(".nav-image").attr("src", "images/Logo.svg");
                $(".main-nav").css("box-shadow", "none");
                $(".nav-wrapper").css(
                    "border-bottom",
                    ".5px solid rgba(255, 255, 255, .8)"
                );
            }
        });
    });

    // Mobile nav menu //
    $(() => {
        $(".hamburger-menu-wrapper").click(() => {
            $(".mobile-nav-menu-list").slideToggle();
        });
        $(".mobile-nav-menu-list-wrapper li, body > ~").click(() => {
            $(".mobile-nav-menu-list").slideUp();
        });
    });

    // <= Products => //

    // Creating template
    $(function() {
        let html = ``;
        for (let i of productsData) {
            html += `
                    <div class="product-images">
                        <img src="${i.image}">
                    </div>
                `;

            if (i.buttons === undefined) {
                html += `
                    <p> ${i.title} </p>
                `;
            } else {
                html += `<div class="color-boxes">  	`;
                for (let btns of i.buttons) {
                    html += `
                            <div class="box-color ${btns.btnClass}" data-direction="${btns.btnData}" data-text="${btns.btnDataText}">${btns.btnText}</div>
                        `;
                }
                html += `
                        </div>
                    <p> ${i.title} </p>
                `;
            }
            $(".products-section-wrapper").append(
                `<div class="product-wrapper"> ${html} </div>`
            );
            html = ``;
        }

        // Buttons functionality
        $(() => {
            // Select all divs with class .product-wrapper
            let products = document
                .querySelector(".products-section-wrapper")
                .querySelectorAll(".product-wrapper");

            // Iterate in every single div
            for (let product of products) {
                // Select the img and p tags
                let img = product.querySelector("img");
                let title = product.querySelector("p");
                // Select all divs with class .color-boxes
                let colorBoxes = product.querySelectorAll(".color-boxes");

                // Iterate in every single div
                for (let colorBtn of colorBoxes) {
                    // Select all btns
                    let btns = colorBtn.querySelectorAll(".box-color");

                    // Iterate in every single button
                    for (let btn of btns) {
                        // Change img source and p text from data attributes of each button on click
                        btn.addEventListener("click", (event) => {
                            img.setAttribute("src", btn.dataset.direction);
                            title.innerHTML = btn.dataset.text;
                        });
                    }
                }
            }
        });
    });
});