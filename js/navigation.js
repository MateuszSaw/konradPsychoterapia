(() => {
    const button = document.querySelector(".js-navigation__mobile-button");
    const menu = document.querySelector(".js-mainNavigation__menu");

    const toggleClass = () => {
        menu.classList.toggle("mainNavigation__menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();