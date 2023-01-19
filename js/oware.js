// function toggleCardText(id, event) {
//   let card = document.getElementById(id + "-card");
//   if (event === "mouseover") {
//     card.addEventListener(event, e => {
//       document.getElementById(id).style.opacity = 1
//       document.getElementById(id + "-title").style.transform = "translateY(100px)"
//     })
//   } else {
//     card.addEventListener(event, e => {
//       document.getElementById(id).style.opacity = 0;
//       document.getElementById(id + "-title").style.transform = "translateY(0px)";
//     });
//   }
// }

o
// toggleCardText("warehousing", "mouseover")
// toggleCardText("logistics", "mouseover")
// toggleCardText("platform", "mouseover")
// toggleCardText("warehousing", "mouseleave")
// toggleCardText("logistics", "mouseleave")
// toggleCardText("platform", "mouseleave")

// var swiper = new Swiper(".testimonial", {
//   spaceBetween: 20, loop: !0, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
//   breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
// });

// window.addEventListener("scroll", function () {
//   document.querySelector("#navbar").classList.toggle("fixed", window.scrollY > 60)
// });

const observer = new IntersectionObserver(e => {
  e.forEach(e => { e.isIntersecting ? e.target.classList.add("show") : e.target.classList.remove("show") })
})
let slideObserver = new IntersectionObserver(e => {
  e.forEach(e => {
    e.isIntersecting ? e.target.classList.add("animateShow") : e.target.classList.remove("animateShow")
  })
})
let arrowObserver = new IntersectionObserver(e => {
  e.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.classList.add("show")
      }, 400)
    } else {
      e.target.classList.remove("show")
    }
  })
})
let cardObserver = new IntersectionObserver(e => {
  e.forEach(e => { e.isIntersecting ? e.target.classList.add("showCards") : e.target.classList.remove("showCards") })
});
let supplychain = document.querySelector("#supplychainsHeading")
let maptext = document.querySelector(".map-text")
let simplifyingHeading = document.querySelector("#simplifyingHeading")
let simplifyingText = document.querySelector("#simplifyingText")
let seeingIsBelieving = document.querySelector("#seeingIsBelieving")
let frontHeading = document.querySelector("#frontHeading")
let testText = document.querySelectorAll(".test-text")
let arrow = document.querySelectorAll(".arrow")
let cards = document.querySelectorAll(".hideCards");
observer.observe(supplychain)
observer.observe(maptext)
observer.observe(simplifyingHeading)
observer.observe(simplifyingText)
observer.observe(seeingIsBelieving)
slideObserver.observe(frontHeading)
Array.from(testText).forEach(e => { observer.observe(e) })
arrow.forEach(e => arrowObserver.observe(e)), cards.forEach(e => [cardObserver.observe(e)]);


// to render different videos on different screens
var vid = document.getElementById("vid");
var clientVid = document.getElementById("client-vid");

function renderVideo(target, addressD, addressM, id, posterM = undefined, posterD = undefined) {
  var w = window.matchMedia("(max-width: 760px)");
  var source = document.createElement("source");
  source.id = id;
  source.setAttribute("type", "video/mp4");
  target.appendChild(source);
  if (w.matches) {
    target.setAttribute('poster', posterM)
    vid.pause();
    source.removeAttribute("src");
    source.setAttribute("src", addressM);
    vid.load();
    vid.play();
  } else {
    target.setAttribute('poster', posterD)
    vid.pause();
    source.removeAttribute("src");
    source.setAttribute("src", addressD);
    vid.load();
    vid.play();
  }

}
const mapId = "mapVid";
const backId = "backVid";


function renderVideoOnResize(target, addressD, addressM, id) {
  window.addEventListener("resize", function () {
    var w = window.matchMedia("(max-width: 767px)");
    var source = document.getElementById(id);

    if (w.matches) {
      target.pause();
      source.src = addressM;
      target.load();
      target.play();
    } else {
      target.pause();
      source.src = addressD;
      target.load();
      target.play();
    }
  });

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

