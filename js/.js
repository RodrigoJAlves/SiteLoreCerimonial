window.onhashchange = function (e) {
    const oldURL = e.oldURL.split('#')[1]
    const newURL = e.newURL.split('#')[1]
    console.log(oldURL, newURL)
    const old = document.querySelector(`.menu a[href='#${oldURL}']`)
    const newMenu = document.querySelector(`.menu a[href='#${newURL}']`)
    old && old.classList.remove('selected')
    newMenu && newMenu.classList.add('selected')
}