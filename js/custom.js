// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $("#demo01").animatedModal();
    	$("#demo02").animatedModal({
    modalTarget: 'animatedModal2'
	});

	$("#demo03").animatedModal({
    modalTarget: 'animatedModal3'
	});
	$("#demo04").animatedModal({
    modalTarget: 'animatedModal4'
	});
	$("#demo05").animatedModal({
    modalTarget: 'animatedModal5'
	});
	$("#demo06").animatedModal({
    modalTarget: 'animatedModal6'
	});
	$("#demo07").animatedModal({
    modalTarget: 'animatedModal7'
	});
	$("#demo08").animatedModal({
    modalTarget: 'animatedModal8'
	});
	$("#demo10").animatedModal({
    modalTarget: 'animatedModal19'
	});
	$("#demo11").animatedModal({
    modalTarget: 'animatedModal20'
	});
	$("#demo14").animatedModal({
    modalTarget: 'animatedModal21'
	});
	$("#demo15").animatedModal({
    modalTarget: 'animatedModal22'
	});
	$("#demo16").animatedModal({
    modalTarget: 'animatedModal23'
	});
	$("#demo17").animatedModal({
    modalTarget: 'animatedModal24'
	});
	$("#demo18").animatedModal({
    modalTarget: 'animatedModal25'
	});
	$("#demo19").animatedModal({
    modalTarget: 'animatedModal26'
	});
	$("#demo20").animatedModal({
    modalTarget: 'animatedModal27'
	});
	$("#demo21").animatedModal({
    modalTarget: 'animatedModal28'
	});
	$("#demo22").animatedModal({
    modalTarget: 'animatedModal29'
	});
	$("#demo112").animatedModal({
    modalTarget: 'animatedModal12'
	});
	$("#demo113").animatedModal({
    modalTarget: 'animatedModal12'
	});
	$("#demo12").animatedModal({
    modalTarget: 'animatedModal12'
	});
	$("#demo13").animatedModal({
    modalTarget: 'animatedModal13'
	});
	
	//("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08").animatedModal();
	
	// popup-modal
	$("#animatedModal").popup-modal();

	$("#animatedModal2").popup-modal2({
   	modalTarget: 'popup-modal12'
	});
	// $("#animatedModal12").popup-modal({
   // modalTarget: 'popup-modal12'
//	});
	//$("#animatedModal13").popup-modal({
   // modalTarget: 'popup-modal13'
	// });

	$("#animatedModal2").popup-modal({
    modalTarget: 'popup-modal2'
	});
	$("#animatedModal12").popup-modal({
    modalTarget: 'popup-modal12'
	});
	$("#animatedModal13").popup-modal({
    modalTarget: 'popup-modal13'
	});
	$("#animatedModal14").popup-modal({
    modalTarget: 'popup-modal'
	});

	$("#animatedModal2").popup-modal({
    modalTarget: 'popup-modal'
	});
	$("#animatedModal12").popup-modal({
    modalTarget: 'popup-modal'
	});
	$("#animatedModal13").popup-modal({
    modalTarget: 'popup-modal'
	});
	$("#animatedModal14").popup-modal({
    modalTarget: 'popup-modal'
	});
	$("#animatedModal15").popup-modal({
    modalTarget: 'popup-modal15'
	});

    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});
