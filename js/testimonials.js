const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

testimonials.forEach((testimonial, index) => {
  if (index === currentIndex) {
    testimonial.classList.add("active");
    console.log("😑");
  } else {
    testimonial.classList.add("disactive");
  }
});

function showTestimonial(direction) {
  testimonials[currentIndex].classList.remove("active");
  testimonials[currentIndex].classList.add("disactive");

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.remove("disactive");
    testimonials[currentIndex].classList.add("active");
  } else if (direction === "prev") {
    testimonials[currentIndex].classList.add("disactive");
    testimonials[currentIndex].classList.remove("active");
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    testimonials[currentIndex].classList.add("active");
    testimonials[currentIndex].classList.remove("disactive");
  }
}

document.getElementById("nextButton").addEventListener("click", () => {
  showTestimonial("next");
});

document.getElementById("prevButton").addEventListener("click", () => {
  showTestimonial("prev");
});
