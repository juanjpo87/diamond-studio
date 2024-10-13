
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let counter = 0;
    let imageWidth = images[0].clientWidth;

    window.addEventListener('resize', () => {
        imageWidth = images[0].clientWidth;
        slide.style.transform = `translateX(${-imageWidth * counter}px)`;
    });

    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - (window.innerWidth >= 600 ? 3 : 1)) return;
        slide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        slide.style.transform = `translateX(${-imageWidth * counter}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        slide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        slide.style.transform = `translateX(${-imageWidth * counter}px)`;
    });