/*------------明暗-----------*/
window.addEventListener('load', function () {
  const themeButton = document.getElementById('theme-button')
  const lightTheme = 'light-theme'
  const iconTheme = 'uil-sun'

  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  // We obtain the current theme that the interface has by validating the light-theme class
  const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil uil-moon' : 'uil uil-sun'

  // We validate if the user previously chose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedTheme === 'uil uil-moon' ? 'add' : 'remove'](iconTheme)
  }

  // Activate / deactivate the theme manually with the button
  if (themeButton) {
    // The rest of your JavaScript code here
    themeButton.addEventListener('click', () => {
      //Add or remove the light / icon theme
      document.body.classList.toggle(lightTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
    })
  }
});