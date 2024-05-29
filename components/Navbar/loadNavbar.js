document.addEventListener("DOMContentLoaded", function () {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    fetch("/components/Navbar/navbar.html")
      .then((response) => response.text())
      .then((html) => (navbarPlaceholder.innerHTML = html))
      .catch((err) => console.error("Failed to load navbar:", err));
  }
});
