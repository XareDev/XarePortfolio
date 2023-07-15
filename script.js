
const nav = document.querySelector("nav")
const hamMenu = document.querySelector(".mobile-nav-toggle")

hamMenu.addEventListener('click', () => {
	visible = nav.getAttribute("data-visible")
	expended = hamMenu.getAttribute("data-expanded")

	if (visible === "false") {
		nav.setAttribute("data-visible", "true")
		hamMenu.setAttribute("data-expanded", "true")
	} else if (visible === "true"){
		nav.setAttribute("data-visible", "false")
		hamMenu.setAttribute("data-expanded", "false")
	}
})
