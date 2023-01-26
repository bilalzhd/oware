// animate on scroll with Intersection Observer
const observer = new IntersectionObserver((elements) => {
  elements.forEach(el => {
    el.isIntersecting ? el.target.classList.add("shown") : el.target.classList.remove("shown")
  })
})

let fadeElements = document.querySelectorAll('.fadeEl');
fadeElements.forEach(e => observer.observe(e))

// interactivity on the phone icon on the header
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

// SUBMITTING THE FORM DATA TO THE ONEXUS API
const inputs = document.querySelectorAll("input[type='text']:not([placeholder='Designation'])");

// Validating the data first
function validatingData() {
  inputs.forEach((input) => {
    const invalidEl = document.querySelector("#" + input.id).parentElement.querySelector('.invalid-feedback');
    if (input.value.trim().length === 0) {
      input.focus();
      input.classList.add("error-input")
      invalidEl.style.display = "block";
      return false;
    } else {
      invalidEl.style.display = "none";
      input.classList.remove("error-input")
    }
  })
  const firstname = document.getElementById('firstname').value
  const lastname = document.getElementById('lastname').value
  const email = document.getElementById('email').value
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
    email,
    phone,
    company_name: companyName,
    designation,
    // signupForOnexus
  }
  return formData;
}

// function to send the request
async function postData(event) {
  event.preventDefault();
  const formData = validatingData();
  if (!!formData) {
    const response = await fetch("https://api.oware.co/api/en/customer-onboardings", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'cookie': 'ajs_anonymous_id=%2232b321e8-218c-4a5a-a4f1-e21645b3a7d0%22;_ga=GA1.1.996003942.1657872750;__hstc=140389612.9d1db8b3e9284cd675a791a82a821d56.1669378798188.1669378798188.1669378798188.1;jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB5b3BtYWlsLmNvbSIsImlhdCI6MTY3MzQzODIzMCwiZXhwIjoxNzU5ODM4MjMwfQ.O5HDR0UChiCPfcDdw2-3llNVFUmc5xFKLtA7Bvy0qac'
      }
    })
    const responseData = await response.json();
    console.log(responseData)
  }
}
// adding the event to the form onsubmit
document.getElementById('signupForm').addEventListener('submit', postData);
let unilever = document.getElementById('unilever');
unilever.addEventListener('mouseover', () => {
  unilever.firstElementChild.src = "./assets/pitchlogos/Unilever-white.png"
})
unilever.addEventListener('mouseout', () => {
  unilever.firstElementChild.src = "./assets/pitchlogos/Unilever-grey2.png"
})

// To pause the video when the video modal closes
const owareIframe = document.getElementById('yt-player');
document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
  owareIframe.removeAttribute("src");
})
document.getElementById('videoModalButton').addEventListener('click', () => {
  if(!owareIframe.getAttribute('src')) owareIframe.setAttribute("src", 'https://www.youtube.com/embed/nQQJpmiV4kU');
})
