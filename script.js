function toggleMode() {
  const html = document.documentElement
  // pegar a tag img
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, manter a imagem normal

    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
