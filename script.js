document.addEventListener('DOMContentLoaded', () => {
	const galleryButtons = document.querySelectorAll('.gallery__button');
	const galleryCells = document.querySelectorAll('.gallery__cell');

	galleryButtons.forEach(button => {
		button.addEventListener('click', () => {
			galleryButtons.forEach(btn => btn.classList.remove('gallery__button--active'));
			button.classList.add('gallery__button--active');

			const filterValue = button.getAttribute('data-filter');

			galleryCells.forEach(item => {
				const itemCategory = item.getAttribute('data-category');

				if (filterValue === 'all' || itemCategory === filterValue) {
					item.classList.remove('gallery__cell--hidden');
				} else {
					item.classList.add('gallery__cell--hidden');
				}
			});
		});
	});

	// Копирайт
	const yearSpan = document.getElementById("currentYear");
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}
});