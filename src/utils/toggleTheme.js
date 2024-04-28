
function toggleTheme() {
  const toggleThemeBtn = document.querySelector('.toggleTheme')
  const icon = toggleThemeBtn.firstElementChild

  let currentTheme = localStorage.getItem("theme")
  let currentIcon = localStorage.getItem("icon")
  
  if (currentTheme == "dark") {
    localStorage.setItem("theme", "dark")
    localStorage.setItem("icon", "sunny")
    document.documentElement.classList.remove('light-theme')
    icon.name = currentIcon
  } else {
    localStorage.setItem("theme", "light")
    localStorage.setItem("icon", "moon")
    document.documentElement.classList.add('light-theme')
    icon.name = currentIcon
  }


  toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme')

    if (icon.name == "moon") {
      icon.name = "sunny"
      localStorage.setItem("theme", "dark")
    } else {
      icon.name = "moon"
      localStorage.setItem("theme", "light")
    }
  })
}

export default toggleTheme
