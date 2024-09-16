// Toggle Menu Functions
var navLinks = document.getElementById("navLinks");

function showMenu() {
    if (navLinks) {
        navLinks.style.right = "-180px"; // Show the menu
    } else {
        console.error('navLinks element not found');
    }
}

function hideMenu() {
    if (navLinks) {
        navLinks.style.right = "-340px"; // Hide the menu
    } else {
        console.error('navLinks element not found');
    }
}

// Scroll Behavior
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const button = nav ? nav.querySelector('button') : null;
    const link = document.getElementById('lnk');
    const isMediaQueryMatch = window.matchMedia('(max-width: 754px)').matches;

    if (nav && button && link) {
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
            if (!isMediaQueryMatch) {
                button.classList.add('btn-scrolled');
                link.classList.add('scroll');
            }
        } else {
            nav.classList.remove('scrolled');
            button.classList.remove('btn-scrolled');
            link.classList.remove('scroll');
        }
    } else {
        console.error('Nav, button, or link elements not found');
    }
});

// Form Toggle Functions
var x = document.getElementById('sign-up');
var y = document.getElementById('sign-in');
var z = document.getElementById('btn');

function register() {
    if (x && y && z) {
        x.style.padding = "17px 0";
        x.style.marginTop = "100px";
        y.style.marginTop = "-320px";
        y.style.padding = "0px";
        z.style.left = "113px";
    } else {
        console.error('Form elements not found');
    }
}

function login() {
    if (x && y && z) {
        x.style.marginTop = "0px";
        x.style.padding = "0px";
        y.style.marginTop = "0px";
        y.style.padding = "80px 0";
        z.style.left = "0px";
    } else {
        console.error('Form elements not found');
    }
}

// Image Carousel
let carouselSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const carouselSlides = document.querySelector('.carousel-slides');

    if (carouselSlides && slides.length > 0) {
        if (index >= slides.length) {
            carouselSlideIndex = 0; // Restart from the first slide
        } else if (index < 0) {
            carouselSlideIndex = slides.length - 1; // Go to the last slide
        } else {
            carouselSlideIndex = index;
        }
        const offset = -carouselSlideIndex * 100;
        carouselSlides.style.transform = `translateX(${offset}%)`;
    } else {
        console.error('Carousel elements not found');
    }
}

function moveSlide(n) {
    showSlide(carouselSlideIndex + n);
}

window.addEventListener('DOMContentLoaded', () => {
    showSlide(carouselSlideIndex);

    // Adjust the interval time based on the number of slides
    const slideInterval = 8000; // Adjust as needed
    setInterval(() => {
        moveSlide(1); // Move to the next slide
    }, slideInterval);
});

// FAQ Pop-Up
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            // Hide all other answers
            const allAnswers = document.querySelectorAll('.faq-answer');
            allAnswers.forEach(ans => ans.style.display = 'none');

            // Show the clicked answer
            answer.style.display = 'block';
            answer.style.animation = 'slideRight 0.5s ease-out forwards';
        }
    });
});

// Prevent Screenshot
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

// Display Date
function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const greetingElement = document.getElementById('greeting');
    const currentDate = new Date();

    if (!dateElement || !greetingElement) {
        console.error('Date or greeting element not found');
        return;
    }

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    const bdayMonth = 8; // September (0-based index)
    const bdayDay = 20; // 20th day of the month

    // Check if the current date is September 20th
    if (currentDate.getMonth() === bdayMonth && currentDate.getDate() === bdayDay) {
        greetingElement.textContent = "Happy Birthday my Baby Girl Hannie!";
        dateElement.textContent = `Today is ${formattedDate}, your birthday!`;
    } else {
        greetingElement.textContent = "Hello my Bebi Girl Hannie!";

        // Calculate the next occurrence of September 20th
        const nextBirthday = new Date(currentDate.getFullYear(), bdayMonth, bdayDay);
        if (currentDate > nextBirthday) {
            nextBirthday.setFullYear(currentDate.getFullYear() + 1); // Move to next year
        }

        const timeDifference = nextBirthday - currentDate;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        // Display the days left until the next birthday
        dateElement.textContent = `Today is ${formattedDate}, Your Birthday is in ${daysLeft} days.`;
    }

    console.log(`Current Date: ${formattedDate}`);
}

// Run the function after the page loads
window.onload = displayCurrentDate;
