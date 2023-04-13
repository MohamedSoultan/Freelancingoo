"strict";
//  Mention elements

// -- start
let swichOnline = document.querySelector(".online_sellers input");
let swichPro = document.querySelector(".pro_servceis input");
let OnSellers = document.querySelectorAll(".container_cards .onlineServcies");
let proServceis = document.querySelectorAll(".container_cards .proServceis");
let allProducts = document.querySelectorAll(
  ".container_cards .wrapper_card_project"
);
// -- end

// -- start
let toggleMenu = document.querySelector(".transform_menu");
// -- end

// -- start
let navgation = document.querySelector(".navgation");
const navContainer = document.querySelector(".nav_container");
// -- end

// -- start
const tabs_howItWork = Array.from(
  document.querySelectorAll(".howItWork_orderList .item_howItWork")
);
const tabs_howItWork_content = Array.from(
  document.querySelectorAll(".content_list .warrper")
);
// -- end

// -- start
const ListFAQ_categories = Array.from(document.querySelectorAll(".item_FAQ"));
const containerFAQ = Array.from(
  document.querySelectorAll(".rigtFAQ .warparr_acc")
);
const FAQitems = document.querySelectorAll(".rigtFAQ .item");
// -- end

// -- start
const containerSwicher = document.querySelectorAll(".toggles input");

// -- start
const container_cards = Array.from(
  document.querySelectorAll(".container_cards .wrapper_card_project")
);
// -- end
// -- start
const home = document.getElementById("home");
const homeAr = document.getElementById("homeAr");
const addProject = document.getElementById("addProject");
const portfolio = document.getElementById("portfolio");
const login = document.getElementById("login");
// -- end
if (home) {

}
if (homeAr) {
}
if (addProject) {
  filterBySwicher(swichPro, allProducts, proServceis); // erorr in main file
  filterBySwicher(swichOnline, allProducts, OnSellers); // erorr in main file
  toggleActive(swichOnline, swichOnline, "active"); // erorr in main file
  toggleActive(swichPro, swichPro, "active"); // erorr in main file
}
if (portfolio) {
  filterBySwicher(swichPro, allProducts, proServceis); // erorr in main file
  filterBySwicher(swichOnline, allProducts, OnSellers); // erorr in main file
}
if (login) {
}

// ---------------------------------------------------------------------------------------------------------------
// Sticky navigtion
// ---------------------------------------------------------------------------------------------------------------
function onScroll(inHighet, addClassTo, removeClassFrom, className) {
  window.onscroll = () => {
    this.scrollY >= inHighet
      ? addClassTo.classList.add(className)
      : removeClassFrom.classList.remove(className);
  };
}
// ---------------------------------------------------------------------------------------------------------------
// Remove all class from toggle menu and add classes to current target and has dataset has same name id content
// ---------------------------------------------------------------------------------------------------------------
function handleClasses(pearntNav, pearntContent, className) {
  pearntNav.forEach((element) => {
    element.addEventListener("click", (ele) => {
      // play function remove all classes
      removeClassesFromChildren(pearntNav, className);

      // add class to target element
      element.classList.add(className);

      // remove all content from display
      pearntContent.forEach((content) => {
        content.style.display = "none";
      });

      //  if clicked to target element add dataset = change style
      document.querySelector(ele.currentTarget.dataset.cont).style.display =
        "block";
    });
  });
}
// Remove class from all elements
function removeClassesFromChildren(pearntNav, className) {
  pearntNav.forEach((e) => {
    e.classList.remove(className);
  });
}
// ---------------------------------------------------------------------------------------------------------------
// Remove All Classes And Add Class To Current Target , current target has class remove it else add
// ---------------------------------------------------------------------------------------------------------------
function removeAllClassesAndAddClassToCurrentTarget(allItems, className) {
  allItems.forEach((item) => {
    item.addEventListener("click", () => {
      allItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove(className);
        }
      });
      item.classList.toggle(className);
    });
  });
}
// ---------------------------------------------------------------------------------------------------------------
// Add toggle class to target element
// ---------------------------------------------------------------------------------------------------------------
function toggleActive(clickedElement, addToggleClassTo, className) {
  clickedElement.addEventListener("click", () => {
    addToggleClassTo.classList.toggle(className);
  });
}
// ---------------------------------------------------------------------------------------------------------------
// Filter by swicher
// ---------------------------------------------------------------------------------------------------------------
function filterBySwicher(navLink, containerAllProducts, classNameCat) {
  navLink.addEventListener("click", (_) => {
    containerAllProducts.forEach((ele) => {
      ele.classList.toggle("disabled");
    });
    classNameCat.forEach((ele) => {
      ele.classList.toggle("show");
    });
  });
}
// ---------------------------------------------------------------------------------------------------------------
// Next and previous buttons
// ---------------------------------------------------------------------------------------------------------------

function moveContent(direction) {
  var container = document.querySelector(".right_addProject"); //id
  var scrollAmount = container.offsetWidth / 3;
  if (direction === "left") {
    container.scrollLeft -= scrollAmount;
  } else if (direction === "right") {
    container.scrollLeft += scrollAmount;
  }
}
// ---------------------------------------------------------------------------------------------------------------
// Play functions
// ---------------------------------------------------------------------------------------------------------------
onScroll(50, navContainer, navContainer, "sticky");
handleClasses(tabs_howItWork, tabs_howItWork_content, "active");
removeAllClassesAndAddClassToCurrentTarget(FAQitems, "open");
handleClasses(ListFAQ_categories, containerFAQ, "active");
toggleActive(toggleMenu, navgation, "active"); // erorr
