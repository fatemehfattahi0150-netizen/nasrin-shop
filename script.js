// ================================
// LOADER
// ================================

window.addEventListener("load", () => {

    setTimeout(() => {
        document.querySelector(".loader").style.pointerEvents = "none";
    }, 2000);

});


// ================================
// HEADER ON SCROLL
// ================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// ================================
// CART
// ================================

let cartCount = 0;

const cartCountElement =
    document.getElementById("cartCount");

const mobileCartCount =
    document.getElementById("mobileCartCount");

const cartButton =
    document.getElementById("cartBtn");


function updateCart() {

    cartCountElement.textContent = cartCount;
    mobileCartCount.textContent = cartCount;

    cartButton.classList.remove("cart-pop");

    void cartButton.offsetWidth;

    cartButton.classList.add("cart-pop");
}


// Add product to cart

const addCartButtons =
    document.querySelectorAll(".add-cart");


addCartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        cartCount++;

        updateCart();

        button.textContent = "✓";

        button.style.transform = "scale(1.1)";

        setTimeout(() => {

            button.textContent = "+";
            button.style.transform = "";

        }, 800);

    });

});


// ================================
// FAVORITES
// ================================

const favoriteButtons =
    document.querySelectorAll(".favorite");


favoriteButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

    });

});


// ================================
// SEARCH
// ================================

const searchBtn =
    document.getElementById("searchBtn");


searchBtn.addEventListener("click", () => {

    const search = prompt(
        "نام محصول موردنظر را وارد کنید:"
    );

    if (search && search.trim() !== "") {

        alert(
            `جستجو برای «${search}» در نسخه کامل سایت فعال خواهد شد.`
        );

    }

});


// ================================
// ACCOUNT
// ================================

const accountBtn =
    document.getElementById("accountBtn");


accountBtn.addEventListener("click", () => {

    alert(
        "صفحه حساب کاربری در نسخه کامل سایت قرار می‌گیرد."
    );

});


// ================================
// CART BUTTON
// ================================

cartButton.addEventListener("click", () => {

    if (cartCount === 0) {

        alert("سبد خرید شما خالی است.");

    } else {

        alert(
            `تعداد ${cartCount} محصول در سبد خرید شما قرار دارد.`
        );

    }

});


// ================================
// MOBILE NAVIGATION
// ================================

const mobileNavItems =
    document.querySelectorAll(".mobile-nav-item");


mobileNavItems.forEach((item) => {

    item.addEventListener("click", () => {

        mobileNavItems.forEach((nav) => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// ================================
// DESKTOP NAVIGATION
// ================================

const desktopNavItems =
    document.querySelectorAll(".desktop-nav a");


desktopNavItems.forEach((item) => {

    item.addEventListener("click", () => {

        desktopNavItems.forEach((nav) => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// ================================
// ACTIVE NAV WHILE SCROLLING
// ================================

const sections = document.querySelectorAll(
    "section[id]"
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    desktopNavItems.forEach((item) => {

        item.classList.remove("active");

        const href =
            item.getAttribute("href");

        if (href === `#${currentSection}`) {
            item.classList.add("active");
        }

    });


    mobileNavItems.forEach((item) => {

        item.classList.remove("active");

        const href =
            item.getAttribute("href");

        if (href === `#${currentSection}`) {
            item.classList.add("active");
        }

    });

});


// ================================
// MOUSE MOVEMENT HERO
// ================================

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect =
            heroVisual.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const moveX =
            (x - centerX) / 35;

        const moveY =
            (y - centerY) / 35;

        const card =
            heroVisual.querySelector(".hero-card");

        card.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });


    heroVisual.addEventListener("mouseleave", () => {

        const card =
            heroVisual.querySelector(".hero-card");

        card.style.transform = "";

    });

}


// ================================
// BUTTON HOVER RIPPLE
// ================================

const buttons =
    document.querySelectorAll(
        ".primary-button, .secondary-button, .contact-button"
    );


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 120);

    });

});