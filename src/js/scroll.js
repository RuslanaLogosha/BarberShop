jQuery(function ($) {
  // The speed of the scroll in milliseconds
  const speed = 1000;

  // Find links that are #anchors and scroll to them
  $('a[href^="#"]')
    .not('.lp-pom-form .lp-pom-button')
    .unbind('click.smoothScroll')
    .bind('click.smoothScroll', function (event) {
      event.preventDefault();
      const href = $(this).attr('href').split('#');
      $('html, body').animate(
        { scrollTop: $(`#${href[1]}`).offset().top },
        speed,
      );
    });
});
