(function() {

  function closeModal() {
    $('#request-quote-modal').modal('hide');
  }

  function onRequestSubmit() {
    var $form = $('#request-quote-form');

    if ($form.valid && $form.valid()) {
      closeModal();
    }
  }

})();
