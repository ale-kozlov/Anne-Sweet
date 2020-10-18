var articles = document.querySelectorAll('.list__item');
var filter = document.querySelector('.filter');

filter.onchange = function () {
  for (var article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
			article.classList.add('hidden');
		} else {
			article.classList.remove('hidden');
		}
	}
};