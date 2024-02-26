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

