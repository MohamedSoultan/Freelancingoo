//  mention elements
let tabs_howItWork = Array.from(
  document.querySelectorAll(".howItWork_orderList .item_howItWork")
);
// --

let howItWork_content = Array.from(
  document.querySelectorAll(".content_list .warrper")
);
// --

let ListFAQ_categories = Array.from(document.querySelectorAll(".item_FAQ"));
let containerFAQ = Array.from(
  document.querySelectorAll(".rigtFAQ .warparr_acc")
);
// --

let accordionOpen = Array.from(document.querySelectorAll(".accordion .item"));
// --
let menu = document.querySelector(".navgation");
// --

// ---------------------------------------------------------------------------------------------------------------
// Toggle menu
// ---------------------------------------------------------------------------------------------------------------
menu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});
// ---------------------------------------------------------------------------------------------------------------
// remove all class from toggle menu and add classes to current target and has dataset same name id content
// ---------------------------------------------------------------------------------------------------------------
function handleClasses(pearntNav, pearntContent) {
  pearntNav.forEach((element) => {
    element.addEventListener("click", (ele) => {
      pearntNav.forEach((e) => {
        e.classList.remove("active");
      });

      element.classList.add("active");

      pearntContent.forEach((content) => {
        content.style.display = "none";
      });
      document.querySelector(ele.currentTarget.dataset.cont).style.display =
        "block";
    });
  });
}
// ---------------------------------------------------------------------------------------------------------------
//add parent function will to remove all class from chlorine and add class to current target
// ---------------------------------------------------------------------------------------------------------------
function removeAndAddClasess(pearnt) {
  pearnt.forEach((ele) => {
    ele.addEventListener("click", () => {
      pearnt.forEach((e) => {
        e.classList.remove("open");
      });
      ele.classList.add("open");
    });
  });
}
removeAndAddClasess(accordionOpen);
// ---------------------------------------------------------------------------------------------------------------
// function workin
// ---------------------------------------------------------------------------------------------------------------
handleClasses(tabs_howItWork, howItWork_content);
handleClasses(ListFAQ_categories, containerFAQ);
