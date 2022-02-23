const rayAnimation = document.querySelector('.block');

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


observer.observe(rayAnimation);