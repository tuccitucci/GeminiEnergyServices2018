window.sendMail = (formName) => {
  const data = {};

  $('.form-control').map((i, el) => {
    console.log($(el).val())
    const $el = $(el);
    const name = $el.attr('id');
    const val = $el.val();
    data[name] = val;
  }, {});

  console.log(data);

  $.ajax({
    type: "POST",
    url: '/api/mail',
    data: data
  });


  // window.fetch('/api/mail', {
  //   method: "POST",
  //   body: JSON.stringify({"foo": "bar"}),
  //   headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //   }
  // }).then(() => console.info('Quote Sent'));
}
