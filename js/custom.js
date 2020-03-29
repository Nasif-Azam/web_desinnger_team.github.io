// Loader
var preloader = document.getElementById('loading');

function loadingFunction() {
  preloader.style.display = 'none';
}
// End_Loader

// Navbar
function toggle() {
  var header = document.getElementById("header")
  header.classList.toggle('active')
}
// End_Navbar

// Counter
$(document).ready(function () {

  $('.count').counterUp({
    delay: 10,
    time: 3000
  })
});
// End_Counter

// Back_To_Top

// Get The Button
topbutton = document.getElementById("backBtn");

// When the user scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  }
  else{
    topbutton.style.display = "none";
  }
}
// When Click This Button
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// End_Back_To_Top


// // Disable form submissions if there are invalid fields
// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Get the forms we want to add validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();


!(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

    // Initi AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out"
    });

})(jQuery);