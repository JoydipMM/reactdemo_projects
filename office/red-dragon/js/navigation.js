function initNavigation() {
  const $searchToggle = $('[data-search-toggle]');
  const $searchModal = $('[data-search-modal]');
  const $searchClose = $('[data-search-close]');
  let searchReturnFocus = null;

  function closeSearchModal(restoreFocus) {
    if (!$searchModal.hasClass('is-open')) return;
    $searchModal.removeClass('is-open').removeAttr('role aria-modal aria-label');
    $('body').removeClass('rd-search-open');
    $searchToggle.attr('aria-expanded', 'false');
    if (restoreFocus !== false && searchReturnFocus) searchReturnFocus.focus();
  }

  if ($searchToggle.length && $searchModal.length) {
    $searchToggle.on('click', function () {
      searchReturnFocus = this;
      $searchModal.addClass('is-open').attr({ role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Search' });
      $('body').addClass('rd-search-open');
      $searchToggle.attr('aria-expanded', 'true');
      $searchModal.find('input[type="search"]').trigger('focus');
    });

    $searchClose.on('click', function () { closeSearchModal(); });
    $searchModal.on('click', function (event) {
      if (event.target === this) closeSearchModal();
    });

    $(window).on('resize.searchModal', function () {
      if (window.innerWidth > 991) closeSearchModal(false);
    });
  }

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

  function getMegaPanel(key) {
    return $megaMenu.find('[data-mega-panel]').filter(function () {
      return $(this).data('mega-panel') === key;
    }).first();
  }

  function showMobileMegaPanel(key) {
    const $panel = getMegaPanel(key);
    if (!$panel.length) return;
    $mobileMegaContent.empty().append($panel.clone().removeAttr('hidden'));
  }

  if ($mobileMega.length) {
    $mobileMegaToggle.on('click', function () {
      showMobileMegaPanel($(this).data('mobile-mega-key'));
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
    const key = $item.data('mega-key');
    $megaMenu.find('[data-mega-panel]').attr('hidden', true);
    getMegaPanel(key).removeAttr('hidden');
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
      openMegaMenu($(this));
    }).on('mouseleave', scheduleMegaClose).on('focusout', function (event) {
      if (!$primaryNav[0].contains(event.relatedTarget)) scheduleMegaClose();
    });
    $primaryNav.on('mouseenter focusin', function () { clearTimeout(megaCloseTimer); }).on('mouseleave', scheduleMegaClose);
    $megaMenu.on('mouseenter focusin', function () { clearTimeout(megaCloseTimer); }).on('mouseleave', scheduleMegaClose);
    $megaBackdrop.on('click', closeMegaMenu);
  }

  $(document).on('keydown', function (event) {
    if (event.key === 'Escape' && $searchModal.hasClass('is-open')) {
      closeSearchModal();
      return;
    }
    if (event.key === 'Tab' && $searchModal.hasClass('is-open')) {
      const $focusable = $searchModal.find('input, button').filter(':visible:not(:disabled)');
      const first = $focusable[0];
      const last = $focusable[$focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    if (event.key === 'Escape' && !$drawer.is('[hidden]')) closeMenu();
    if (event.key === 'Escape' && !$megaMenu.is('[hidden]')) closeMegaMenu();
  });
}
