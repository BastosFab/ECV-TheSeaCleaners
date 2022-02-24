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
    observer.observe(image);
});
// observer.observe(glass);


// const section = document.querySelector(".section")
// const block = document.querySelectorAll(".block")
// const imgs = document.querySelectorAll("img")
// const animClasses = [
//     "fadeInLeft",
//     "fadeInRight",
//     "fadeInBtm",
//     "zoomIn",
// ]
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         const currentIndex = Array.from(block).indexOf(entry.target)
//         if (entry.isIntersecting) {
//             imgs[currentIndex].classList.add(animClasses[currentIndex])
//         } else {
//             if (entry.boundingClientRect.y > 0) {
//                 imgs[currentIndex].classList.remove(animClasses[currentIndex])
//             }
//         }
//     })
// }, {
//     root: section,
//     threshold: 0.1,
// })


// block.forEach(block => {
//     observer.observe(block)
// })