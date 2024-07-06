function navAnimations() {
  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");
    var navbottom = document.querySelector("#nav-bottom");
    var links = document.querySelectorAll("#nav-part2 a");
    var boxes = document.querySelectorAll("#nav-bottom .box1");

    links.forEach(function (a, index) {
      a.addEventListener("mouseenter", function () {
        navbottom.style.height = "70vh";
        if (boxes[index]) {
          boxes[index].style.display = "block"; // Show the corresponding box
        }
      });

      a.addEventListener("mouseleave", function () {
        navbottom.style.height = "0vh";
        if (boxes[index]) {
          boxes[index].style.display = "none"; // Hide the corresponding box
        }
      });
    });
  });
}
function page1Animatation() {
  var page1 = document.querySelector("#page1");
  var page1 = document.querySelector("#page1 video");

  document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector("#page1 video");
    gsap.fromTo(video, { scale: 0 }, { scale: 1, duration: 1 });
  });
}

function page2Animations() {
  document.querySelectorAll("#page2 .move img").forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(2)"; // Increase the size by 20%
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)"; // Return to the initial size
    });
  });
}

function XiaomiAnimation() {
  var h1text = document.querySelector("h1").textContent;
  var splittedtxt = h1text.split("");
  console.log(splittedtxt);
  console.log(h1text);
  var clutter = "";

  splittedtxt.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  console.log(clutter);

  document.querySelector("h1").innerHTML = clutter;

  gsap.from("#nav-part1 h1 span", {
    opacity: 0,
    delay: 1,
    stagger: 0.3,
    rotate: 360,
    yoyo: true,
    repeat: -1,
  });
}

function XiaomiIndiaAnimation() {
  var h1text = document.querySelector("h5").textContent;
  var splittedtxt = h1text.split("");
  console.log(splittedtxt);
  console.log(h1text);
  var clutter = "";

  splittedtxt.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  console.log(clutter);

  document.querySelector("h5").innerHTML = clutter;

  gsap.from("div h5 span", {
    opacity: 0,
    stagger: 0.1,
    yoyo: true,
    repeat: -1,
  });
}

function page3Animations() {
  gsap.from("#page3 .card", {
    x: 1000,
    stagger: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3 ",
      scroller: "body",
      start: "top 10%",
      end: "bottom -10%",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });

  var cards = document.querySelectorAll("#page3 .card");

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      card.style.transform = "scale(1.07)";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "scale(1)";
    });
  });
}



function page5Animations() {
  gsap.from("#page5 #box .box1", {
    x: 1140,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page5 ",
      scroller: "body",
      start: "top 10%",
      end: "bottom 15%",
      scrub: 5,
      pin: true,
      // markers: true,
    },
  });
  
  var cards = document.querySelectorAll("#page5 #box .box1");
  
  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      card.style.transform = "scale(1.07)";
    });
  
    card.addEventListener("mouseleave", function () {
      card.style.transform = "scale(1)";
    });
  });
  
}


function page4Animations() {
  gsap.from("#page4 #box .box1", {
    x: 1140,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page4 ",
      scroller: "body",
      start: "top 10%",
      end: "bottom 15%",
      scrub: 5,
      pin: true,
      // markers: true,
    },
  });
  
  var cards = document.querySelectorAll("#page4 #box .box1");
  
  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      card.style.transform = "scale(1.07)";
    });
  
    card.addEventListener("mouseleave", function () {
      card.style.transform = "scale(1)";
    });
  });
  
}

XiaomiAnimation();
navAnimations();
page2Animations();
page1Animatation();
XiaomiIndiaAnimation();
page3Animations();
page4Animations();
page5Animations();

