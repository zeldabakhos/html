const toggleBtn = document.querySelector(".header__toggle-btn")
const header = document.querySelector(".header")

toggleBtn.addEventListener("click", () => {
	header.classList.toggle("header-open")
})
