    const navButton = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");

    navButton.addEventListener("click", () => {
    links.classList.toggle("show-links");
    });
