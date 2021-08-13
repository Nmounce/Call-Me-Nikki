// create nav panes

// document.addEventListener(
//     "DOMContentLoaded", () => {

//         document.querySelector(".nav-bar-left")
//             addEventListener(
//                 "click", (event) => {
//                     event.preventDefault();
//                     const navBarLeft = document.querySelector(".nav-bar-left");
//                     const listView = navBarLeft.querySelector(".nav-section-1");
//                     const listItem = document.createElement("ul");
//                     listItem.innerHTML = `
//                         <li><a href="#home">HOME</a></li>
//                         <li><a href="#work">WORK</a></li>
//                         <li><a href="#about-me">ABOUT</a></li>
//                         <li><a href="#contact">CONTACT</a></li>`;
//                         listItem.append(listView);
//                         // listView.append(navBarLeft);
//                 }
//             );

//             document.querySelector(".nav-bar-right");
//                 addEventListener(
//                     "click", (event) => {
//                         event.preventDefault();
//                         const navBarRight = document.querySelector(".nav-bar-right");
//                         const listViewTwo = navBarRight.querySelector(".nav-section-2");
//                         const listItemTwo = document.createElement("ul");
//                         listItemTwo.innerHTML = `
//                             <li><a href="#linkedin">LINKEDIN</a></li>
//                             <li><a href="#github">GITHUB</a></li>
//                             <li><a href="#ig">INSTAGRAM</a></li>
//                             <li><a href="#email">EMAIL</a></li>`;
//                             listItemTwo.append(listViewTwo);
//                             // listViewTwo.append(navBarRight);
//                     }
//                 );
//     }
// );

$(document).ready(function () {	

    var toggle<a href="https://www.jqueryscript.net/menu/">Menu</a> = function() {
        $('header').toggleClass('toggle');
        $('.main').toggleClass('push');
        $('.overlay').toggleClass('block');
        $('#social, .logo').toggleClass('reveal');
    };
  
      //Nav
      $('.nav-bar-left').click(function() {
      toggleMenu();
      });
  
    Mousetrap.bind('esc', function() {
      toggleMenu();
    });
  
  });
    //Nav
    $('.nav-bar-right').click(function() {
        toggleMenu();
        });
    
      Mousetrap.bind('esc', function() {
        toggleMenu();
      });
    
    });