$(document).ready(function(){
  $('.slider').slick({
   
  });
  $('.menu').click(function(){
    $('.menu').toggleClass('opened');
    $('.nav-br-menu').toggleClass('opened');
    $('body').toggleClass('body_lock');
    $('.nav-bar').toggleClass('navb-opened');
  });
  $('.navb-opened a').click(function(){
    $('.menu').toggleClass('opened');
    $('.nav-br-menu').toggleClass('opened');
    $('body').toggleClass('body_lock');
    $('.nav-bar').toggleClass('navb-opened');
  });
});