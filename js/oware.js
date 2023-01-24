// let slideObserver = new IntersectionObserver(e => {
//   e.forEach(e => {
//     e.isIntersecting ? e.target.classList.add("animateShow") : e.target.classList.remove("animateShow")
//   })
// })
// let arrowObserver = new IntersectionObserver(e => {
//   e.forEach(e => {
//     if (e.isIntersecting) {
//       setTimeout(() => {
//         e.target.classList.add("show")
//       }, 400)
//     } else {
//       e.target.classList.remove("show")
//     }
//   })
// })
// let cardObserver = new IntersectionObserver(e => {
//   e.forEach(e => { e.isIntersecting ? e.target.classList.add("showCards") : e.target.classList.remove("showCards") })
// });


// animate on scroll with Intersection Observer
const observer = new IntersectionObserver((elements) => {
  elements.forEach(el => { 
    el.isIntersecting ? el.target.classList.add("shown") : el.target.classList.remove("shown") 
  })
})

let fadeElements = document.querySelectorAll('.fadeEl');
fadeElements.forEach(e => observer.observe(e))

// arrow.forEach(e => arrowObserver.observe(e)), cards.forEach(e => [cardObserver.observe(e)]);

let callBtn = document.getElementById('phoneCall')
let phoneLink = document.getElementById('phoneNumber');
callBtn.addEventListener('click', () => {
  phoneLink.style.opacity = 1;
  phoneLink.style.width = 'auto';
});
callBtn.addEventListener('blur', () => {
  phoneLink.style.opacity = 0;
  phoneLink.style.width = 0;
})
function toggleImageOnCard(target, address1, address2) {
  target.addEventListener('mouseover', () => {
    let image = target.children[0];
    image.removeAttribute('src');
    image.setAttribute('src', address1)
  })
  target.addEventListener('mouseleave', () => {
    let image = target.children[0];
    image.removeAttribute('src');
    image.setAttribute('src', address2)
  })
}
let initAdd = 'assets/pitchlogos/';
let unilever = document.querySelector('#unilever');
toggleImageOnCard(unilever, initAdd + 'Unilever.png', initAdd + 'Unilever-grey.png');

let animatedLogoText = document.querySelector('.logoAnimated');
let headerText = document.querySelector('#header-text');
let video = document.querySelector('.video-container');
let neonNet = document.querySelector('#neonNet');
let logo = document.querySelector('.logo');
// let initialOpacity = animatedLogoText.style.opacity;
let scrollPos = window.pageYOffset;
let prevScrollPos = 0;
let isTextInvisible = false;

// Add a scroll event listener
window.addEventListener('scroll', function (event) {
  prevScrollPos = scrollPos;
  scrollPos = window.pageYOffset;

  // Check if the user is scrolling down and the text has not yet become invisible
  if (scrollPos > prevScrollPos && !isTextInvisible) {
    animatedLogoText.style.opacity = 0;
    // animatedLogoText.style.width = 0;
    // animatedLogoText.style.height = 0;
    logo.style.opacity = 1;
    headerText.style.opacity = 1;
    video.style.width = '60%';
    video.style.opacity = 1;
    neonNet.style.width = '55%';
    neonNet.style.opacity = 1;
    neonNet.style.marginTop = 0;
    isTextInvisible = true;
    window.scrollTo(0, 0)
  }
});
// let circles = document.querySelectorAll(".circle");
// circles.forEach(e => e.addEventListener("mouseover", e => {
//   let t = e.target.getAttribute("data-city");
//   document.getElementById(t).style.opacity = 1;
// }))
// circles.forEach(e => e.addEventListener("mouseleave", e => {
//   let t = e.target.getAttribute("data-city");
//   document.getElementById(t).style.opacity = 0
// }));

let videoModal = document.getElementById("videoModal");
let ytPlayer = document.getElementById('yt-player')
videoModal.addEventListener('hidden.bs.modal',  () => {
  ytPlayer.removeAttribute('src')
});
videoModal.addEventListener('show.bs.modal', () => {
  if(!ytPlayer.getAttribute('src')) ytPlayer.setAttribute('src', 'https://www.youtube.com/embed/nQQJpmiV4kU');
})
