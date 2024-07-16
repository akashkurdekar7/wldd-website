function toggleMenu() {
  const navList = document.getElementById("navList");
  const burger = document.getElementById("burger");
  navList.classList.toggle("active");
  burger.classList.toggle("active");
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-items a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navList = document.getElementById("navList");
    navList.classList.remove("active");
    burger.classList.remove("active");
  });
});
