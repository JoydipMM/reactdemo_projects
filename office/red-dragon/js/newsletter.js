function initNewsletter() {
  const $forms = $('[data-newsletter-form]');
  if (!$forms.length) return;

  $forms.on('submit', function (event) {
    event.preventDefault();
    const form = this;
    const $message = $(form).find('[data-form-message]');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    $message.text('Signup is ready to connect to your newsletter service.');
    $(form).trigger('rd:newsletter-ready', { email: $(form).find('input[type="email"]').val() });
  });
}
