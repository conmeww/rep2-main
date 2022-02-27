////////////////////////////////////////////////////////////////////////////////////////////////////
// slider timeline
var swiper = new Swiper(".swiper-container-timeline", {
  pagination: {
    el: ".swiper-pagination-top",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },

  loop: true,
  watchSlidesProgress: true,
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// slider ( phone frame )
var swiperReviews = new Swiper(".swiper-container__reviews", {
  slidesPerView: 1,
  spaceBetween: 1,
  //loop:true,
  centeredSlides: true,
  //slideToClickedSlide:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
////////////////////////////////////////////////////////////////////////////////////////////////////
// search dropdown
const searchDropDown = document.querySelector(".search--dropdown");
const openSearchBtn = document.getElementById("open-search-window");
const searchDropDownBtn = document.getElementById("search--dropdown-btn");
const searchDropDownInput = document.getElementById("search--dropdown-input");
if (openSearchBtn || false) {
  openSearchBtn.addEventListener("click", function () {
    searchDropDown.classList.add("search--dropdown--active");
    console.log(searchDropDown);
  });
} else {
  console.log(1);
}

/// hide search box
document.addEventListener("click", function (e) {
  if (
    e.target != openSearchBtn &&
    searchDropDown.classList.contains("search--dropdown--active") &&
    e.target != searchDropDownBtn &&
    e.target != searchDropDownInput &&
    e.target != searchDropDown
  ) {
    searchDropDown.classList.remove("search--dropdown--active");
    console.log(searchDropDownBtn);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// modal windows
const openModalBtn = document.getElementById("contact-me-btn");
const modalContainer = document.getElementById("modal--contact-me");
const modalSuccess = document.getElementById("modal--success");
const showModal = () => {
  openModalBtn.addEventListener("click", () => {
    modalContainer.classList.add("show-modal");
  });
};

showModal("open-modal", "modal--contact-me");

const closeBtn = document.querySelectorAll(".close-modal");
function closeModal() {
  const modalContainer = document.getElementById("modal--contact-me");
  modalContainer.classList.remove("show-modal");
}

closeBtn.forEach((c) => c.addEventListener("click", closeModal));

const btnModalSubmit = document.querySelector(".btn--modal");

////////////////////////////////////////////////////////////////////////////////////////////////////
// input mask
$(document).ready(function () {
  $("#phone").inputmask("+7(999) 999-99-99");
});

$("#btn--modal").click(function (e) {
  if (
    $("#phone").inputmask("isComplete") &&
    $("#name").val().length !== 0 &&
    $("#agreement-checkbox").is(":checked")
  ) {
    e.preventDefault();

    closeModal();

    $("#modal--success").addClass("modal--success--visible");

    setTimeout(function () {
      $("#modal--success").removeClass("modal--success--visible");
    }, 2000);
  } else {
    return false;
  }
});

/// clear fields after modal is closed
$("#close-modal").click(function () {
  $("#phone").val("");
  $("#name").val("");
});

$(document).ready(function () {
  $("#phone--1").inputmask("+7(999) 999-99-99");
});

$("#btn--modal--1").click(function (e) {
  if (
    $("#phone--1").inputmask("isComplete") &&
    $("#name--1").val().length !== 0
  ) {
    $("#modal--success--1").addClass("modal--success--visible");

    setTimeout(function () {
      $("#modal--success--1").removeClass("modal--success--visible");
    }, 2000);
  } else {
    return false;
  }
});
$(function () {
  $("form").submit(function (e) {
    $("#modal--success--1").addClass("modal--success--visible");
    setTimeout(function () {
      $("#modal--success--1").removeClass("modal--success--visible");
    }, 2000);
    $("#phone--1").val("");
    $("#name--1").val("");
    e.preventDefault(e);
  });
});

function fontsStyle(params) {
  let file_content = fs.readFileSync(source_folder + "/scss/fonts.scss");
  if (file_content == "") {
    fs.writeFile(source_folder + "/scss/fonts.scss", "", cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split(".");
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
              source_folder + "/scss/fonts.scss",
              '@include font("' +
                fontname +
                '", "' +
                fontname +
                '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

function cb() {}

////////////////////////////////////////////////////////////////////////////////////////////////////
// mobile dropdown

$(function () {
  $(".header__burger--2").on("click", function () {
    $(this).toggleClass("active");
    $(".nav-mobile--2").slideToggle();
    $(".header__icons--2").toggleClass("icons-top--fixed");
    $(".sidebar").toggleClass("sidebar__invisible");
    //$(".tags").toggleClass("main__invisible");
    $(".content--two-cols").toggleClass("main__invisible");
    $(".content__full-width").toggleClass("main__invisible");
    $(".header__wrapper").toggleClass("header--mobile-fixed");
  });

  $(window).on("load resize", function () {
    var w = $(window).width();

    var x = 1366;
    if (w >= x) {
      $(".nav-mobile--2").addClass("show");
    } else {
      $(".nav-mobile--2").removeClass("show");
    }
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// slider ( only for mobile ) NEWS

/* On Load
 **************************************************************/

////////////////////////////////////////////////////////////////////////////////////////////////////
// fix sidebar on scroll
var lastscroll = $(window).scrollTop();
$(window).scroll(function () {
  if (lastscroll > $(window).scrollTop()) {
    stickyleftcol("up", lastscroll - $(window).scrollTop());
  } else {
    stickyleftcol("down", $(window).scrollTop() - lastscroll);
  }
  lastscroll = $(window).scrollTop();
});
function stickyleftcol(napravlenie, sceollpx) {
  if ($("div").is(".sticky")) {
    var raznh = $(".sticky").outerHeight() - window.innerHeight;
    if (raznh < 0) {
      raznh = 0;
    }
    if (napravlenie == "down") {
      $(".sticky").css("top", function (index, value) {
        var newSize = Number(value.replace("px", "")) - sceollpx;
        if (newSize < -raznh) {
          newSize = -raznh;
        }
        return newSize;
      });
    } else if (napravlenie == "up") {
      $(".sticky").css("top", function (index, value) {
        var newSize = Number(value.replace("px", "")) + sceollpx;
        if (newSize > 0) {
          newSize = 0;
        }
        return newSize;
      });
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// header main menu
// $(function () {
//   $(".header__nav__icon").on("click", function () {
//     $(this).toggleClass("active");
//     $(".header__mob-menu").slideToggle();
//     $(".header__icons-top").toggleClass("icons-top--fixed");
//     $(".sidebar").toggleClass("sidebar__invisible");
//     $(".main").toggleClass("main__invisible");
//     $(".content").toggleClass("content--mobile-fixed");
//     $(".header__wrapper").toggleClass("header--mobile-fixed");
//   });

//   $(window).on("load resize", function () {
//     var w = $(window).width();

//     var x = 1366;
//     if (w >= x) {
//       $(".header__mob-menu").addClass("show");
//     } else {
//       $(".header__mob-menu").removeClass("show");
//     }
//   });
// });
$(function () {
  $(".header__burger--1").on("click", function () {
    $(this).toggleClass("active");
    $(".nav-mobile--1").slideToggle();
    $(".header__icons--1").toggleClass("icons-top--fixed");
    $(".sidebar").toggleClass("sidebar__invisible");
    $(".main").toggleClass("main__invisible");
    $(".content").toggleClass("content--mobile-fixed");
    $(".header__wrapper").toggleClass("header--mobile-fixed");
  });

  $(window).on("load resize", function () {
    var w = $(window).width();

    var x = 1024;
    if (w >= x) {
      $(".nav-mobile--1").addClass("show");
    } else {
      $(".nav-mobile--1").removeClass("show");
    }
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// SHOW HEADER ON SCROLL DOWN
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 0) {
//     $(".header--1").removeClass("header--basic");
//   }
// });
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
var didScroll;
var lastScrollTop = 0;
var delta = 3;
var navbarHeight = $(".header--1").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $(".header--1").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $(".header--1").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}
/// header 2 drop down on scroll

var didScroll2;
var lastScrollTop2 = 0;
var delta2 = 3;
var navbarHeight2 = $(".header--2").outerHeight();

$(window).scroll(function (event) {
  didScroll2 = true;
});

setInterval(function () {
  if (didScroll2) {
    hasScrolled2();
    didScroll2 = false;
  }
}, 250);

function hasScrolled2() {
  var st2 = $(this).scrollTop();

  if (Math.abs(lastScrollTop2 - st2) <= delta2) return;

  if (st2 > lastScrollTop2 && st2 > navbarHeight2) {
    // Scroll Down
    $(".header--2").removeClass("nav-down--2").addClass("nav-up--2");
  } else {
    // Scroll Up
    if (st2 + $(window).height() < $(document).height()) {
      $(".header--2").removeClass("nav-up--2").addClass("nav-down--2");
    }
  }

  lastScrollTop2 = st2;
}

$(".price_range").ionRangeSlider({
  type: "double",
  min: 0,
  max: 154600,
  skin: "round",
  hide_from_to: true,
  hide_min_max: true,
  onChange: function (data) {
    $("#range_price_from").val(data.from);
    $("#range_price_to").val(data.to);
  },
});

$(".area_range").ionRangeSlider({
  type: "double",
  min: 0,
  max: 2000,
  skin: "round",
  hide_from_to: true,
  hide_min_max: true,
  onChange: function (data) {
    $("#range_area_from").val(data.from);
    $("#range_area_to").val(data.to);
  },
});

$(".power_range").ionRangeSlider({
  type: "double",
  min: 0,
  max: 2000,
  skin: "round",
  hide_from_to: true,
  hide_min_max: true,
  onChange: function (data) {
    $("#range_power_from").val(data.from);
    $("#range_power_to").val(data.to);
  },
});

$(".noize_range").ionRangeSlider({
  type: "double",
  min: 0,
  max: 2000,
  skin: "round",
  hide_from_to: true,
  hide_min_max: true,
  onChange: function (data) {
    $("#range_noize_from").val(data.from);
    $("#range_noize_to").val(data.to);
  },
});
/// accordion on mobile
function swiperMode() {
  let swiper = Swiper;
  let init = false;

  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 640px)");
  let tablet = window.matchMedia("(min-width: 640px) and (max-width: 1024px)");
  let desktop = window.matchMedia("(min-width: 1025px)");

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".news__swiper-container", {
        // slidesPerView: 3,

        disableOnInteraction: false,

        centeredSlides: true,
        loop: false,
        spaceBetween: 10,
        direction: "horizontal",
        effect: "coverflow",

        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        slidesPerView: "auto",
        centeredSlides: true,

        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },

        breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "coverflow",

            coverflowEffect: {
              rotate: 0,
              stretch: 20,
              depth: 120,
              modifier: 3,
              slideShadows: false,
            },
          },
          440: {
            spaceBetween: 10,
          },
        },
      });
    }
  }

  // Disable (for tablet)
  else if (tablet.matches) {
    swiper.destroy();
    init = false;
  }

  // Disable (for desktop)
  else if (desktop.matches) {
    swiper.destroy();
    init = false;
  }
}

let swiperInfoBlockImgs = document.querySelector(".info-block--imgs");
if (swiperInfoBlockImgs || false) {
  function swiperMode2() {
    let swiper = Swiper;
    let init = false;

    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 640px)");
    let tablet = window.matchMedia(
      "(min-width: 640px) and (max-width: 1024px)"
    );
    let desktop = window.matchMedia("(min-width: 1025px)");

    // Enable (for mobile)
    if (mobile.matches) {
      if (!init) {
        init = true;
        swiper = new Swiper(".info-block--imgs", {
          slidesPerView: 1,

          disableOnInteraction: false,

          centeredSlides: false,
          loop: false,
          spaceBetween: 10,
          direction: "horizontal",
          //effect: "coverflow",

          pagination: {
            el: ".swiper-pagination--mobile",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 1800,
            disableOnInteraction: false,
          },

          loop: true,
          watchSlidesProgress: true,
          slidesPerView: "auto",
          centeredSlides: true,

          // coverflowEffect: {
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 0,
          //   modifier: 0,
          //   slideShadows: false,
          // },

          breakpoints: {
            767: {
              slidesPerView: 1,
              spaceBetween: 0,
              centeredSlides: true,
              //effect: "coverflow",

              // coverflowEffect: {
              //   rotate: 0,
              //   stretch: 20,
              //   depth: 120,
              //   modifier: 3,
              //   slideShadows: false,
              // },
            },
            440: {
              spaceBetween: 10,
            },
          },
        });
      }
    }

    // Disable (for tablet)
    else if (tablet.matches) {
      swiper.destroy();
      init = false;
    }

    // Disable (for desktop)
    else if (desktop.matches) {
      swiper.destroy();
      init = false;
    }
  }
}

window.addEventListener("load", function () {
  swiperMode2();
});
/* On Resize
 **************************************************************/
window.addEventListener("resize", function () {
  swiperMode2();
});
window.addEventListener("load", function () {
  swiperMode2();
});
/* On Resize
 **************************************************************/
window.addEventListener("resize", function () {
  swiperMode2();
});
//////////////////

/* Which media query
 **************************************************************/
let swiperNewsContainer = document.querySelector(".news__swiper-container");
if (swiperNewsContainer || false) {
  function swiperMode() {
    var swiper = Swiper;
    var init = false;
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 640px)");
    let tablet = window.matchMedia(
      "(min-width: 640px) and (max-width: 1024px)"
    );
    let desktop = window.matchMedia("(min-width: 1025px)");

    // Enable (for mobile)
    if (mobile.matches) {
      if (!init) {
        init = true;
        swiper = new Swiper(".news__swiper-container", {
          // slidesPerView: 3,

          disableOnInteraction: false,

          centeredSlides: true,
          loop: false,
          spaceBetween: 10,
          direction: "horizontal",
          effect: "coverflow",

          // navigation: {
          //     nextEl: '.swiper-button-next',
          //     prevEl: '.swiper-button-prev',
          // },
          slidesPerView: "auto",
          centeredSlides: true,

          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          },

          breakpoints: {
            767: {
              slidesPerView: 1,
              spaceBetween: 0,
              effect: "coverflow",

              coverflowEffect: {
                rotate: 0,
                stretch: 20,
                depth: 120,
                modifier: 3,
                slideShadows: false,
              },
            },
            440: {
              spaceBetween: 10,
            },
          },
        });
      }
    }

    // Disable (for tablet)
    else if (tablet.matches) {
      swiper.destroy();
      init = false;
    }

    // Disable (for desktop)
    else if (desktop.matches) {
      swiper.destroy();
      init = false;
    }
  }
} else {
  console.log(1);
}

/* On Load
 **************************************************************/
window.addEventListener("load", function () {
  swiperMode();
});

/* On Resize
 **************************************************************/
window.addEventListener("resize", function () {
  swiperMode();
});
///// OPEN FILTER
const btnFilterDesktop = document.getElementById("btn-filter-desktop");
const btnFilterMobile = document.getElementById("btn-filter-mob");
const filterSidebar = document.getElementById("filter-sidebar");
const btnDoFilter = document.getElementById("btn-do-filter");
const btnCloseFilter = document.getElementById("btn-close-filter");

function openFilterMob() {
  filterSidebar.classList.add("filter--open");
}
function closeFilter() {
  filterSidebar.classList.remove("filter--open");
}
if (btnFilterMobile || false) {
  btnFilterMobile.addEventListener("click", openFilterMob);
} else {
  console.log(1);
}
///
if (btnFilterDesktop || false) {
  btnFilterDesktop.addEventListener("click", openFilterMob);
} else {
  console.log(1);
}
///
if (btnCloseFilter || false) {
  btnCloseFilter.addEventListener("click", closeFilter);
} else {
  console.log(1);
}

///
if (btnDoFilter || false) {
  btnDoFilter.addEventListener("click", closeFilter);
} else {
  console.log(1);
}

////////////////////////// DETAILED PAGE
// main product gallery

$(function () {
  var $image = $(".product-image .image");
  var currImage;
  $image.css("background-image", "url(" + $("#first-img").attr("src") + ")");
  //$("#first-img").addClass("thumbnail--active");
  $(".product-thumbnails img").on("click", function () {
    $image.css("background-image", "url(" + $(this).attr("src") + ")");
    $(".product-thumbnails img").removeClass("thumbnail--active");
    $(this).addClass("thumbnail--active");
    currImage = "";
  });
  $(".product-thumbnails img").hover(
    function () {
      currImage = $image.css("background-image");
      $image.css("background-image", "url(" + $(this).attr("src") + ")");
    },
    function () {
      if (currImage !== "") {
        $image.css("background-image", currImage);
      }
    }
  );

  // Zoom in on mouseover and zoom out on mouseout
  $(".product-image .image")
    .on("mouseover", function () {
      $(this).css("transform", "scale(2)");
    })
    .on("mouseout", function () {
      $(this).css("transform", "scale(1.0)");
    })
    .on("mousemove", function (e) {
      $(this).css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%",
      });
    });
});
////////////////// review

$("#btn--modal").click(function (e) {
  if (
    $("#phone").inputmask("isComplete") &&
    $("#name").val().length !== 0 &&
    $("#agreement-checkbox").is(":checked")
  ) {
    e.preventDefault();

    closeModal();

    $("#modal--success").addClass("modal--success--visible");

    setTimeout(function () {
      $("#modal--success").removeClass("modal--success--visible");
    }, 2000);
  } else {
    return false;
  }
});

$("#btn-add-review").click(function (e) {
  if (
    $("#name-review").val().length !== 0 &&
    $("#review-text").val().length !== 0 &&
    $("input[name='rating']").is(":checked") &&
    $("#agreement-checkbox-2").is(":checked")
  ) {
    alert(1);
    $("#name-review").val("");
    $("#review-text").val("");
    $("#agreement-checkbox-2").prop("checked", false);
    $("input[type=radio]").prop("checked", false);
    $(".rating > input:checked ~ label").css("color", "#ddd");
  } else {
    return false;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////
// product card slider

/////////
$(document).ready(function () {
  $(".product-cards-slider").slick({
    centerMode: false,

    slidesToShow: 2,
    prevArrow: $(".products-slider__prev"),
    nextArrow: $(".products-slider__next"),
  });
});
