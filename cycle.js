document.querySelectorAll('.project-card').forEach(card => {
    const images = card.querySelectorAll('.project-image');
    let index = 0;

    card.addEventListener('click', () => {
        if (images.length <= 1) return;

        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    });
});