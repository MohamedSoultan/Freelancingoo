//  Mention elements
let tabs_howItWork = Array.from(
  document.querySelectorAll(".howItWork_orderList .item_howItWork")
);
// --

let tabs_howItWork_content = Array.from(
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
let navgation = document.querySelector(".navgation");
// --

// ---------------------------------------------------------------------------------------------------------------
// Toggle menu
// ---------------------------------------------------------------------------------------------------------------
navgation.addEventListener("click", (e) => {
  navgation.classList.toggle("active");
});

// --
let toggleSwicher = Array.from(
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
// Remove all class from toggle menu and add classes to current target and has dataset has same name id content
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
// Add parent function will to remove all class from chlorine and add class to current target
// ---------------------------------------------------------------------------------------------------------------
function removeAndAddClasess(pearnt, nameClass) {
  pearnt.forEach((ele) => {
    ele.addEventListener("click", () => {
      pearnt.forEach((e) => {
        e.classList.remove(nameClass);
      });
      ele.classList.add(nameClass);
    });
  });
}
// toggleSwicher.forEach((ele) => {
//   ele.addEventListener("click", (e) => {
//     toggleSwicher.forEach((element) => {
//       element.removeAttribute("checked");
//     });
//     toggleSwicher.forEach((element) => {
//       element.setAttribute("checked", "");
//     });
//   });
// });
// ---------------------------------------------------------------------------------------------------------------
// Play functions
// ---------------------------------------------------------------------------------------------------------------
handleClasses(tabs_howItWork, tabs_howItWork_content);
handleClasses(ListFAQ_categories, containerFAQ);
removeAndAddClasess(accordionOpen, "open");
animateOpacity(navgation, 500, 1); // fade in over 1 second
