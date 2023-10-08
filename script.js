'use strict';

const menu = document.querySelector('.menu');
const link_items  = document.querySelector('.list-items');
const progressEl = document.querySelector('.progress');
const html = document.querySelector('html');

// WORKING WITH TOGGLE MENU ICON
menu.addEventListener('click', () => {
  menu.classList.toggle('openmenu');
  link_items.classList.toggle('hidden');
})



// WORKING WITH LINK BAR

link_items.addEventListener ('click', e => {
  const clickss = e.target.closest('.list-item')
  
  if(!clickss) return;
  document.querySelector(`.bar--${clickss.dataset.no}`).classList.toggle('hidden');
});


// WORKING WITH SCROLL BAR
const container = document.querySelector('.container');
const homePage = document.querySelector('.homepage');

const conObFtn = function(entries) {
  const [entry] = entries;
    console.log(entry)

  if(!entry.isIntersecting) {
    container.classList.add('sticky-container')
  } else {
    container.classList.remove('sticky-container')
  }
}

const contOb = new IntersectionObserver(conObFtn, {
  root: null,
  threshold: 0.3
})

contOb.observe(homePage);


// WORKINGK WITH PROGRESS BAR
window.addEventListener('scroll', () => {
  const srcHeight = window.innerHeight;
  const scrollY = Math.round(window.scrollY);
  const scrollHeight = html.scrollHeight;

  const scrollCalc = srcHeight + scrollY;
  const progress = scrollCalc / scrollHeight * 100;

  //
  progressEl.value = progress;
});


// WORKING WITH STUDENT IMAGE INTERVAL
const stuImages = document.querySelectorAll('.page-image');
const stuImg = document.querySelectorAll('.student-image');


let activeIndex = 0

const culSlide = function(s) {
  stuImages.forEach((stuImage, index) => {
    stuImage.style.transform = `translateX(${100 * (index - s)}%)`;
  })
}

culSlide(0);

const nSlides = function() {
  if(activeIndex < stuImages.length) {
    if(activeIndex === stuImages.length -1) {
      activeIndex= 0;
    } else {
      activeIndex++;
    }

    culSlide(activeIndex)
  }
}

setInterval(nSlides, 3000);


// WORKING WITH USER COUNT
const boxCount = document.querySelector('.count-boxes');

const callBackCount = function(entries) {
  const [entry] = entries;
  // console.log(entry)
  if(!entry.intersecting) {
    // console.log('yes')

    // //NO1
    let c1 = 0;

    const countDone = function() {
      //First set the text back to '';
      document.querySelector('.no1').innerHTML = '';

      //Then at 50 milliseconds add 1
      c1++;

      // Condition: if c1 === a specific number then clear interval
      if(c1 === 19) {
        clearInterval(count1)
      }

      document.querySelector('.no1').innerHTML = c1;
    }

    // For the count to start immediately
    countDone();
    const count1 = setInterval(countDone, 50);

    //NO2
    let c2 = 0;
    const countDone2 = function() {
      document.querySelector('.no2').innerHTML = '';

      c2++;

      if(c2 === 75) {
        clearInterval(count2)
      }

      document.querySelector('.no2').innerHTML = c2;
    }
    countDone2();
    const count2 = setInterval(countDone2, 30);

    //NO3
    let c3 = 0;

    const countDone3 = function() {
      document.querySelector('.no3').innerHTML = '';

      c3++;

      document.querySelector('.no3').innerHTML = c3;

      if(c3 === 78) {
        clearInterval(count3)
      }
    }

    countDone3();
    const count3 = setInterval(countDone3, 30);

    //NO4
    let c4 = 1;

    const countDone4 = function() {
      document.querySelector('.no4').innerHTML = '';

      c4++;

      document.querySelector('.no4').innerHTML = c4;

      if(c4 === 1000) {
        clearInterval(count4)
      }
    }

    countDone4();
    const count4 = setInterval(countDone4, 5);

    //NO5
    let c5 = 1;

    const countDone5 = function() {
      document.querySelector('.no5').innerHTML = '';

      c5++;

      document.querySelector('.no5').innerHTML = c5;

      if(c5 === 2000) {
        clearInterval(count5)
      }
    }

    countDone5();
    const count5 = setInterval(countDone5, 2);


    //NO5
    let c6 = 1;

    const countDone6 = function() {
      c6++;
      document.querySelector('.no6').innerHTML = c6;

      if(c6 === 81) {
        clearInterval(count6)
      }
    }

    countDone6();
    const count6 = setInterval(countDone6, 100);
  }
}

const obsCount = new IntersectionObserver(callBackCount, {
  root: null,
  threshold: 0.1,
});
obsCount.observe(boxCount);


// WORKING ON PRODUCT TAB
const product_Links = document.querySelector('.product-links');

product_Links.addEventListener('click', e => {
  const clicked = e.target.closest('.product-link');
  console.log(clicked.dataset.tab)

  // Removing active on all other Tab
  document.querySelectorAll('.product-link').forEach(pLink => {
    pLink.classList.remove('active-product-link');
  })

  // Removing active on all other TAb info
  document.querySelectorAll('.product-info').forEach(pInfo => {
    pInfo.classList.remove('active-info')
  })


  if(clicked) {

    // Add active to the Tab clicked
    clicked.classList.add('active-product-link');

    // Add Info to the Tab Clicked
    document.querySelector(`.info--${clicked.dataset.tab}`).classList.add('active-info');
  }
})


// WORKING WITH TESTIMONIAL
const testimonial = document.querySelectorAll('.testimonial-list');
const rightBtn = document.querySelector('.btn--right');
const leftBtn = document.querySelector('.btn--left');

let activetest = 0;
const maxSlide = testimonial.length -1;

// testimonial.forEach((testi, index) => {
//   testi.style.transform = `translateX(${100 * index}%)`
// })
const culslide = function(s) {
  testimonial.forEach((testi, index) => {
  testi.style.transform = `translateX(${100 * (index - s)}%)`
})
}

culslide(0)

//NEXT SLIDE
const nslidess = function() {
  if(activetest === testimonial.length -1) {
    activetest = 0;
  } else {
    activetest++;
    console.log(activetest, testimonial.length -1)
  }

  culslide(activetest);
}

// PREVIOUS SLIDE
const prevSlide = function() {
  if(activetest === 0) {
    maxSlide -1;
  } else {
    activetest--;
  }

  culslide(activetest)
}


rightBtn.addEventListener('click', nslidess);
leftBtn.addEventListener('click', prevSlide)


// WORKING ON QUESTION & ANSWER
const faqQuestion= document.querySelector('.faq-question');

faqQuestion.addEventListener('click', e => {

  const clicked = e.target.closest('.question-box');

  document.querySelectorAll('.anwser-box').forEach(ansBox=> {
    ansBox.classList.remove('active-answer')
  })

  document.querySelectorAll('.question-box').forEach(quBox=> {
    quBox.style.color = 'black';
  })

  if(clicked) {
    document.querySelector(`.answer-${clicked.dataset.ans}`).classList.add('active-answer');

    document.querySelector(`.question-${clicked.dataset.ans}`).style.color = 'grey';
  }
});


// WORKING ON MAP
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position)
    // Setting Posiion
    const latitude = 7.1671921;
    const longtitude = 3.3599765;
    const coord = [latitude, longtitude];

    const map = L.map('map').setView(coord, 13);

    // Display of Map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Setting a marker]
    L.marker(coord).addTo(map);
  }, function(){
    alert('Could not get current location')
  })
}