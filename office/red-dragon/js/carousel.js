function initCarousels() {
  $('[data-carousel]').each(function () {
    const $rail = $(this);
    const $section = $rail.closest('section');

    if ($rail.hasClass('owl-carousel') && $.fn.owlCarousel) {
      const isCollections = $rail.hasClass('rd-collection-grid');
      const isProducts = $rail.hasClass('rd-product-grid--carousel');
      const isSeasonal = $rail.hasClass('rd-seasonal-cards');
      const isReviews = $rail.hasClass('rd-review-cards');
      $rail.owlCarousel({
        items: isReviews ? 1 : (isCollections ? 5 : (isProducts ? 6 : (isSeasonal ? 4 : 8.6))),
        margin: isSeasonal ? 0 : 20,
        loop: false,
        nav: false,
        dots: isReviews,
        autoplay: isReviews,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        responsive: {
          0: { items: isReviews ? 1 : (isCollections ? 1 : (isProducts ? 2 : (isSeasonal ? 1 : 4))), margin: isSeasonal ? 0 : 12 },
          576: { items: isReviews ? 1 : (isCollections ? 2 : (isProducts ? 3 : (isSeasonal ? 2 : 5))), margin: isSeasonal ? 0 : 16 },
          768: { items: isReviews ? 1 : (isCollections ? 3 : (isProducts ? 4 : (isSeasonal ? 3 : 6))), margin: isSeasonal ? 0 : 20 },
          1100: { items: isReviews ? 1 : (isCollections ? 5 : (isProducts ? 6 : (isSeasonal ? 4 : 8.6))), margin: isSeasonal ? 0 : 20 }
        }
      });

      $section.find('[data-carousel-prev]').on('click', function () {
        $rail.trigger('prev.owl.carousel');
      });
      $section.find('[data-carousel-next]').on('click', function () {
        $rail.trigger('next.owl.carousel');
      });
      return;
    }

    $rail.removeClass('owl-carousel').addClass('is-fallback-carousel');

    $rail.on('wheel', function (event) {
      if (Math.abs(event.originalEvent.deltaY) > Math.abs(event.originalEvent.deltaX)) {
        event.preventDefault();
        this.scrollLeft += event.originalEvent.deltaY;
      }
    });
    $section.find('[data-carousel-prev]').on('click', function () {
      $rail[0].scrollBy({ left: -$rail[0].clientWidth * 0.75, behavior: 'smooth' });
    });
    $section.find('[data-carousel-next]').on('click', function () {
      $rail[0].scrollBy({ left: $rail[0].clientWidth * 0.75, behavior: 'smooth' });
    });
  });
}
