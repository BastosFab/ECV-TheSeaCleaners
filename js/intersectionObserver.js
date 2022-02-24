const scrollAnimation = document.querySelectorAll('.block');
// const glass = document.querySelector('.block2');

observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        console.log(entry.intersectionRatio)
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim 1s forwards ease-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })
}, {
    threshold: 1
});

scrollAnimation.forEach(image => {
    console.log(image)
    observer.observe(image);
});
