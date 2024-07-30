function navigate(section) {
  document.querySelectorAll(".content").forEach(function (content) {
    content.classList.remove("active");
  });
  document.getElementById(section).classList.add("active");
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
