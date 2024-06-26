$(document).ready(function() {
    
    let x = 0;
    const totalImages = $('.imagecontainer').length;

    $('.nextbtn').on('click', function() {
        nextImage();
        resetInterval();
    });

    $('.backbtn').on('click', function() {
        prevImage();
        resetInterval();
    });

    let reset = setInterval(nextImage, 3000);
    
    function resetInterval() {
        clearInterval(reset);
        reset = setInterval(nextImage, 5000);
    }

    function nextImage() {
        let nextIndex;
        if (x < totalImages - 1) {
            nextIndex = x + 1;
        } else {
            nextIndex = 0;
        }
        pAnimate(x, nextIndex);
    }

    function prevImage() {
        let prevIndex;
        if (x > 0) {
            prevIndex = x - 1;
        } else {
            prevIndex = totalImages - 1;
        }
        pAnimate(x, prevIndex);
    }

    function pAnimate(oldIndex, newIndex) {
        $('.imagecontainer').eq(oldIndex).find('p').fadeOut(350, function() {
            x = newIndex;
            $('.imagecontainer').eq(newIndex).find('p').fadeIn(900);
            sliderAnimate();
        });
    }

    function sliderAnimate() {
        const offset = -x * 100;
        $('.slider-wrapper').css('transform', `translateX(${offset}%)`);
    }
});

function mobileNav() {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("h2wheel");

    if (navbar.className === "navbar") {
        navbar.className += " active";
        logo.className += " active";
    } else {
        navbar.className = "navbar";
        logo.className = "h2wheel";
    }
}