function togglMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* Codigo Para mudar a imagem de perfil*/

  const img = document.querySelector(".profile-image")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/profile1.png")
  } else {
    img.setAttribute("src", "./img/profile1.png")
  }
}

/* Codigo para mudar a cor do background completo
 if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
