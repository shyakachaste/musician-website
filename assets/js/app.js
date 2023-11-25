jQuery(document).ready(function() {
    jQuery('a[href^="#"]').click(function(event) {
        var href = jQuery(this).attr('href');
        $("a.scroll").removeClass("active");
        $(this).addClass("active");
        if ($(this).hasClass('mobile-menu-item')) {
            $("#mySidenav").toggleClass("open");
            $(".menu-icon,.logo-image").toggleClass("active");
            $("body").toggleClass("overflow");
        }

        if (href.indexOf('#') == 0) {
            event.preventDefault();
            if (jQuery(href).length > 0) {
                $('html, body').stop().animate({
                    'scrollTop': jQuery(href).offset().top + 2
                }, 500, 'swing', function() {
                });
            }
        }
    });
    $('.terms-conditions-toggle.desktop-only').click(function() {
        $(".terms-view.desktop-only").toggle();
    });
    $('.terms-conditions-toggle.mobile-only').click(function() {
        $(".terms-view.mobile-only").toggle();
    });

    window.signupsuccess = function() {

    }

    $('.mobile-menu').click(function() {
        $("#mySidenav").toggleClass("open");
        $(".menu-icon,.logo-image").toggleClass("active");
        $("body").toggleClass("overflow");
    });


});


