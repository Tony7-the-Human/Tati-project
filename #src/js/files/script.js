window.addEventListener("scroll", function () {
	const header = document.querySelector(".header");
	let scrollValue = window.scrollY;

	if (scrollValue > 66) {
		header.style.background = "rgba(0, 0, 0, 0.8)";
		header.style.paddingTop = 16 + "px";
		header.style.paddingBottom = 16 + "px";
	} else {
		header.style.background = "rgba(0, 0, 0, 0)";
		header.style.paddingTop = 24 + "px";
		header.style.marginBottom = 16 + "px";
	}
});
