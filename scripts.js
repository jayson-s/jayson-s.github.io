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

    // Dynamic content loading for portfolio projects with one-sided hover effect
    const projects = [
        {
            title: "Othello Game",
            description: "A dynamic implementation of the classic Othello board game using JavaFX. The AI opponent adapts to various difficulty levels, providing strategic challenges for users. Built using Java, it showcases complex logic design and real-time user interactions.",
            link: "https://github.com/jayson-s/Othello"
        },
        {
            title: "Banking System",
            description: "Simulated banking system created in C++ that handles account creation, transactions, and balance inquiries. This project focused on ensuring data integrity, scalability, and optimal user interface design. It demonstrates advanced data structures and error-handling methods.",
            link: "https://github.com/jayson-s/Banking-System"
        }
    ];

    const projectGrid = document.querySelector('.projects');

    if (projectGrid) {
        // Clear any existing projects to avoid duplicates
        projectGrid.innerHTML = '';

        // Add dynamic content for the projects as one-sided hover cards
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project', 'hover-card');  // Use 'project' and 'hover-card' classes

            const projectTitle = document.createElement('h3');
            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.textContent = project.title;
            projectLink.target = "_blank"; // Opens the link in a new tab
            projectTitle.appendChild(projectLink);
            
            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;
            
            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectDescription);

            // Append the card to the grid
            projectGrid.appendChild(projectCard);
        });
    }
});
