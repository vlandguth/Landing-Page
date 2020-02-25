let navbarList = document.getElementById("navbar-list");
let sectionCollection = document.getElementById("section-collection");
let numOfSections = sectionCollection.childElementCount;

let firstSection = document.getElementById("first-section");
let secondSection = document.getElementById("second-section");
let thirdSection = document.getElementById("third-section");
let fourthSection = document.getElementById("fourth-section");


for (i = 1; i <= numOfSections; i++) {
  var newLi = document.createElement("li");
  newLi.textContent = "Section " + i;
  navbarList.insertBefore(newLi, navbarList.firstElementChild);
  newLi.id = "section" + i;
  };

let sectionOne = document.getElementById("section1");
let sectionTwo = document.getElementById("section2");
let sectionThree = document.getElementById("section3");
let sectionFour = document.getElementById("section4");

sectionOne.onclick = function scrollTo(){
  firstSection.scrollIntoView({behavior: "smooth"});
  firstSection.classList.add("active-section");
  secondSection.classList.remove("active-section");
  thirdSection.classList.remove("active-section");
  fourthSection.classList.remove("active-section");
}

sectionTwo.onclick = function scrollTo(){
  secondSection.scrollIntoView({behavior: "smooth"});
  secondSection.classList.add("active-section");
  firstSection.classList.remove("active-section");
  thirdSection.classList.remove("active-section");
  fourthSection.classList.remove("active-section");
}

sectionThree.onclick = function scrollTo(){
  thirdSection.scrollIntoView({behavior: "smooth"});
  thirdSection.classList.add("active-section");
  firstSection.classList.remove("active-section");
  secondSection.classList.remove("active-section");
  fourthSection.classList.remove("active-section");
}

sectionFour.onclick = function scrollTo(){
  fourthSection.scrollIntoView({behavior: "smooth"});
  fourthSection.classList.add("active-section");
  firstSection.classList.remove("active-section");
  thirdSection.classList.remove("active-section");
  secondSection.classList.remove("active-section");
}

