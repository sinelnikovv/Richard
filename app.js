//dark theme button

let btn = document.getElementById("theme");

btn.addEventListener("click", function () {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
});

//splidejs
var splide = new Splide(".splide", {
  type: "loop",
  arrows: false,
});
splide.mount();

//onview

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//counters

const box = document.querySelector("#counters");
let started = false;

function counter() {
  let numbers = document.querySelectorAll(".number");

  function interval(max, num, time) {
    return setInterval(function () {
      if (num.textContent < +max) {
        num.textContent++;
      } else {
        clearInterval();
      }
    }, time);
  }

  for (let num of numbers) {
    let max = num.textContent;
    num.textContent = 0;
    if (max < 20) {
      interval(max, num, 200);
    } else if (max < 50) {
      interval(max, num, 50);
    } else if (max < 100) {
      interval(max, num, 25);
    } else {
      interval(max, num, 25);
    }
  }
}

function watchCounter() {
  if (isInViewport(box)) {
    if (started == false) {
      counter();
      started = true;
    }
  } else {
    started = false;
  }
}
document.addEventListener("scroll", watchCounter);

//fullpage scroll

let fullpages = document.querySelectorAll(".fullpage");

function fullpageScroll(e) {
  let delta = e.deltaY;
  let coords = this.getBoundingClientRect();
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);

  if (delta > 0 && coords.top == 0) {
    window.scrollBy(0, window.innerHeight);
  } else if (delta < 0 && coords.top == 0) {
    window.scrollBy(0, -window.innerHeight);
  } else {
    window.scrollBy(0, coords.top);
  }
  // this.removeEventListener("wheel", fullpageScroll, { once: true });
  //  setTimeout(this.addEventListener("wheel", fullpageScroll, { once: true }), 1000);
}

for (let fullpage of fullpages) {
  fullpage.addEventListener("scroll", fullpageScroll, { once: true });
}
