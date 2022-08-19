//dark theme button

let btn = document.getElementById('theme');

btn.addEventListener('click', function() {
    let body = document.querySelector('body');
    body.classList.toggle('dark');
});

//splidejs
var splide = new Splide('.splide', {
  type: 'loop',
  arrows: false,
} );
splide.mount();


//onview

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const box = document.querySelector('#counters');

document.addEventListener('scroll', function () {
  if (isInViewport(box)) {
    let numbers = document.querySelectorAll('.number');

function interval(max, num, time) {
  return setInterval(function () {
    if (num.textContent < +max) {
      num.textContent++;
    } else {
      clearInterval();
    }
  }, time
  )
}

function numInterval(max, n, time) {
  return setInterval(function () {
    if (+n < +max) {
      n++;
      
    } else {
      clearInterval();
    }
  }, time
  )
}

for (let num of numbers) {
    
  
  if (num.textContent.includes(",")) {
    
    let numArr = num.textContent.split(",");
    
    
    for (let n of numArr) {
      
      let max = n;
      n = 0;
      
      if (max < 20) {
        console.log(max);
    numInterval(max, n,  400);
    
  } else if( max < 50) {
    numInterval(max, n, 300);
  } else if( max < 100) {
    numInterval(max, n, 200);
  }else {
    numInterval(max, n, 100);
  }
    }

  } else {
    let max = num.textContent;
  num.textContent = 0;
    if (max < 20) {
    interval(max, num,  400);
  } else if( max < 50) {
    interval(max, num, 300);
  } else if( max < 100) {
    interval(max, num, 200);
  }else {
    interval(max, num, 100);
  }}
}
  }
}, {
    passive: true
});