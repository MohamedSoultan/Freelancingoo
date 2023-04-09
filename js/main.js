"strict";
//  Mention elements
const tabs_howItWork = Array.from(
  document.querySelectorAll(".howItWork_orderList .item_howItWork")
);
// --
const navgation = document.querySelector(".navgation");
const navContainer = document.querySelector(".nav_container");
// --
const tabs_howItWork_content = Array.from(
  document.querySelectorAll(".content_list .warrper")
);
// --
const ListFAQ_categories = Array.from(document.querySelectorAll(".item_FAQ"));
const containerFAQ = Array.from(
  document.querySelectorAll(".rigtFAQ .warparr_acc")
);
// --
const toggles = Array.from(document.querySelectorAll(".toggles input"));
// --
const accordionOpen = Array.from(document.querySelectorAll(".accordion .item"));
// --

// ---------------------------------------------------------------------------------------------------------------
// Toggle menu
// ---------------------------------------------------------------------------------------------------------------
let transform_menu = document
  .querySelector(".transform_menu")
  .addEventListener("click", (e) => {
    navgation.classList.toggle("active");
  });
// --
const toggleSwicher = Array.from(
  document.querySelectorAll(".toggles input[type='checkbox'] ")
);
// --
// ---------------------------------------------------------------------------------------------------------------
//  Animate by opacity function
// ---------------------------------------------------------------------------------------------------------------
function animateOpacity(element, duration, targetOpacity) {
  const startOpacity = parseFloat(
    window.getComputedStyle(element).getPropertyValue("opacity")
  );
  const deltaOpacity = targetOpacity - startOpacity;
  const startTime = performance.now();

  function updateOpacity() {
    const elapsedTime = performance.now() - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const opacity = startOpacity + deltaOpacity * progress;
    element.style.opacity = opacity;

    if (progress < 1) {
      setTimeout(updateOpacity, 16); // 60 fps
    }
  }

  updateOpacity();
}
// ---------------------------------------------------------------------------------------------------------------
// Sticky navigtion
// ---------------------------------------------------------------------------------------------------------------
window.onscroll = function () {
  this.scrollY >= 50
    ? navContainer.classList.add("sticky")
    : navContainer.classList.remove("sticky");
};
//  need to make this function usfull can use in any thing  /////////////////////////////
// ---------------------------------------------------------------------------------------------------------------
// Remove all class from toggle menu and add classes to current target and has dataset has same name id content
// ---------------------------------------------------------------------------------------------------------------
function handleClasses(pearntNav, pearntContent, className) {
  pearntNav.forEach((element) => {
    element.addEventListener("click", (ele) => {
      removeClassesFromChildren(pearntNav, className);

      element.classList.add(className);

      pearntContent.forEach((content) => {
        content.style.display = "none";
      });
      document.querySelector(ele.currentTarget.dataset.cont).style.display =
        "block";
    });
  });
}
function removeClassesFromChildren(pearntNav, className) {
  pearntNav.forEach((e) => {
    e.classList.remove(className);
  });
}
// ---------------------------------------------------------------------------------------------------------------
// Remove All Classes And Add Class To Current Target current target has class remove it else add
// ---------------------------------------------------------------------------------------------------------------
const FAQitems = document.querySelectorAll(".item");
function removeAllClassesAndAddClassToCurrentTarget(pearnt, className) {
  pearnt.forEach((item) => {
    item.addEventListener("click", () => {
      pearnt.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove(className);
        }
      });
      item.classList.toggle(className);
    });
  });
}
// ---------------------------------------------------------------------------------------------------------------
// If child contains class active remove else add it
// ---------------------------------------------------------------------------------------------------------------
function toggleActive(pearnt, className) {
  pearnt.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle(className);
    });
  });
}

// ---------------------------------------------------------------------------------------------------------------
// Play functions
// ---------------------------------------------------------------------------------------------------------------
handleClasses(tabs_howItWork, tabs_howItWork_content, "active");
handleClasses(ListFAQ_categories, containerFAQ, "active");
removeAllClassesAndAddClassToCurrentTarget(FAQitems, "open");
animateOpacity(navgation, 500, 1); // fade in over 1 second
toggleActive(toggles, "active");

//  plannig to create filtertion swicher ....
//  1- check when swicher if on result = on  else result = off
//  2- add atrr to categoreis content and buttons
//  3- try to use handleClasses fuction has same functionalty
