// Scroll animation for images
document.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.game img');
    const triggerPoint = window.innerHeight * 0.9;

    images.forEach((img) => {
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < triggerPoint) {
            img.classList.add('in-view');
        }
    });
});
