$('.button, .close').on('click', function(e) {
  e.preventDefault();
  $('.detail, html, body').toggleClass('open');
});
$('.button1, .closechat').on('click', function(e) {
  e.preventDefault();
  $('.chat, html, body').toggleClass('open');
});