let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}


// let fullPage = document.querySelectorAll('.fullPage');

// for (let elem of fullPage) {
//   elem.addEventListener("scroll",  function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos == currentScrollPos) {
//     window.scrollBy(0, window.innerHeight);
//   } else {
//     window.scrollBy(0, window.innerHeight);
//   }
//   prevScrollpos = currentScrollPos;
//   })
// }



// let prevPos = window.pageYOffset;
// window.onscroll = function () {  
//   let currentPos = window.pageYOffset;
//   // scroll down
//   if (prevPos < currentPos) {
//     window.scrollBy(0, window.innerHeight);
//   }
//   // scroll up
//   else if (prevPos > currentPos) {
//     window.scrollBy(0, window.innerHeight);
//   }
//   prevPos = currentPos;
// };


