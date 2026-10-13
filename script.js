document.addEventListener('DOMContentLoaded', () => {
	const burgerButton = document.querySelector('.burger-button');
	const headerMenu = document.querySelector('.header__menu');
	// const menuLinks = document.querySelectorAll('.menu__link, .menu__button');
	const galleryButtons = document.querySelectorAll('.gallery__button');
	const galleryCells = document.querySelectorAll('.gallery__cell');

	// Бургер меню
	if (burgerButton && headerMenu) {
		burgerButton.addEventListener('click', () => {
			const isOpen = headerMenu.classList.toggle('active');
			burgerButton.classList.toggle('active');

			burgerButton.setAttribute('aria-expanded', isOpen);
			burgerButton.setAttribute(
				'aria-label',
				isOpen ? 'Закрыть меню навигации' : 'Открыть меню навигации'
			);
		});

		document.addEventListener('click', (e) => {
			const isClickInside =
				headerMenu.contains(e.target) || burgerButton.contains(e.target);
			if (!isClickInside && headerMenu.classList.contains('active')) {
				closeMenu();
			}
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && headerMenu.classList.contains('active')) {
				closeMenu();
			}
		});
	}

	function closeMenu() {
		if (!burgerButton || !headerMenu) return;
		headerMenu.classList.remove('active');
		burgerButton.classList.remove('active');
		burgerButton.setAttribute('aria-expanded', 'false');
		burgerButton.setAttribute('aria-label', 'Открыть меню навигации');
	}

	// Галерея
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