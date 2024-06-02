document.addEventListener("DOMContentLoaded", function () {
  const profileContainers = document.querySelectorAll(".profile-container");

  profileContainers.forEach((container) => {
    container.addEventListener("mouseenter", () => {
      container.classList.add("hover");
    });

    container.addEventListener("mouseleave", () => {
      container.classList.remove("hover");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const accordionContent = button.nextElementSibling;
      button.classList.toggle("active");
      if (button.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = "0";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const flipContainer = document.querySelectorAll(".flip-container");

  flipContainer.forEach((flip) => {
    flip.addEventListener("click", () => {
      flip.classList.toggle("flip");
    });
  });
});
