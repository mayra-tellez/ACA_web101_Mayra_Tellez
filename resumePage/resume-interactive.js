// AT BARE MINIMUM:
// 1. When clicked: add a fade in animation to the name on the resume.

// 2. Hide your phone number until it's clicked on.
//    hide number with display:none in CSS Line 49
var a;
function showNum() {
  if(a==1) {
    document.getElementById("phoneNum").style.display="inline"
    return a=0;
  }
  else {
    document.getElementById("phoneNum").style.display="none"
    return a=1;
  }
}

// 3. When a user hovers on the picture make it disappear.
//    in CSS with #headshot:hover {opacity:0;} Line 90

