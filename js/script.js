// Navbar toggle
const navbar = document.querySelector('.navbar__sm');
const navbarItems = document.querySelectorAll('.navbar__items');
const toggle = document.getElementById('navbarToggle');
const hamburger = document.getElementById('hamburger');

function closeNavbar() {
	hamburger.classList.remove('close');
	navbar.classList.remove('open');
}

toggle.addEventListener('click', () => {
	hamburger.classList.toggle('close');
	navbar.classList.toggle('open');
});

navbarItems.forEach((item) => {
	item.addEventListener('click', closeNavbar);
});
// End navbar toggle

// Counting animation
const counter = document.querySelector('.hero__amount h5');
const target = Number(counter.dataset.count);
const duration = 1500;

let startTime = null;

function formatNumber(num) {
	return num.toLocaleString('en-US');
}

function animateCount(currentTime) {
	if (!startTime) startTime = currentTime;

	const elapsed = currentTime - startTime;
	const progress = Math.min(elapsed / duration, 1);

	const eased = 1 - Math.pow(1 - progress, 3);
	const currentValue = Math.floor(eased * target);

	counter.textContent = formatNumber(currentValue) + '+';

	if (progress < 1) {
		requestAnimationFrame(animateCount);
	} else {
		counter.textContent = formatNumber(target) + '+';
	}
}

function startCounting() {
	startTime = null;
	counter.textContent = '0+';
	requestAnimationFrame(animateCount);
}
// End counting animation

// Modal
const modal = document.querySelector('.modal');
const greeting = document.querySelector('.hero__greeting');
const nameSpan = document.querySelector('#nameSpan');
const nameInput = document.querySelector('#nameInput');
const form = document.querySelector('#form');
const closeModal = document.querySelector('.modal__close');

function showModal() {
	modal.classList.add('show');
}

function hideModal() {
	modal.classList.remove('show');
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', showModal);

closeModal.addEventListener('click', () => {
	nameSpan.textContent = 'Revouners';

	hideModal();
	greeting.classList.add('show');
	startCounting();
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const value = nameInput.value.trim().toLowerCase();
	const firstName = value.split(/\s+/)[0];

	nameSpan.textContent = capitalize(firstName) || 'Revouners';

	hideModal();
	greeting.classList.add('show');
	startCounting();
});
// End modal

// Contact
// * Input element
const contactForm = document.querySelector('.contact__form');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const phoneNumber = document.querySelector('.phone-number');
const message = document.querySelector('.message');

// * Popup element
const messageName = document.querySelector('.message__name');
const messageEmail = document.querySelector('.message__email');
const messagePhone = document.querySelector('.message__phone');
const inquiry = document.querySelector('.message__inquiry');
const closePopup = document.querySelector('.popup__close');
const popupSubmit = document.querySelector('.pop__submit');

// * Error feedback icon
const errorFirstNameIcon = document.querySelector(
	'.contact__invalid-icon.invalid-icon-first-name'
);
const errorLastNameIcon = document.querySelector(
	'.contact__invalid-icon.invalid-icon-last-name'
);
const errorEmailIcon = document.querySelector(
	'.contact__invalid-icon.invalid-icon-email'
);
const errorPhoneNumberIcon = document.querySelector(
	'.contact__invalid-icon.invalid-icon-phone-number'
);
const errorMessageIcon = document.querySelector(
	'.contact__invalid-icon.invalid-icon-message'
);

// * Error feedback
const errorFirstName = document.querySelector(
	'.contact__invalid-feedback.invalid-first-name'
);
const errorLastName = document.querySelector(
	'.contact__invalid-feedback.invalid-last-name'
);
const errorEmail = document.querySelector(
	'.contact__invalid-feedback.invalid-email'
);
const errorPhoneNumber = document.querySelector(
	'.contact__invalid-feedback.invalid-phone-number'
);
const errorMessage = document.querySelector(
	'.contact__invalid-feedback.invalid-message'
);

console.log(errorFirstNameIcon, errorMessageIcon);
// End contact