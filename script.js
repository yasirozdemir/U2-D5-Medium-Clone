function whenScrolledChangeBackgroundColor() {
  var header = document.getElementsByTagName("header")[0];
  var getStartedButton = document.querySelector(
    ".header-links.get-started_button"
  );

  console.log(getStartedButton);

  var scrollValue = window.scrollY;

  if (scrollValue < 375) {
    header.classList.remove("white-background");
    getStartedButton.classList.remove("green-background");
  } else {
    header.classList.add("white-background");
    getStartedButton.classList.add("green-background");
  }
}

window.addEventListener("scroll", whenScrolledChangeBackgroundColor);
