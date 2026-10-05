function initNavigation() {
  const $drawer = $('#rd-mobile-nav');
  const $menuTrigger = $('[data-menu-toggle]');
  const $submenuTrigger = $('[data-submenu-toggle]');
  const $mobileSubmenuTrigger = $('[data-mobile-submenu-toggle]');
  const $primaryNav = $('.rd-primary-nav');
  const $megaMenu = $('[data-mega-menu]');
  const $megaBackdrop = $('[data-mega-backdrop]');
  const $mobileMega = $('[data-mobile-mega]');
  const $mobileMegaToggle = $('[data-mobile-mega-toggle]');
  const $mobileMegaContent = $('[data-mobile-mega-content]');
  const $mobileMegaBack = $('[data-mobile-mega-back]');
  if (!$drawer.length || !$menuTrigger.length) return;

  const megaContent = {
    chilli: '<h2>Chilli Seeds</h2><a href="#">Annuum</a><a href="#">Baccatum</a><a href="#">Chinense</a><a href="#">Mild to Super Hot</a><a href="#">Variety Packs</a>',
    vegetable: '<h2>Vegetable Seeds</h2><a href="#">Tomato Seeds</a><a href="#">Root Vegetables</a><a href="#">Leafy Greens</a><a href="#">Beans &amp; Peas</a><a href="#">Cucumber Seeds</a>',
    herb: '<h2>Herb Seeds</h2><a href="#">Basil</a><a href="#">Coriander</a><a href="#">Mint</a><a href="#">Parsley</a><a href="#">Thyme</a>',
    flower: '<h2>Flower Seeds</h2><a href="#">Annual Flowers</a><a href="#">Perennials</a><a href="#">Wildflower Seeds</a><a href="#">Pollinator Friendly</a>',
    collections: '<h2>Collections &amp; Tins</h2><a href="#">Chilli Collections</a><a href="#">Vegetable Collections</a><a href="#">Grow in a Tin</a><a href="#">Gift Sets</a>',
    new: '<h2>New Arrivals</h2><a href="#">Latest Seeds</a><a href="#">New Chilli Varieties</a><a href="#">New Collections</a>',
    guides: '<h2>Growing Guides</h2><a href="#">Sowing Calendar</a><a href="#">Seed Starting</a><a href="#">Growing Tips</a><a href="#">Harvesting Guides</a>'
  };

  function setMegaContent(key) {
    if (!megaContent[key]) return;
    $mobileMegaContent.html(megaContent[key]);
    const $source = $('<div>').html(megaContent[key]);
    const title = $source.find('h2').prop('outerHTML') || '';
    const links = $source.find('a').toArray();
    const columns = [[], [], []];
    links.forEach(function (link, index) { columns[index % 3].push(link.outerHTML); });
    $megaMenu.find('.rd-mega-menu__columns').html(
      '<div>' + title + columns[0].join('') + '</div>' +
      '<div>' + columns[1].join('') + '</div>' +
      '<div>' + columns[2].join('') + '</div>' +
      '<img src="assets/reference/red-dragon-mega-menu.jpg" alt="Fresh red chillies in a basket" width="320" height="320">'
    );
  }

  if ($mobileMega.length) {
    $mobileMegaToggle.on('click', function () {
      setMegaContent($(this).data('mobile-mega-key'));
      $mobileMega.removeAttr('hidden').addClass('is-open');
    });
    $mobileMegaBack.on('click', function () {
      $mobileMega.removeClass('is-open');
      window.setTimeout(function () { $mobileMega.attr('hidden', true); }, 340);
    });
  }

  let lastFocusedElement = null;
  let megaCloseTimer;
  let drawerCloseTimer;

  function closeMegaMenu() {
    clearTimeout(megaCloseTimer);
    $('[data-mega-trigger]').removeClass('is-active');
    if ($megaMenu.is('[hidden]')) return;
    $megaMenu.addClass('is-closing');
    $megaBackdrop.addClass('is-closing');
    window.setTimeout(function () {
      $megaMenu.attr('hidden', true).removeClass('is-closing');
      $megaBackdrop.attr('hidden', true).removeClass('is-closing');
    }, 220);
  }

  function openMegaMenu($item) {
    clearTimeout(megaCloseTimer);
    $megaMenu.removeAttr('hidden').removeClass('is-closing');
    $megaBackdrop.removeAttr('hidden').removeClass('is-closing');
    $('[data-mega-trigger]').removeClass('is-active');
    $item.addClass('is-active');
  }

  function scheduleMegaClose() {
    megaCloseTimer = setTimeout(closeMegaMenu, 120);
  }

  function closeMenu() {
    clearTimeout(drawerCloseTimer);
    $menuTrigger.attr('aria-expanded', 'false');
    $('body').removeClass('rd-menu-open');
    if (lastFocusedElement) lastFocusedElement.focus();
    drawerCloseTimer = window.setTimeout(function () { $drawer.attr('hidden', true); }, 340);
  }

  $menuTrigger.on('click', function () {
    clearTimeout(drawerCloseTimer);
    lastFocusedElement = this;
    $drawer.removeAttr('hidden');
    $(this).attr('aria-expanded', 'true');
    $('body').addClass('rd-menu-open');
    $drawer.find('a, button').first().trigger('focus');
  });

  $drawer.on('click', '[data-menu-close]', closeMenu).on('click', function (event) {
    if (event.target === this) closeMenu();
  });

  $submenuTrigger.on('click', function () {
    const $button = $(this);
    const isOpen = $button.attr('aria-expanded') === 'true';
    $button.attr('aria-expanded', String(!isOpen));
    $('#' + $button.attr('aria-controls')).attr('hidden', isOpen);
  });

  $mobileSubmenuTrigger.on('click', function () {
    const $button = $(this);
    const isOpen = $button.attr('aria-expanded') === 'true';
    $button.attr('aria-expanded', String(!isOpen));
    $('#' + $button.attr('aria-controls')).attr('hidden', isOpen);
  });

  if ($primaryNav.length && $megaMenu.length) {
    $('[data-mega-trigger]').on('mouseenter focusin', function () {
      setMegaContent($(this).data('mega-key'));
      openMegaMenu($(this));
    }).on('mouseleave', scheduleMegaClose).on('focusout', function (event) {
      if (!$primaryNav[0].contains(event.relatedTarget)) scheduleMegaClose();
    });
    $primaryNav.on('mouseenter focusin', function () { clearTimeout(megaCloseTimer); }).on('mouseleave', scheduleMegaClose);
    $megaMenu.on('mouseenter focusin', function () { clearTimeout(megaCloseTimer); }).on('mouseleave', scheduleMegaClose);
    $megaBackdrop.on('click', closeMegaMenu);
  }

  $(document).on('keydown', function (event) {
    if (event.key === 'Escape' && !$drawer.is('[hidden]')) closeMenu();
    if (event.key === 'Escape' && !$megaMenu.is('[hidden]')) closeMegaMenu();
  });
}
