/* global $ */

$(document).ready(function() {
  $('.slider').slick();
})

$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');
  })
})