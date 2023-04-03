//  animate opactiy
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
const animateNavgation = document.querySelector(".navgation");
animateOpacity(animateNavgation, 500, 1); // fade in over 1 second

const left_main_content = document.querySelector(".left_main_content");
animateOpacity(left_main_content, 750, 1); // fade in over 1 second

const right_main_content = document.querySelector(".right_main_content");
animateOpacity(right_main_content, 1250, 1); // fade in over 1 second

// animate form left
function animateElement(element, duration, distance) {
  const elementPos = parseInt(
    getComputedStyle(element).getPropertyValue("left")
  );
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    element.style.left =
      elementPos + distance * Math.min(progress / duration, 1) + "px";
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}
animateElement(left_main_content, 500, 100);
// animate form right
function animateElementRight(element, duration, distance) {
  const elementPos = parseInt(
    getComputedStyle(element).getPropertyValue("right")
  );
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    element.style.right =
      elementPos + distance * Math.min(progress / duration, 1) + "px";
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}
