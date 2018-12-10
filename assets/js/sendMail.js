window.sendMail = (formName) => {
  const data = {};

  $('.form-control').map((i, el) => {
    const $el = $(el);
    const name = $el.attr('id');
    const val = $el.val();
    data[name] = val;
  }, {});


  $.ajax({
    type: "POST",
    url: '/api/mail',
    data: data
  });
}
