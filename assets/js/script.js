const mode = document.getElementById("mode_icon");
mode.addEventListener("click", () => {
  // if (mode.classList.contains("fa-moon")) {
  //   mode.classList.remove("fa-moon");
  //   mode.classList.add("fa-sun");
  //   return;
  // }

  // mode.classList.add("fa-moon");
  // mode.classList.remove("fa-sun");
  mode.classList.toggle("fa-moon");
  mode.classList.toggle("fa-sun");
  // document.body.classList.toggle("dark");
  const rootDataset = document.documentElement.dataset;
  const inDarkMode = rootDataset.theme === "dark";
  rootDataset.theme = inDarkMode ? "" : "dark";
});
