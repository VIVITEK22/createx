const colors = {
  green: "#03CEA4",
  blue: "#5A87FC",
  yellow: "#F89828",
  pink: "#F52F6E",
  violet: "#7772F1"
};

const swiper = new Swiper(".team__body", {
  direction: "horizontal",
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  navigation: {
    prevEl: ".team__btn-prev",
    nextEl: ".team__btn-next"
  }
});

const swiper2 = new Swiper(".reviews__body", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  navigation: {
    prevEl: ".reviews__btn-prev",
    nextEl: ".reviews__btn-next"
  },
  pagination: {
    el: ".reviews__pagination"
  }
});

$(function() {
  for (let li of document.querySelectorAll(".directions__card")) {
    let tag = li.querySelector(".directions__card-tag");

    if (tag !== null) {
      let bg = tag.classList[tag.classList.length - 1];
      tag.style.background = colors[bg];
    }
  }

  for (let li of document.querySelectorAll(".directions__nav-item")) {
    li.onclick = function(e) {
      e.preventDefault()
      if (li.classList.length == 1) {
        document.querySelector(".directions__item--active").classList.remove("directions__item--active");
        li.classList.add("directions__item--active");
      }
    }
  }

  $(".program__item").on("click", function() {
    if ($(this).hasClass("program__item--active")) {
      $(this).find(".program__item-content").slideUp();
      $(this).removeClass("program__item--active");
    } else {
      $(".program__item").removeClass("program__item--active");
      $(".program__item").find(".program__item-content").slideUp();
      console.log($(this).find(".program__item-content"));
      $(this).addClass("program__item--active");
      $(this).find(".program__item-content").slideDown();
    }
  });

  $(".header__burger").on("click", function() {
    $(".header__top").toggleClass("header__top--active");
    $(".header__top-dark").toggleClass("header__top-dark--active");
  });

  let callback = () => {
    if (($('.header__top').hasClass('header__top--active')) === false && $(window).scrollTop() > 0) {
        $('.header__burger').addClass('header__burger--active');
    } else {
        $('.header__burger').removeClass('header__burger--active');
    }
}
$(window).scroll(callback);
});