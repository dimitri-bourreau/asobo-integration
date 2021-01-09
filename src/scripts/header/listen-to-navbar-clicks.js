export function listenToNavBarClicks(header) {
  const { firstElementChild: nav } = header;
  const navButtons = nav.getElementsByTagName("li");

  Object.keys(navButtons).forEach((key) => {
    const button = navButtons[key];
    button.addEventListener("click", async (event) => {
      const { target } = event;
      const { classList } = target;
      const { id: navType } = target.parentNode.parentNode;
      const isAlreadySelected = classList.contains("nav-selected");
      const articles = document.getElementById("home-articles");

      if (isAlreadySelected) {
        return;
      }

      document
        .getElementById(navType)
        .getElementsByClassName("nav-selected")[0]
        .classList.remove("nav-selected");
      classList.add("nav-selected");

      articles.style.opacity = 0;
      setTimeout(() => {
        articles.style.opacity = 1;
      }, 200);
    });
  });
}
