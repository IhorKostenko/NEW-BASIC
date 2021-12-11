document.querySelectorAll('.site-nav li a').forEach(function(el) {
    if ( window.location.pathname.indexOf(el.getAttribute('href')) > -1 ) {
        el.classList.add('active');
    }
});