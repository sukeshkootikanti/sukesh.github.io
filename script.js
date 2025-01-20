function contactmePage() {
    // Specify the URL of the page you want to go to
    window.location.href = "contactme.html";  // Change this to your desired URL
}

function HomePage() {
    // Specify the URL of the page you want to go to
    window.location.href = "index.html";  // Change this to your desired URL
}

function ExperiencePage() {
    // Specify the URL of the page you want to go to
    window.location.href = "index.html#experience";  // Change this to your desired URL
}

// Function to change pages with slide transition
function changePage(sectionId, event) {
    const sections = document.querySelectorAll('.page-section');
    const selectedPage = document.getElementById(sectionId);
    const clickedButton = event.currentTarget;

    // Add slide-in effect to the clicked button
    clickedButton.classList.add('clicked');
    setTimeout(() => {
        clickedButton.classList.remove('clicked');
    }, 700);

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('show');
        section.style.display = 'none';
    });

    // Show the selected section
    selectedPage.style.display = 'flex';
    setTimeout(() => {
        selectedPage.classList.add('show');
    }, 20);

    // Update active button state
    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');

    // Scroll to the top of the page
    window.scrollTo(0, 0);
}

// Initialize the first page as visible
document.addEventListener("DOMContentLoaded", function() {
    changePage('about', { currentTarget: document.querySelector('[onclick="changePage(\'about\', event)"]') });

    // Add the existing timeline code here
    const timeline = document.querySelector('.experience-timeline');
    const cards = timeline.querySelectorAll('.experience-card');

    cards.forEach((card, index) => {
        const dot = document.createElement('div');
        dot.classList.add('timeline-dot');
        dot.style.top = `${index * 25}%`;

        dot.addEventListener('click', () => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        timeline.appendChild(dot);
    });

    const line = document.createElement('div');
    line.classList.add('timeline-line');
    timeline.appendChild(line);
});


// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construct mailto link
    const mailtoLink = `mailto:sukeshkootikanti@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    this.reset();

    // Show confirmation message
    alert('Thank you for your message. Your email client should now open with the prepared email.');
});


document.addEventListener("DOMContentLoaded", function() {
const factItems = document.querySelectorAll('.fact-item');
factItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});
});


// Add this function to your existing script.js file
function showExperienceDetails(company, role) {
    // You can use these parameters to load specific content for each experience
    window.location.href = `experience-details.html?company=${encodeURIComponent(company)}&role=${encodeURIComponent(role)}`;
}

// Update the existing code that adds event listeners to the "Know More" buttons
document.addEventListener("DOMContentLoaded", function() {
    const knowMoreButtons = document.querySelectorAll('.know-more-button');
    knowMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.experience-card');
            const company = card.querySelector('h3').textContent.split('-')[1].trim();
            const role = card.querySelector('h3').textContent.split('-')[0].trim();
            showExperienceDetails(company, role);
        });
    });
});