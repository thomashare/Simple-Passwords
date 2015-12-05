// Simple Passwords [start]
// Places an eye icon after a password field to show/hide the typed password.

/*
Author: Thomas Hare
Date: 09/08/15
Dependencies: Bootstrap Glyphicons, jQuery
*/

// Installation: Place a button after a password field with the class of "show-password" and type="button"

// automatically add glyphicon eye to the show-password button
$('.show-password').addClass('glyphicon glyphicon-eye-close');

$('.show-password').attr('title','Hold to show password');

// show password on mouse down of the eye button
$('.show-password').mousedown( function() {
  $('.show-password').prev('input').attr('type','text');
  $('.show-password').parent().prev().last('input').attr('type','text');
  $('.show-password').removeClass('glyphicon-eye-close');
  $('.show-password').addClass('glyphicon-eye-open');
});

// hide password of mouse up of the eye button
$('.show-password').mouseup( function() {
  $('.show-password').prev('input').attr('type','password');
  $('.show-password').parent().prev().last('input').attr('type','password');
  $('.show-password').addClass('glyphicon-eye-close');
  $('.show-password').removeClass('glyphicon-eye-open');
});

// hide password of mouse out of the eye button
$('.show-password').mouseleave( function() {
  $('.show-password').prev('input').attr('type','password');
  $('.show-password').parent().prev().last('input').attr('type','password');
  $('.show-password').addClass('glyphicon-eye-close');
  $('.show-password').removeClass('glyphicon-eye-open');
});

// Simple Passwords [end]
