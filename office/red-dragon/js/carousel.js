function initCarousels() {
  $('[data-carousel]').each(function () {
    const $rail = $(this);
    const $section = $rail.closest('section');
    const $previous = $section.find('[data-carousel-prev]');
    const $next = $section.find('[data-carousel-next]');

    function updateArrowState(previousDisabled, nextDisabled) {
      $previous.prop('disabled', previousDisabled).attr('aria-disabled', String(previousDisabled));
      $next.prop('disabled', nextDisabled).attr('aria-disabled', String(nextDisabled));
    }

    if ($rail.hasClass('owl-carousel') && $.fn.owlCarousel) {
      const isCollections = $rail.hasClass('rd-collection-grid');
      const isProducts = $rail.hasClass('rd-product-grid--carousel');
      const isSeasonal = $rail.hasClass('rd-seasonal-cards');
      const isReviews = $rail.hasClass('rd-review-cards');
      const isHero = $rail.hasClass('rd-banner-right-hero-slider');

      function updateOwlArrowState() {
        const carousel = $rail.data('owl.carousel');
        if (!carousel || carousel.current() === null || !($previous.length || $next.length)) return;

        const current = carousel.relative(carousel.current());
        updateArrowState(current <= carousel.minimum(true), current >= carousel.maximum(true));
      }

      if ($previous.length || $next.length) {
        $rail.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel resized.owl.carousel', updateOwlArrowState);
      }

      $rail.owlCarousel({
        items: (isReviews || isHero) ? 1 : (isCollections ? 5 : (isProducts ? 6 : (isSeasonal ? 4 : 8.6))),
        margin: (isSeasonal || isHero) ? 0 : 20,
        loop: false,
        nav: false,
        dots: isReviews || isHero,
        autoplay: isReviews || isHero,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        responsive: {
          0: { items: (isReviews || isHero) ? 1 : (isCollections ? 1.4 : (isProducts ? 1.4 : (isSeasonal ? 1.4 : 2))), margin: (isSeasonal || isHero) ? 0 : 12 },
          576: { items: (isReviews || isHero) ? 1 : (isCollections ? 2 : (isProducts ? 3 : (isSeasonal ? 2 : 5))), margin: (isSeasonal || isHero) ? 0 : 16 },
          768: { items: (isReviews || isHero) ? 1 : (isCollections ? 3 : (isProducts ? 4 : (isSeasonal ? 3 : 6))), margin: (isSeasonal || isHero) ? 0 : 20 },
          1100: { items: (isReviews || isHero) ? 1 : (isCollections ? 4 : (isProducts ? 4 : (isSeasonal ? 4 : 8.6))), margin: (isSeasonal || isHero) ? 0 : 20 }
        }
      });

      if ($previous.length || $next.length) {
        $previous.on('click', function () {
          if (!this.disabled) $rail.trigger('prev.owl.carousel');
        });
        $next.on('click', function () {
          if (!this.disabled) $rail.trigger('next.owl.carousel');
        });
        window.requestAnimationFrame(updateOwlArrowState);
      }
      return;
    }

    $rail.removeClass('owl-carousel').addClass('is-fallback-carousel');

    function updateFallbackArrowState() {
      const maxScroll = Math.max(0, $rail[0].scrollWidth - $rail[0].clientWidth);
      const currentScroll = Math.max(0, $rail[0].scrollLeft);
      updateArrowState(currentScroll <= 1, currentScroll >= maxScroll - 1);
    }

    $rail.on('scroll', updateFallbackArrowState);
    $rail.on('wheel', function (event) {
      if (Math.abs(event.originalEvent.deltaY) > Math.abs(event.originalEvent.deltaX)) {
        event.preventDefault();
        this.scrollLeft += event.originalEvent.deltaY;
      }
    });
    $previous.on('click', function () {
      if (!this.disabled) $rail[0].scrollBy({ left: -$rail[0].clientWidth * 0.75, behavior: 'smooth' });
    });
    $next.on('click', function () {
      if (!this.disabled) $rail[0].scrollBy({ left: $rail[0].clientWidth * 0.75, behavior: 'smooth' });
    });
    window.addEventListener('resize', updateFallbackArrowState, { passive: true });
    window.requestAnimationFrame(updateFallbackArrowState);
  });
}
