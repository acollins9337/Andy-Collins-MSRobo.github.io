document.querySelectorAll('.project-card').forEach(card => {
    const images = card.querySelectorAll('.project-image');
    const mask = card.querySelector('.project-image-mask');

    let maxHeight = 0;

    images.forEach(img => {
        const temp = new Image();
        temp.src = img.src;
        temp.onload = () => {
            if (temp.height > maxHeight) {
                maxHeight = temp.height;
                mask.style.height = maxHeight + "px";
            }
        };
    });
});