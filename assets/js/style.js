$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});



$(document).ready(function() {


    //toggle bar
    $(".toggle-bar").click(function(e) {
        e.preventDefault();
        if ($(window).width() < 768) {
            $('.header-menu').toggleClass('opened');
        }
    });
    $(".hasSubmenu .icon-angle").click(function(e) {
        e.preventDefault();
        if ($(window).width() < 768) {
            $(this).parent('.hasSubmenu').toggleClass('active');
        }
    });


    // $(".has-submenu .menu-link").click(function() {
    //     $(this).toggleClass('active');
    //     // $(this).parent('.has-submenu').children('.submenu').slideToggle();
    //     $(this).parent('.has-submenu').children('.submenu').toggleClass('open');
    // });







    $(".hasDatepicker").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#check-in").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#check-out").flatpickr({
        dateFormat: "d/m/Y"
    });




    // $('.selectpicker').select2();

    // $(document).mouseup(function(e) {
    //     if ($(e.target).closest(".popup-search").length ===
    //         0) {
    //         $('.popup-search').hide();
    //     }
    // });



    // Smart Tab
    $('#aboutUs-tabs').smartTab({
        autoProgress: false,
        stopOnFocus: true,
        transitionEffect: 'vSlide'
    });

    // function showST(tab_index) {
    //     $('#aboutUs-tabs').smartTab('showTab', tab_index);
    // }

});