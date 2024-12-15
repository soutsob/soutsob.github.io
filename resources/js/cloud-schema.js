jQuery(document).ready(function ($) {
  $('.point.expanded .tit').on('click', function () {
        $(this).parent().toggleClass('active');
  })
});