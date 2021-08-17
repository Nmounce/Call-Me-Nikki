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
  title: "Melifluous",
  description: "Music Search App",
  image: "<img class='card-image' id='featured-image' src='./Portfolio/card-2.jpg' alt='pink smoke'><a class='cards' href='#' target='_blank'></a></img>"
}, {
  title: "title1",
  description: "desc1",
  image: "<img class='card-image' src='./Portfolio/card-1.jpg' alt='blue smoke'><a class='cards' href='#' target='_blank'></a></img>"
}, {
  title: "title2",
  description: "desc2",
  image: "<img class='card-image' src='./Portfolio/card-3.jpg' alt='pink smoke'><a class='cards' href='#' target='_blank'></a></img>"
}, {
  title: "title3",
  description: "desc3",
  image: "<img class='card-image' src='./Portfolio/card-6.jpg' alt='yellow smoke'><a class='cards' href='#' target='_blank'></a></img>"
}, {
  title: "title4",
  description: "desc4",
  image: "<img class='card-image' src='./Portfolio/card-5.jpg' alt='green smoke'><a class='cards' href='#' target='_blank'></a></img>"
}, {
  title: "title5",
  description: "desc5",
  image: "<img class='card-image' src='./Portfolio/card-4.jpg' alt='orange smoke'><a class='cards' href='#' target='_blank'></a></img>"
}, {
  title: "title6",
  description: "desc6",
  image: "<img class='card-image' src='./Portfolio/card-6alt.jpg' alt='#'><a class='cards' href='#' target='_blank'></a></img>"
}];

  const container = document.querySelector("#project-cards");
  cardDisplay.forEach((result) => {
    const cards= document.createElement("div");
    cards.classList = "all-projects";
    const content = `
        <div class="all-cards">
          <img class="card">${result.image}</img>
          <div class="text-block">
            <h5 class="title">${result.title}</h5>
              <p class="desc">${result.description}</p>
          </div>

        </div>`;

  container.innerHTML += content;
});

