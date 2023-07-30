//Global Variable
let colorsList = document.querySelectorAll(".colors-list li");
let backgroundOption = true;
let countToChange;
// Check Color in local storage
let mainColor = window.localStorage.getItem("color_option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  colorsList.forEach((ele) => {
    if (ele.getAttribute("data-color") === mainColor) {
      // Remove Active Class
      colorsList.forEach((li) => {
        li.classList.remove("active");
      });
      ele.classList.add("active");
    }
  });
}

// Check Background in Local Storage
let randomBackgroundState = window.localStorage.getItem("background_option");
if (randomBackgroundState !== null) {
  if (randomBackgroundState == "true") {
    backgroundOption = true;
    randomizeImgs();
  } else {
    backgroundOption = false;
  }
  // Remove Active Class From Span
  document
    .querySelectorAll(".adjuster .active")
    .forEach((ele) => ele.classList.remove("active"));
  // Add Active Class to Span
  if (randomBackgroundState === "true") {
    document.querySelector(".adjuster .yes").classList.add("active");
  } else {
    document.querySelector(".adjuster .no").classList.add("active");
  }
}

// onclick on cogs event
let cogs = document.querySelector(".settings .fa-gear");
let settings = document.querySelector(".settings");
cogs.addEventListener("click", function () {
  this.classList.toggle("fa-spin");
  settings.classList.toggle("open");
});
// changing background image

let landingPage = document.querySelector(".landing-page");

let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
// change background image url

function randomizeImgs() {
  if (backgroundOption === true) {
    countToChange = setInterval(() => {
      // get random element from the array
      let random = images[Math.floor(Math.random() * images.length)];
      landingPage.style.backgroundImage = `url(imgs/${random})`; // this script is running in index.html page any url you set will be relative to the index.html page (the page which the script runs onto it)
    }, 5000);
  }
}

// Switch Colors

colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Remove Active Class
    colorsList.forEach((li) => {
      li.classList.remove("active");
    });
    // Change Color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // set color in local storage
    localStorage.setItem("color_option", e.target.dataset.color);
    // Add Class Active
    e.target.classList.add("active");
  });
});

// Start And Stop Random BackGround Change
let randomBackgroundEle = document.querySelectorAll(".adjuster span");
randomBackgroundEle.forEach((span) => {
  span.addEventListener("click", (e) => {
    // Remove Active Class
    document
      .querySelectorAll(".adjuster .active")
      .forEach((ele) => ele.classList.remove("active"));
    // Add Active Class
    e.target.classList.add("active");
    // Stop And Start Change
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      // Add To Local Storage
      window.localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(countToChange);
      // Add To Local Storage
      window.localStorage.setItem("background_option", false);
    }
  });
});

// open Drop Down Menu
let barsIcon = document.querySelector(".fa-bars-staggered");
let headerLinks = document.querySelector(".links");
let exitBtn = document.querySelector(".fa-circle-xmark");
barsIcon.addEventListener("click", (e) => {
  headerLinks.style.cssText = "top : 110%; opacity: 1;";
});
exitBtn.addEventListener("click", (e) => {
  headerLinks.style.cssText = "top: -300%; ; opacity : 0";
  // Remove this line of code 120 + remove pages folder
  // location.assign("pages/test.html"); // i don't need to say ./pages/test.html because im changing the url only
});
