function $(selector) {
  return document.querySelector(selector);
}

function showMore(e) {
  $('.read-more').style.display = 'inline';
  e.target.style.display = 'none';
  e.preventDefault();
}