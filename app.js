//dark theme button

let btn = document.getElementById('theme');

btn.addEventListener('click', function() {
    let body = document.querySelector('body');
    body.classList.toggle('dark');
});

//counters


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

for (let num of numbers) {
    
  let max = num.textContent;
  num.textContent = 0;
  
  if (max< 20) {
    interval(max, num,  400);
  } else if( max < 50) {
    interval(max, num, 300);
  } else if( max < 100) {
    interval(max, num, 200);
  }else {
    interval(max, num, 100);
  }


}


//fullpage

// new fullpage('#fullpage', {
// 	//options here
// 	autoScrolling:true,
//   scrollHorizontally: true,
//   scrollBar: true,
// });