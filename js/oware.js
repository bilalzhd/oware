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

}
const mobilePoster = "assets/map-potrait-placeholder.jpg";
const desktopPoster = "assets/poster.png";

renderVideo(vid, "assets/map-without-border.mp4", "assets/PakMap_Flat-Portrait 4.mp4", mapId, mobilePoster, desktopPoster);
renderVideo(clientVid, "assets/Video.mp4", "assets/client-back-potrait.mp4", backId, "assets/client-back.png", "assets/client-back.png");
renderVideoOnResize(clientVid, "assets/Video.mp4", "assets/client-back-potrait.mp4", backId);
renderVideoOnResize(vid, "assets/map-without-border.mp4", "assets/PakMap_Flat-Portrait 4.mp4", mapId);

let clientListTop = document.querySelector('.client-list-top');
let clientListBottom = document.querySelector('.client-list-bottom');
function translateX(elem, count) {
  elem.style.transform = `translateX(${count}px)`;
}
let countTop = 0;
let countBottom = 0;
let width = -1 * window.innerWidth;
if(width > -450){
  width += 343;
}
if(width > -1366){
 let addWidth = width - 1366;
 width-=addWidth;
}

const animateTop = (elem) => {
  setInterval(function () {
    countTop = countTop - 0.4;
    if (countTop < (width - 1465)) {
      countTop = 0;
      translateX(elem, countTop)
    }
    translateX(elem, countTop);
  }, 1)

}
const animateBottom = (elem) => {
  setInterval(function () {
    countBottom = countBottom - 0.5;
    if (countBottom < (width - 1465)) {
      countBottom = 0;
      translateX(elem, countBottom)
    }
    translateX(elem, countBottom);
  }, 1)
}
// animateTop(clientListTop)
// animateBottom(clientListBottom)

// let bazar = document.querySelector('#bazar');
// let bazar2 = document.querySelector('#bazar2');
// let kravemart = document.querySelector('#kravemart');
// let unilever = document.querySelector('#unilever');
// let iffco = document.querySelector('#iffco');
// let iffco2 = document.querySelector('#iffco2');
// let rholab = document.querySelector('#rholab');

// function toggleImageOnCard(target, address1, address2) {
//     target.addEventListener('mouseover', () => {
//       let image = target.children[0];
//       image.removeAttribute('src');
//       image.setAttribute('src', address1)
//   })
//     target.addEventListener('mouseleave', () => {
//       let image = target.children[0];
//       image.removeAttribute('src');
//       image.setAttribute('src', address2)
//     })
// }
// let initAdd = 'assets/pitchlogos/'
// toggleImageOnCard(bazar, initAdd + 'bazar.png', initAdd + 'bazargrey.png');
// toggleImageOnCard(bazar2, initAdd + 'bazar.png', initAdd + 'bazargrey.png');
// toggleImageOnCard(kravemart, initAdd + 'kravemartwhite.png', initAdd + 'Kravemart-grey.png');
// toggleImageOnCard(unilever, initAdd + 'Unilever.png', initAdd + 'Unilever-grey.png');
// toggleImageOnCard(iffco, initAdd + 'Iffco-white.png', initAdd + 'Iffco-Grey.png');
// toggleImageOnCard(iffco2, initAdd + 'Iffco-white.png', initAdd + 'Iffco-Grey.png');
// toggleImageOnCard(rholab, initAdd + 'rholab.png', initAdd + 'rahlab-grey.png');

