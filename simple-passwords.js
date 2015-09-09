// Simple Passwords
// Places an eye icon after a password field to show/hide the typed password.

/*
Author: Thomas Hare
Date: 09/08/15
Dependencies: Bootstrap Glyphicons, jQuery
*/

// Installation: Place a button after a password field with the class of "show-password" and type="button"

// automatically add glyphicon eye to the show-password button
$('.show-password').addClass('glyphicon glyphicon-eye-close');

// show password on mouse down of the eye button
$('.show-password').mousedown( function() {
  $('.show-password').prev().attr('type','text');
  $('.show-password').toggleClass('glyphicon-eye-close');
  $('.show-password').toggleClass('glyphicon-eye-open');
});

// hide password of mosueup of the eye button
$('.show-password').mouseup( function() {
  $('.show-password').prev().attr('type','password');
  $('.show-password').toggleClass('glyphicon-eye-close');
  $('.show-password').toggleClass('glyphicon-eye-open');
});