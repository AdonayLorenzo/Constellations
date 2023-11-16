function initialize() {
  const headerIcon = document.getElementById("header-icon");
  headerIcon.addEventListener("click", showSideMenu);
}

function showSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.remove("side-menu-closed");
  sideMenu.classList.add("side-menu-open");
}
initialize();

function initialize2() {
  const headerIcon = document.getElementById("header-icon2");
  headerIcon.addEventListener("click", unshowSideMenu);
}

function unshowSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.remove("side-menu-open");
  sideMenu.classList.add("side-menu-closed");
}
initialize2();