$(document).ready(function() {
  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 3000,
    pagination: true,
    hashchange: true,
    scrollable: true
  });

  $(function() {
    $('#slides').superslides({
      hashchange: true
    });
  });
});
