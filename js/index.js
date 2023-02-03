// function toggleCardText(e,t){let r=document.getElementById(e+"-card");"mouseover"===t?r.addEventListener(t,t=>{document.getElementById(e).style.opacity=1,document.getElementById(e+"-title").style.transform="translateY(100px)"}):r.addEventListener(t,t=>{document.getElementById(e).style.opacity=0,document.getElementById(e+"-title").style.transform="translateY(0px)"})}let circles=document.querySelectorAll(".circle");circles.forEach(e=>e.addEventListener("mouseover",e=>{let t=e.target.getAttribute("data-city");document.getElementById(t).style.opacity=1})),circles.forEach(e=>e.addEventListener("mouseleave",e=>{let t=e.target.getAttribute("data-city");document.getElementById(t).style.opacity=0})),toggleCardText("warehousing","mouseover"),toggleCardText("logistics","mouseover"),toggleCardText("platform","mouseover"),toggleCardText("warehousing","mouseleave"),toggleCardText("logistics","mouseleave"),toggleCardText("platform","mouseleave");var swiper=new Swiper(".testimonial",{spaceBetween:20,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}});window.addEventListener("scroll",function(){document.querySelector("#navbar").classList.toggle("fixed",window.scrollY>60)});const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})});let slideObserver=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("animateShow"):e.target.classList.remove("animateShow")})}),arrowObserver=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?setTimeout(()=>{e.target.classList.add("show")},400):e.target.classList.remove("show")})}),cardObserver=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("showCards"):e.target.classList.remove("showCards")})}),supplychain=document.querySelector("#supplychainsHeading"),maptext=document.querySelector(".map-text"),simplifyingHeading=document.querySelector("#simplifyingHeading"),simplifyingText=document.querySelector("#simplifyingText"),seeingIsBelieving=document.querySelector("#seeingIsBelieving"),frontHeading=document.querySelector("#frontHeading"),testText=document.querySelectorAll(".test-text"),arrow=document.querySelectorAll(".arrow"),cards=document.querySelectorAll(".hideCards");observer.observe(supplychain),observer.observe(maptext),observer.observe(simplifyingHeading),observer.observe(simplifyingText),observer.observe(seeingIsBelieving),slideObserver.observe(frontHeading),Array.from(testText).forEach(e=>{observer.observe(e)}),arrow.forEach(e=>arrowObserver.observe(e)),cards.forEach(e=>[cardObserver.observe(e)]);var vid=document.getElementById("vid"),clientVid=document.getElementById("client-vid");function renderVideo(e,t,r,a,i,s){var o=window.matchMedia("(max-width: 760px)"),n=document.createElement("source");n.id=a,n.setAttribute("type","video/mp4"),e.appendChild(n),o.matches?(e.setAttribute("poster",i),vid.pause(),n.removeAttribute("src"),n.setAttribute("src",r),vid.load(),vid.play()):(e.setAttribute("poster",s),vid.pause(),n.removeAttribute("src"),n.setAttribute("src",t),vid.load(),vid.play())}const mapId="mapVid",backId="backVid";function renderVideoOnResize(e,t,r,a){window.addEventListener("resize",function(){var i=window.matchMedia("(max-width: 767px)"),s=document.getElementById(a);i.matches?(e.pause(),s.src=r,e.load(),e.play()):(e.pause(),s.src=t,e.load(),e.play())})}const mobilePoster="assets/map-potrait-placeholder.jpg",desktopPoster="assets/poster.png";renderVideo(vid,"assets/map-without-border.mp4","assets/PakMap_Flat-Portrait 4.mp4",mapId,"assets/map-potrait-placeholder.jpg","assets/poster.png"),renderVideo(clientVid,"assets/Video.mp4","assets/client-back-potrait.mp4",backId,"assets/client-back.png","assets/client-back.png"),renderVideoOnResize(clientVid,"assets/Video.mp4","assets/client-back-potrait.mp4",backId),renderVideoOnResize(vid,"assets/map-without-border.mp4","assets/PakMap_Flat-Portrait 4.mp4",mapId);let clientListTop=document.querySelector(".client-list-top"),clientListBottom=document.querySelector(".client-list-bottom");function translateX(e,t){e.style.transform=`translateX(${t}px)`}let countTop=0,countBottom=0,width=-1*window.innerWidth;width>-450&&(width+=343);const animateTop=e=>{setInterval(function(){(countTop-=.4)<width-1465&&translateX(e,countTop=0),translateX(e,countTop)},1)},animateBottom=e=>[setInterval(function(){(countBottom-=.5)<width-1465&&translateX(e,countBottom=0),translateX(e,countBottom)},1)];animateTop(clientListTop),animateBottom(clientListBottom);let bazar=document.querySelector("#bazar"),bazar2=document.querySelector("#bazar2"),kravemart=document.querySelector("#kravemart"),unilever=document.querySelector("#unilever"),iffco=document.querySelector("#iffco"),iffco2=document.querySelector("#iffco2"),rholab=document.querySelector("#rholab");function toggleImageOnCard(e,t,r){e.addEventListener("mouseover",()=>{let r=e.children[0];r.removeAttribute("src"),r.setAttribute("src",t)}),e.addEventListener("mouseleave",()=>{let t=e.children[0];t.removeAttribute("src"),t.setAttribute("src",r)})}let initAdd="assets/pitchlogos/";toggleImageOnCard(bazar,initAdd+"bazar.png",initAdd+"bazargrey.png"),toggleImageOnCard(bazar2,initAdd+"bazar.png",initAdd+"bazargrey.png"),toggleImageOnCard(kravemart,initAdd+"kravemartwhite.png",initAdd+"Kravemart-grey.png"),toggleImageOnCard(unilever,initAdd+"Unilever.png",initAdd+"Unilever-grey.png"),toggleImageOnCard(iffco,initAdd+"Iffco-white.png",initAdd+"Iffco-Grey.png"),toggleImageOnCard(iffco2,initAdd+"Iffco-white.png",initAdd+"Iffco-Grey.png"),toggleImageOnCard(rholab,initAdd+"rholab.png",initAdd+"rahlab-grey.png");

// let phoneCallIcon = document.getElementById('phoneCall');
// let phoneNumber = document.getElementById('phoneNumber');
// phoneCallIcon.addEventListener('click', () => {
//     phoneNumber.style.display = "inline-block"
// })
// phoneCallIcon.addEventListener('blur', () => {
//     phoneNumber.style.display = "none"
// })

/* 
// interactivity on the phone icon on the header
let callBtn = document.getElementById('phoneCall')
let phoneLink = document.getElementById('phoneNumber');

// remove the link from the phone icon on the header if clicked not on the phone icon
document.addEventListener('click', function (event) {
    if (!event.target.closest('#phoneNumber') && !event.target.closest('#phoneCall')) {
        phoneLink.style.opacity = 0;
        phoneLink.style.width = 0;
    }
});
// add event listener to the call button to display the phone number
callBtn.addEventListener('click', function () {
    phoneLink.style.opacity = 1;
    phoneLink.style.width = 'auto';

});

// add event listener to the link to remove the event listener from the call button
phoneLink.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith('tel:')) {
        event.stopPropagation();
    }
});

// FUNCTIONING MAP IMAGE TO SHOW CARD ON HOVER
// let circles = document.querySelectorAll(".circle");
// circles.forEach(e => e.addEventListener("mouseover", e => {
//   let t = e.target.getAttribute("data-city");
//   document.getElementById(t).style.opacity = 1;
// }))
// circles.forEach(e => e.addEventListener("mouseleave", e => {
//   let t = e.target.getAttribute("data-city");
//   document.getElementById(t).style.opacity = 0
// }));

let unilever = document.getElementById('unilever');
unilever.addEventListener('mouseover', () => {
    unilever.firstElementChild.src = "./assets/pitchlogos/Unilever-white.png"
})
unilever.addEventListener('mouseout', () => {
    unilever.firstElementChild.src = "./assets/pitchlogos/Unilever-grey2.png"
})


// MAIN FRONT ANIMATION
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
        video.style.width = '50%';
        video.style.opacity = 1;
        neonNet.style.width = '45%';
        neonNet.style.opacity = 1;
        neonNet.style.marginTop = 0;
        isTextInvisible = true;
        window.scrollTo(0, 0)
    }
});


// SUBMITTING THE FORM DATA TO THE ONEXUS API
const inputs = document.querySelectorAll("input[type='text']:not([placeholder='Designation'])");
const email = document.querySelector('input[type="email"]')

// Validating the data first
function validatingData() {
    let isValid = false;
    if (email === "") {
        email.reportValidity();
    }
    inputs.forEach((input) => {
        const invalidEl = document.querySelector("#" + input.id).parentElement.querySelector('.invalid-feedback');
        if (input.value.trim().length === 0) {
            input.focus();
            input.classList.add("error-input")
            invalidEl.style.display = "block";
            isValid = false;
        } else {
            invalidEl.style.display = "none";
            input.classList.remove("error-input")
            isValid = true;
        }
    })
    return isValid;

}
const getFormData = () => {
    if (validatingData()) {
        const firstname = document.getElementById('firstname').value
        const lastname = document.getElementById('lastname').value
        const emailValue = document.getElementById('email').value
        const phone = document.getElementById('phone').value
        const companyName = document.getElementById('companyName').value
        const designation = document.getElementById('designation').value
        // const message = document.getElementById('message').value
        // let signupForOnexus = document.getElementById('signupForOnexus')
        // if(signupForOnexus.checked) {
        //   signupForOnexus = signupForOnexus.value
        // } else {
        //   signupForOnexus = false;
        // }
        const formData = {
            firstname,
            lastname,
            email: emailValue,
            phone,
            company_name: companyName,
            designation,
            // signupForOnexus
        }
        return formData;
    } else {
        return false;
    }
}
let sigunupButton = document.getElementById('submitSignup');
let alertSignup = document.getElementById('alertSignup');
let signupModal = document.getElementById('signupModal')
const confirmationModalButton = document.getElementById('confirmationModalButton')
// function to send the request
async function postData(event) {
    event.preventDefault();

    const formData = getFormData();
    if (formData) {
        sigunupButton.classList.remove("get-started")
        sigunupButton.innerText = "";
        sigunupButton.classList.add("loadingButton")
        const response = await fetch("https://api.oware.co/api/en/customer-onboardings", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        })

        const responseData = await response.json();
        sigunupButton.classList.add("get-started")
        sigunupButton.innerText = "Submit";
        sigunupButton.classList.remove("loadingButton")
        if (!responseData.error) {
            signupModal.style.display = "none"
            confirmationModalButton.click();
        } else {
            alertSignup.classList.remove('d-none')
            alertSignup.innerHTML = `<strong>Error! </strong>${responseData.error.errors[0].message.replace("CustomerOnboardings.", "")}`
            alertSignup.classList.add('show')
        }
    }
}
// adding the event to the form onsubmit
document.getElementById('signupForm').addEventListener('submit', postData);


// animate on scroll with Intersection Observer
const observer = new IntersectionObserver((elements) => {
    elements.forEach(el => {
        el.isIntersecting ? el.target.classList.add("shown") : el.target.classList.remove("shown")
    })
})

let fadeElements = document.querySelectorAll('.fadeEl');
fadeElements.forEach(e => observer.observe(e))

// To pause the video when the video modal closes
const owareIframe = document.getElementById('yt-player');
document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
    owareIframe.removeAttribute("src");
})
document.getElementById('videoModalButton').addEventListener('click', () => {
    if (!owareIframe.getAttribute('src')) owareIframe.setAttribute("src", 'https://www.youtube.com/embed/nQQJpmiV4kU');
})

*/