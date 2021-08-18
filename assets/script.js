//create nav bars

$(document).ready(function () {

  var toggle = () => {
      $('header').toggleClass('toggle');
      $('.main').toggleClass('push');
      $('.overlay').toggleClass('block');
      $('#social, .logo').toggleClass('reveal');
  };
    //Nav left
    $('.nav-bar-left').click(function() {
    toggleMenu();
    });
  Mousetrap.bind('esc', function() {
    toggleMenu();
  });
  //Nav right
  $('.nav-bar-right').click(function() {
      toggleMenu();
      });
    Mousetrap.bind('esc', function() {
      toggleMenu();
    });
  });

//create cards

const cardDisplay = [{
  title: "Day Planner",
  description: "Hourly Day Organizer",
  image: "<img class='card-image' src='https://media.giphy.com/media/4WFFhPxofnKxm30rCu/giphy.gif'>",
  location: "https://nmounce.github.io/monthly-day-planner/"
}, {
  title: "Weather Dashboard",
  description: "Find Weather by City",
  image: "<img class='card-image' src='https://media.giphy.com/media/LVCdHNPTIY2be/giphy.gif'>",
  location: "https://nmounce.github.io/weather-dashboard/"
}, {
  title: "Javascript Quiz",
  description: "8-Question Quiz",
  image: "<img class='card-image' src='https://media.giphy.com/media/3otPoT1atQUL9KIta0/giphy.gif'>",
  location: "https://nmounce.github.io/test-your-knowledge-javascript/"
}, {
  title: "Password Generator",
  description: "Create Random Passwords",
  image: "<img class='card-image' src='https://media.giphy.com/media/JDPsfIOg1uL6M/giphy.gif'>",
  location: "https://nmounce.github.io/Password-Generator/"
}, {
  title: "Coming Soon!",
  description: "",
  image: "<img class='card-image' src='https://media.giphy.com/media/xaZCqV4weJwHu/giphy.gif'>",
  location: ""
}, {
  title: "Coming Soon!",
  description: "",
  image: "<img class='card-image' src='https://media.giphy.com/media/fAV73wP5H7xN6/giphy.gif'>",
  location: ""
}];

  const container = document.querySelector("#project-cards");
  cardDisplay.forEach((result) => {
    const cards= document.createElement("div");
    cards.classList = "all-projects";
    const content = `
        <div class="all-cards">
          <img class="card">${result.image}</img>
          <div class="text-block">
            <a href="${result.location}">
              <button class="all-btns">
                <h5 class="title">${result.title}</h5>
                <p class="desc">${result.description}</p>
              </button>
            </a>
          </div>
        </div>`;

  container.innerHTML += content;
});

// //button for featured project
// $("#feat-btn").click(function(event){
//   event.preventDefault();
//   window.location= "https://nmounce.github.io/project-01/";
// });

// //buttons for all other projects
// $("all-btn").click(function(event){
//   event.preventDefault();
//   window.location = "";
// });