// Calling $(function() {...}) is shorcut in jQuery for execution after the
// DOM is fully loaded
$(function() {

    navBarController();
    $(window).scroll(navBarController);

    // Typed.js library initialization
    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 120,
        loop: true,
        backDelay: 1100,
        backSpeed: 40,
        smartBackspace: true
    });

    // Smooth scroll library initialization
    const scroll = new SmoothScroll('a[href*="#"]');

    // This function changes the style of the navbar depending on its position
    function navBarController() {
        if ($(document).scrollTop() > 200) {
            $('#main-navbar').addClass('affix shadow-sm navbar-light');
            $('#main-navbar').removeClass('navbar-dark');
        } else {
            $('#main-navbar').removeClass('affix shadow-sm navbar-light');
            $('#main-navbar').addClass('navbar-dark');
        }
    }

});