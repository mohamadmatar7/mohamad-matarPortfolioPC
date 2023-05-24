// Function for changing the header background color when scrolling
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 10;
  header.classList.toggle("scrolling-active", windowPosition);
});

// Function for humburger menu
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menuToggle');
  const navMenu = document.querySelector('.navMenu');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const navMenuItems = document.querySelectorAll(".navMenu__item");

  function setActiveMenuItem() {
    const scrollPosition = window.pageYOffset;

    navMenuItems.forEach(function (item) {
      const sectionId = item.getAttribute("href");
      const section = document.querySelector(sectionId);

      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveMenuItem);
  setActiveMenuItem();
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("downloadButton")
    .addEventListener("click", function () {
      const fileUrl = "mohamad-matar_cv.pdf";
      const fileName = "mohamad-matar_cv.pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      link.target = "_blank";
      link.click();
    });
});




// Cursor
let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");
window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};


// Hover effect
const hoverToggle = ($el, className) => {
  $el.addEventListener("mouseover", () => {
    cursor1.classList.add(className);
    cursor2.classList.add(className);
  });

  $el.addEventListener("mouseleave", () => {
    cursor1.classList.remove(className);
    cursor2.classList.remove(className);
  });
};


// Hover effect on links
let links = document.querySelectorAll("a");
links.forEach((link) => {
  hoverToggle(link, "link-active");
});


// Hover effect images
// const test = document.getElementById("test");
// hoverToggle(test, "test-image");

const cv = document.getElementById("downloadButton");
hoverToggle(cv, "cv-image");

const contactImg = document.getElementById("contactImg");
hoverToggle(contactImg, "contact-image");




// Scroll reveal
const scr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 2000,
  reset: true,
});
scr.reveal(`section`, { delay: 180, interval: 200, origin: "bottom" });



// Typing effect
document.addEventListener('DOMContentLoaded', function() {
  let span = document.getElementById('name');
  let names = [' Samer', ' Matar'];
  let index = 0;

  function changeName() {
    span.textContent = names[index];
    index = (index + 1) % names.length;
  }

  setInterval(changeName, 1500); 
});


