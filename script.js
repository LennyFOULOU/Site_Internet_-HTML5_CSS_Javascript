document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    function openLoginForm(event) {
        event.preventDefault();
        event.stopPropagation();
        wrapper.classList.add('active-popup');
    }

    function closeLoginForm(event) {
        event.preventDefault();
        event.stopPropagation();
        wrapper.classList.remove('active-popup');
    }

    registerLink.addEventListener('click', function (event) {
        openLoginForm(event);
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', function (event) {
        openLoginForm(event);
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', openLoginForm);

    iconClose.addEventListener('click', closeLoginForm);
});

window.addEventListener('scroll', function() {
    var headerPlaceholder = document.querySelector('.header-placeholder');
    var header = document.querySelector('header');
    
    if (window.scrollY >= header.offsetTop) {
        headerPlaceholder.style.display = 'block';
    } else {
        headerPlaceholder.style.display = 'none';
    }
});