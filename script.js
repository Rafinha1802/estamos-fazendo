const profileContainers = document.querySelectorAll('.profile-container');

profileContainers.forEach(container => {
	container.addEventListener('mouseenter', () => {
		container.classList.add('hover');
	});

	container.addEventListener('mouseleave', () => {
		container.classList.remove('hover');
	});
});
