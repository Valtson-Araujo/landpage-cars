document.querySelectorAll("summary").forEach((i, n) => {
    i.addEventListener("click", () => {
       const icon = document.querySelector(`#icon-${n + 1}`)

       if (icon.textContent === "expand_more") {
        icon.textContent = "expand_less"
    } else {
        icon.textContent = "expand_more"
    }
    })
})

document.getElementById('btn-menu').addEventListener('click', () => {
    document.querySelector('header nav').classList.add('show-menu')
})

document.getElementById('btn-close').addEventListener('click', () => {
    document.querySelector('header nav').classList.remove('show-menu')
})

