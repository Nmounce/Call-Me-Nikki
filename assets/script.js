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

//create feature card
const featureDisplay = [{
  image: "<a href='https://nmounce.github.io/01-Homework/' target='_blank'><img class='featured-image' src='./Portfolio/card-2.jpg'  alt='white smoke'></a>",
  title: "ftitle",
  description: "fdesc"
}];

const featureContainer = document.querySelector("#feature-card");
  featureDisplay.forEach((result, idx) => {
    const fCard= document.createElement("div");
    fCard.classList = "f-card-body";
    const fContent = `
      <div class="feature-proj-card">
        <a class="featured-image"></a>
        <div class="feature-proj-text" id="heading-${idx}">
          <h5 class="feature-proj-title">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
              <a class='featured-link'></a>
            </h5>
        </div>
      </div>
      <div id="collapse-${idx}" class="collapse show" aria-label="heading-${idx}" data-parent="#project-cards">
        <div class="card-body">
          <a>${result.image}</a>
          <h5>${result.title}</h5>
          <p>${result.description}</p>
        </div>
    </div>
  </div>`;

  featureContainer.innerHTML += fContent;
});

//create cards

const cardDisplay = [{
  title: "title1",
  description: "desc1",
  image: "<a class='cards' href='#' target='_blank'><img class='card-image' src='./Portfolio/card-1.jpg' alt='blue smoke'></a>"
}, {
  title: "title2",
  description: "desc2",
  image: "<a class='cards' href='#' target='_blank'><img class='card-image' src='./Portfolio/card-3.jpg' alt='pink smoke'></a>"
}, {
  title: "title3",
  description: "desc3",
  image: "<a class='cards' href='#' target='_blank'><img class='card-image' src='./Portfolio/card-6.jpg' alt='yellow smoke'></a>"
}, {
  title: "title4",
  description: "desc4",
  image: "<a class='cards' href='#' target='_blank'><img class='card-image' src='./Portfolio/card-5.jpg' alt='green smoke'></a>"
}, {
  title: "title5",
  description: "desc5",
  image: "<a class='cards' href='#' target='_blank'><img class='card-image' src='./Portfolio/card-4.jpg' alt='orange smoke'></a>"
}, {
  title: "title6",
  description: "desc6",
  image: "<a class='cards' href='#' target='_blank'><img class='card-image' src='./Portfolio/card-6alt.jpg' alt='#'></a>"
}];

  const container = document.querySelector("#project-cards");
  cardDisplay.forEach((result, idx) => {
    const cards= document.createElement("div");
    cards.classList = "card-body";
    const content = `
      <div class="card">
      <div class="card-text" id="heading-${idx}">
        <h5 class="card-title">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
        </h5>
      </div>
      <div id="collapse-${idx}" class="collapse show" aria-label="heading-${idx}" data-parent="#project-cards">
        <div class="card-body">
          <h5>${result.title}</h5>
          <p>${result.description}</p>
          <a>${result.image}</a>
          <a>${result.link}</a>
        </div>
    </div>
  </div>`;

  container.innerHTML += content;
});

