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
