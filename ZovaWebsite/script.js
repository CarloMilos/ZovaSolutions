
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar-custom");
        if (window.scrollY > 50) {
            navbar.classList.add("frosted-glass");
        } else {
            navbar.classList.remove("frosted-glass");
        }
    });

    