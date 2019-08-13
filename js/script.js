$(document).ready(function() {
  $(".click").click(function() {
    $(".initial-showing").toggle(2000);
    $(".initial-hidden").toggle(2000);
  });

  // $("#hide").click(function() {
  //   $(".initial-showing").fadeOut();
  //   $(".initial-hidden").fadeIn();
  // });
  //
  // $("#show").click(function() {
  //   $(".initial-hidden").fadeOut();
  //   $(".initial-showing").fadeIn();
  // });
});
