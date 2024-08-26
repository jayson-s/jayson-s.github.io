document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission handler
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Simulate form submission
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    if (navLinks) {
        navLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Dynamic content loading for portfolio projects
    const projects = [
        {
            title: "Project 1: Othello Game",
            description: "A JavaFX implementation of the classic board game Othello. Features include AI opponent and strategic analysis.",
            link: "https://github.com/jayson-s/Othello"
        },
        {
            title: "Project 2: Banking System",
            description: "A C++ project simulating a basic banking system with functionalities for account creation, transactions, and balance inquiries.",
            link: "https://github.com/jayson-s/Banking-System"
        }
    ];

    const projectGrid = document.querySelector('.projects');

    if (projectGrid) {
        // Clear any existing projects to avoid duplicates
        projectGrid.innerHTML = '';

        // Add dynamic content for the projects
        projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            
            const projectTitle = document.createElement('h3');
            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.textContent = project.title;
            projectLink.target = "_blank"; // Opens the link in a new tab
            projectTitle.appendChild(projectLink);
            
            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;
            
            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectDescription);
            
            projectGrid.appendChild(projectItem);
        });
    }
});
