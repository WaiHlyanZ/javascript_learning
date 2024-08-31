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
  
  // Track current item index
  let currentItem = 0;
  
  // Display the person based on the current item index
  const showPerson = () => {
    // Object destructuring to faster access the properties
    const { img: imgSrc, name, job: personJob, text } = reviews[currentItem];
    img.src = imgSrc;
    author.textContent = name;
    job.textContent = personJob;
    info.textContent = text;
  };
  console.log(3%5)
  // Update the current item index and wrap around if needed
  const updateIndex = (increment) => {
    // Logically solved to avoid manual if/else
    currentItem = (currentItem + increment + reviews.length) % reviews.length;
    showPerson();
  };
  
  // Load the first person on DOMContentLoaded
  window.addEventListener("DOMContentLoaded", showPerson);
  
  // Event listeners for buttons
  nextBtn.addEventListener("click", () => updateIndex(1));
  prevBtn.addEventListener("click", () => updateIndex(-1));
  randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
  });
  