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

// Video modal
const showVideoModalBtn = document.querySelector('#open-video-modal');
const closeVideoModalBtn = document.querySelector('.iframe__close');
const videoModal = document.querySelector('.iframe');

function showVideoModal() {
	videoModal.classList.add('show');
}

function toggleVideoModal() {
	videoModal.classList.toggle('show');
}

showVideoModalBtn.addEventListener('click', showVideoModal);
closeVideoModalBtn.addEventListener('click', toggleVideoModal);
// End video modal

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
const popupSubmit = document.querySelector('.popup__submit');

// * Toast
const toast = document.querySelector('.toast');
const closeToast = document.querySelector('.toast__close');

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

const isEmpty = (value) => value.trim() === '';
const isLengthValid = (value, min, max) =>
	value.length >= min && value.length <= max;

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isValidPhoneID = (value) => /^08\d{7,11}$/.test(value);

function showError(input, icon, feedback, message) {
	input.classList.add('error');
	icon.classList.add('show');
	feedback.textContent = message;
	feedback.classList.add('show');
}

function clearError(input, icon, feedback) {
	input.classList.remove('error');
	icon.classList.remove('show');
	feedback.classList.remove('show');
}

function resetContactForm() {
	contactForm.reset();

	clearError(firstName, errorFirstNameIcon, errorFirstName);
	clearError(lastName, errorLastNameIcon, errorLastName);
	clearError(email, errorEmailIcon, errorEmail);
	clearError(phoneNumber, errorPhoneNumberIcon, errorPhoneNumber);
	clearError(message, errorMessageIcon, errorMessage);
}

function validateForm() {
	let isValid = true;

	if (isEmpty(firstName.value) || !isLengthValid(firstName.value, 2, 30)) {
		showError(
			firstName,
			errorFirstNameIcon,
			errorFirstName,
			'First name must be 2–30 characters.'
		);
		isValid = false;
	} else {
		clearError(firstName, errorFirstNameIcon, errorFirstName);
	}

	if (!isEmpty(lastName.value) && !isLengthValid(lastName.value, 2, 30)) {
		showError(
			lastName,
			errorLastNameIcon,
			errorLastName,
			'Last name must be 2–30 characters.'
		);
		isValid = false;
	} else {
		clearError(lastName, errorLastNameIcon, errorLastName);
	}

	if (isEmpty(email.value) || !isValidEmail(email.value)) {
		showError(
			email,
			errorEmailIcon,
			errorEmail,
			'Please enter a valid email address.'
		);
		isValid = false;
	} else {
		clearError(email, errorEmailIcon, errorEmail);
	}

	if (isEmpty(phoneNumber.value) || !isValidPhoneID(phoneNumber.value)) {
		showError(
			phoneNumber,
			errorPhoneNumberIcon,
			errorPhoneNumber,
			'Phone number must start with 08 and contain 9–13 digits.'
		);
		isValid = false;
	} else {
		clearError(phoneNumber, errorPhoneNumberIcon, errorPhoneNumber);
	}

	if (isEmpty(message.value) || !isLengthValid(message.value, 10, 300)) {
		showError(
			message,
			errorMessageIcon,
			errorMessage,
			'Message must be 10–300 characters.'
		);
		isValid = false;
	} else {
		clearError(message, errorMessageIcon, errorMessage);
	}

	return isValid;
}

// ============================
// Popup handlers
// ============================
function openPopup() {
	document.querySelector('.popup').classList.add('show');

	messageName.value = `${firstName.value} ${lastName.value}`.trim();
	messageEmail.value = email.value;
	messagePhone.value = phoneNumber.value;
	inquiry.value = message.value;
}

function closePopupModal() {
	document.querySelector('.popup').classList.remove('show');
}

let toastTimeout;

function showToast() {
	toast.classList.add('show');

	toastTimeout = setTimeout(() => {
		closeToastHandler();
	}, 3000);
}

function closeToastHandler() {
	toast.classList.remove('show');
	clearTimeout(toastTimeout);
}

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	if (validateForm()) {
		openPopup();
	}
});

closePopup.addEventListener('click', () => {
	closePopupModal();
});

popupSubmit.addEventListener('click', () => {
	closePopupModal();
	showToast();
	resetContactForm();
});

closeToast.addEventListener('click', closeToastHandler);

// End contact

