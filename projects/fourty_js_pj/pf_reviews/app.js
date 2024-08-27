 
// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

// selected items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// querySelector select only first item 
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// display random item when DOM is loaded
//                  5    10
function randomIdx(min, max, int=true) {
    if (int) {
        // Generate a random integer between min (inclusive) and max (exclusive)
        return Math.floor(Math.random() * (max - min)) + min;
    } else {
        // Generate a random float between min (inclusive) and max (exclusive)
        return Math.random() * (max - min) + min;
      }
    }
    

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson();

});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};


function checkRecords() {
  if (currentItem >= reviews.length) {
    currentItem = 0;
  } else if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  checkRecords();
  showPerson();
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  checkRecords();
  showPerson();
});

randomBtn.addEventListener("click", () => {
  currentItem = randomIdx(0, reviews.length);
  showPerson();
});
