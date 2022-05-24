// Banner bottom part Slider

var swiper = new Swiper(".mySwiper-bannerpart", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
      },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 3,
            loop: false,
            autoplay: {
                delay: false
              }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3,
            loop: false,
            autoplay: {
                delay: false
              }
        },
    },
    pagination: {
        clickable: true,
    }
});


// Banner bottom part Slider at Collection

var swiper = new Swiper(".mySwiper-bannerpartCollection", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
      },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 3,
            loop: false,
            autoplay: {
                delay: false
              }
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3,
            loop: false,
            autoplay: {
                delay: false
              }
        },
    },
    pagination: {
        clickable: true,
    }
});


// Favorite Collection Slider

var swiper = new Swiper(".mySwiper-favoriteCollection", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// Overall Product section Slider

var swiper = new Swiper(".mySwiper-overallCollection", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// CollectionPack Slider

var swiper = new Swiper(".mySwiper-CollectionPack", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// Recipe Slider

var swiper = new Swiper(".mySwiper-recipe", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// Testimonial Slider
var swiper = new Swiper(".mySwiper-testimonal", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 5000,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
$(".mySwiper-testimonal").mouseenter(function() {
    swiper.autoplay.stop();
});

$(".mySwiper-testimonal").mouseleave(function() {
    swiper.autoplay.start();
});

// Open hover dropdown menu desktop
function getWindowWidth(){
    var actualSize = $(window).width();
    if(actualSize > 1024 ){
        $('ul.list-menu li details').on('mouseover', function() {
            $(this).attr('open', true);
        }).on('mouseleave', function() {
            $(this).attr('open', false);
        })
    }
}
getWindowWidth();
$(window).on('resize',function(){
    getWindowWidth();
})


// Discount Collection Slider

var swiper = new Swiper(".mySwiper-discountCollection", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});





// Recomandation product Slider
var swiper = new Swiper(".mySwiper-Recomandation", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 3
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});


// Product media slider
var swiper = new Swiper(".mySwiperProd2", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

// Bold collection title first word
$('.coll-title-style span').each(function(){
    var me = $(this);
    me.html(me.html().replace(/\b([äöüÄÖÜß\w\-]+)\b/g, '<cstyle class="font-style">$1</cstyle>'));
});


// Bio-schokolade-logo at description of product
$('.product__description.rte h3').append('<div class="bio-schokoloade-logo"></div>')
jQuery(".product__description.rte img").detach().appendTo('.product__description.rte .bio-schokoloade-logo')


document.dispatchEvent(new CustomEvent("swym:collections-loaded"));


// Collection Categories
document.getElementById("collection-categories").onchange = function() {
    if (this.selectedIndex!==-1) {
        window.location.href = this.value;
    }        
};
// Added Offset for links to ID
// $('ul.list-menu a').on('click',function(event){
//     console.log('test');
//     var headerHeight = $('sticky-header.header-wrapper').outerHeight();
//     var AnchorID = $(this).attr('href');
//     if(AnchorID.indexOf("#") >= 0){
//         var AnchorElement = AnchorID.split('#');
//         var ElementID = '#'+AnchorElement[1]+'';
//         var offset = $(ElementID).offset();
//         $('html, body').animate({
//             scrollTop: $(ElementID).offset().top-headerHeight
//         }, 100);
//     }
// })
