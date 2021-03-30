// AT BARE MINIMUM:
// 1. When clicked: add a fade in animation to the name on the resume.
const animateName = () => {
  document.getElementById('name').classList.add('animate__animated', 'animate__fadeInTopLeft');
}

// 2. Hide your phone number until it's clicked on.
//    hidden number with display:none in CSS Line 49
const showNum = () => {
  document.getElementById('phoneNum').style.display='inline'
}

// 3. When a user hovers on the picture make it disappear.
const hideImg = () => {
  document.getElementById('headshot').style.display='none'
}

const showImg = () => {
  document.getElementById('headshot').style.display='inline'
}