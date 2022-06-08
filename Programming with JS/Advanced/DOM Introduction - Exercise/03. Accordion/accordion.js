function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let textElement = document.getElementById("extra");

  if (button.textContent == "More") {
    button.textContent = "Less";
    textElement.style.display = "block";
  } else if (button.textContent == "Less") {
    button.textContent = "More";
    textElement.style.display = "none";
  }
}
