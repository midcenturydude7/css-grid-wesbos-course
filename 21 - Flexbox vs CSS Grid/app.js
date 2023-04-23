const flipIt = document.getElementById("flip-it");

flipIt.addEventListener("click", () => {
  const flipper = document.querySelector(".flipper");
  flipper.classList.toggle("flip");
});
