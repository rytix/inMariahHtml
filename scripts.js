// Team Slider
const teamSlider = document.getElementById("slider-team");
const teamPrevBtn = document.getElementById("team-prev");
const teamNextBtn = document.getElementById("team-next");
const teamCard = teamSlider.querySelector(".team-card");

// Team Slider - Ajustado para cálculo mais preciso
function slideTeam(direction) {
	const cardWidth = teamCard.getBoundingClientRect().width; // Calcula a largura exata do cartão
	const maxScrollLeft = teamSlider.scrollWidth - teamSlider.clientWidth;

	if (direction === 1 && teamSlider.scrollLeft + cardWidth >= maxScrollLeft) {
		// Reset to start
		teamSlider.scrollLeft = 0;
	} else if (direction === -1 && teamSlider.scrollLeft <= 0) {
		// Go to end
		teamSlider.scrollLeft = maxScrollLeft;
	} else {
		teamSlider.scrollLeft += direction * cardWidth;
	}
}

teamPrevBtn.addEventListener("click", () => {
	slideTeam(-1);
	resetTeamAutoSlide();
});

teamNextBtn.addEventListener("click", () => {
	slideTeam(1);
	resetTeamAutoSlide();
});

// Auto-slide functionality
let teamAutoSlideInterval = setInterval(() => {
	slideTeam(1);
}, 8000);

function resetTeamAutoSlide() {
	clearInterval(teamAutoSlideInterval);
	teamAutoSlideInterval = setInterval(() => {
		slideTeam(1);
	}, 8000);
}

// Pause auto-slide on hover
teamSlider.addEventListener("mouseenter", () => {
	clearInterval(teamAutoSlideInterval);
});

teamSlider.addEventListener("mouseleave", () => {
	resetTeamAutoSlide();
});

// Therapies Slider
const therapySlider = document.getElementById("therapies-slider");
const therapyPrevBtn = document.getElementById("therapy-prev");
const therapyNextBtn = document.getElementById("therapy-next");
const therapyCard = therapySlider.querySelector(".therapy-card");

// Therapy Slider - Ajustado para cálculo mais preciso
function slideTherapy(direction) {
	const cardWidth = therapyCard.getBoundingClientRect().width; // Calcula a largura exata do cartão
	const maxScrollLeft = therapySlider.scrollWidth - therapySlider.clientWidth;

	if (direction === 1 && therapySlider.scrollLeft + cardWidth >= maxScrollLeft) {
		// Reset to start
		therapySlider.scrollLeft = 0;
	} else if (direction === -1 && therapySlider.scrollLeft <= 0) {
		// Go to end
		therapySlider.scrollLeft = maxScrollLeft;
	} else {
		therapySlider.scrollLeft += direction * cardWidth;
	}
}

therapyPrevBtn.addEventListener("click", () => {
	slideTherapy(-1);
	resetTherapyAutoSlide();
});

therapyNextBtn.addEventListener("click", () => {
	slideTherapy(1);
	resetTherapyAutoSlide();
});

// Auto-slide functionality
let therapyAutoSlideInterval = setInterval(() => {
	slideTherapy(1);
}, 8000);

function resetTherapyAutoSlide() {
	clearInterval(therapyAutoSlideInterval);
	therapyAutoSlideInterval = setInterval(() => {
		slideTherapy(1);
	}, 8000);
}

// Pause auto-slide on hover
therapySlider.addEventListener("mouseenter", () => {
	clearInterval(therapyAutoSlideInterval);
});

therapySlider.addEventListener("mouseleave", () => {
	resetTherapyAutoSlide();
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
	const question = item.querySelector(".faq-question");
	question.addEventListener("click", () => {
		// Toggle active class
		question.classList.toggle("active");

		// Toggle answer visibility
		const answer = item.querySelector(".faq-answer");
		if (question.classList.contains("active")) {
			answer.style.maxHeight = answer.scrollHeight + "px";
		} else {
			answer.style.maxHeight = 0;
		}
	});
});

// Optional: Mobile Navigation Toggle
const navBurger = document.getElementById("burger-menu");
const navListMobile = document.getElementById("nav-mobile-expand");

navBurger.addEventListener("click", () => {
	navListMobile.classList.toggle("show");
});

document.querySelectorAll(".mobile-link").forEach((element) => {
	element.addEventListener("click", () => {
		document.getElementById("nav-mobile-expand").classList.toggle("show");
	});
});

const footerYear = document.getElementById("footer-year");
footerYear.textContent = new Date().getFullYear();
