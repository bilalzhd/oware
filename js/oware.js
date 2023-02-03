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

/* 
let callBtn=document.getElementById("phoneCall"),phoneLink=document.getElementById("phoneNumber");document.addEventListener("click",function(e){e.target.closest("#phoneNumber")||e.target.closest("#phoneCall")||(phoneLink.style.opacity=0,phoneLink.style.width=0)}),callBtn.addEventListener("click",function(){phoneLink.style.opacity=1,phoneLink.style.width="auto"}),phoneLink.addEventListener("click",function(e){"A"===e.target.tagName&&e.target.href.startsWith("tel:")&&e.stopPropagation()});let unilever=document.getElementById("unilever");unilever.addEventListener("mouseover",()=>{unilever.firstElementChild.src="./assets/pitchlogos/Unilever-white.png"}),unilever.addEventListener("mouseout",()=>{unilever.firstElementChild.src="./assets/pitchlogos/Unilever-grey2.png"});let animatedLogoText=document.querySelector(".logoAnimated"),headerText=document.querySelector("#header-text"),video=document.querySelector(".video-container"),neonNet=document.querySelector("#neonNet"),logo=document.querySelector(".logo"),scrollPos=window.pageYOffset,prevScrollPos=0,isTextInvisible=!1;window.addEventListener("scroll",function(e){prevScrollPos=scrollPos,(scrollPos=window.pageYOffset)>prevScrollPos&&!isTextInvisible&&(animatedLogoText.style.opacity=0,logo.style.opacity=1,headerText.style.opacity=1,video.style.width="50%",video.style.opacity=1,neonNet.style.width="45%",neonNet.style.opacity=1,neonNet.style.marginTop=0,isTextInvisible=!0,window.scrollTo(0,0))});const inputs=document.querySelectorAll("input[type='text']:not([placeholder='Designation'])"),email=document.querySelector('input[type="email"]');function validatingData(){let e=!1;return""===email&&email.reportValidity(),inputs.forEach(t=>{let n=document.querySelector("#"+t.id).parentElement.querySelector(".invalid-feedback");0===t.value.trim().length?(t.focus(),t.classList.add("error-input"),n.style.display="block",e=!1):(n.style.display="none",t.classList.remove("error-input"),e=!0)}),e}const getFormData=()=>{if(!validatingData())return!1;{let e=document.getElementById("firstname").value,t=document.getElementById("lastname").value,n=document.getElementById("email").value,o=document.getElementById("phone").value,l=document.getElementById("companyName").value,i=document.getElementById("designation").value,a={firstname:e,lastname:t,email:n,phone:o,company_name:l,designation:i};return a}};let sigunupButton=document.getElementById("submitSignup"),alertSignup=document.getElementById("alertSignup"),signupModal=document.getElementById("signupModal");const confirmationModalButton=document.getElementById("confirmationModalButton");async function postData(e){e.preventDefault();let t=getFormData();if(t){sigunupButton.classList.remove("get-started"),sigunupButton.innerText="",sigunupButton.classList.add("loadingButton");let n=await fetch("https://api.oware.co/api/en/customer-onboardings",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",accept:"application/json"}}),o=await n.json();sigunupButton.classList.add("get-started"),sigunupButton.innerText="Submit",sigunupButton.classList.remove("loadingButton"),o.error?(alertSignup.classList.remove("d-none"),alertSignup.innerHTML=`<strong>Error! </strong>${o.error.errors[0].message.replace("CustomerOnboardings.","")}`,alertSignup.classList.add("show")):(signupModal.style.display="none",confirmationModalButton.click())}}document.getElementById("signupForm").addEventListener("submit",postData);const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("shown"):e.target.classList.remove("shown")})});let fadeElements=document.querySelectorAll(".fadeEl");fadeElements.forEach(e=>observer.observe(e));const owareIframe=document.getElementById("yt-player");document.getElementById("videoModal").addEventListener("hidden.bs.modal",()=>{owareIframe.removeAttribute("src")}),document.getElementById("videoModalButton").addEventListener("click",()=>{owareIframe.getAttribute("src")||owareIframe.setAttribute("src","https://www.youtube.com/embed/nQQJpmiV4kU")});
*/