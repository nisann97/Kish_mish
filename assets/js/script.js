"use strict";


const sideBar = document.querySelector(".sidebar");
const rightOpen = document.querySelector(".fa-bars.open");
const rightClose = document.querySelector(".fa-square-xmark.right");
const rightHome = document.querySelector(".fa-house.right");
const rightQuesion = document.querySelector(".fa-question.right");
const rightInsights = document.querySelector(".fa-square-poll-vertical.right");
const rightDocs = document.querySelector(".fa-file.right");
const rightMenu = document.querySelector(".text-right");



rightOpen.addEventListener("click", function () {

  sideBar.classList.add("active");
  rightOpen.classList.add("d-none");
  rightClose.classList.remove("d-none");
  rightMenu.classList.remove("d-none");
  rightHome.classList.remove("close");
  rightHome.classList.add("active")
  rightQuesion.classList.remove("close");
  rightQuesion.classList.add("active")
  rightInsights.classList.remove("close");
  rightInsights.classList.add("active")
  rightDocs.classList.remove("close");
  rightDocs.classList.add("active")

})

rightClose.addEventListener("click", function () {
  sideBar.classList.remove("active");
  rightOpen.classList.remove("d-none");
  rightClose.classList.add("d-none");
  rightMenu.classList.add("d-none");
  rightHome.classList.add("close");
  rightHome.classList.remove("active")
  rightSearch.classList.add("close");
  rightSearch.classList.remove("active")
  rightInsights.classList.add("close");
  rightInsights.classList.remove("active")
  rightDocs.classList.add("close");
  rightDocs.classList.remove("active")

})


// SLIDER

let leftIcon = document.querySelector(".slider .icons .left-icon");
let rightIcon = document.querySelector(".slider .icons .right-icon");


function rightSlider() {
  let activeImage = document.querySelector(".active-image");
  activeImage.classList.remove("active-image");
  if (activeImage.nextElementSibling != null) {
    activeImage.nextElementSibling.classList.add("active-image");
  } else {
    rightIcon.parentNode.nextElementSibling.firstElementChild.classList.add("active-image");
  }
}


function leftSlider() {
  let activeImage = document.querySelector(".active-image");
  activeImage.classList.remove("active-image");
  if (activeImage.previousElementSibling != null) {
    activeImage.previousElementSibling.classList.add("active-image");
  } else {
    this.parentNode.nextElementSibling.lastElementChild.classList.add("active-image");
  }
}

rightIcon.addEventListener("click", rightSlider);

leftIcon.addEventListener("click", leftSlider);

rightIcon.addEventListener("mouseover", rightSlider);
leftIcon.addEventListener("mouseover", leftSlider);


setInterval(() => {
  rightSlider();
}, 2000);


//#region sidebar
$(".bars").click(function (e) {
  e.preventDefault();
  $(".right-side-menu").addClass("opened");
  $(".right-side-menu").removeClass("closed");
});

$(".close").click(function (e) {
  e.preventDefault();
  $(".right-side-menu").removeClass("opened");
  $(".right-side-menu").addClass("closed");
});

//#endregion



var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide-row");

btn[0].onclick = function () {
  slide.style.transform = "translateX(-0px)";
}
btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
}
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
}
btn[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";
}


//search

var searchBox = $(".box");
$('.icon-search, .icon-close').on("click", function () {
  searchBox.toggleClass("open");

})

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});


//endregion

//#region back-to-top-button
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

//#endregion
//user dropdown

let dropdowns = document.querySelector(".dropdown-menu")

// INSTAGRAM

$(document).ready(function () {
  $(".instagram").owlCarousel(
    {
      items: 4,
      loop: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    }
  );


});


