const icon = document.querySelector("#icon");
const body = document.body;
icon.onclick = () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    icon.name = "sunny";
    icon.classList.remove("moon");
    icon.classList.add("sun");
  } else {
    icon.name = "moon";
    icon.classList.remove("sun");
    icon.classList.add("moon");
  }
};
