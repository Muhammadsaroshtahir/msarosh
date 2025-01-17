// Navigation Links
let navLinks = document.getElementById('navLinks');

// Dynamic Text Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const words = ["AI_Engineer", "AI_Enthusiast"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 100;
    const pauseBetweenWords = 500;
    const dynamicText = document.querySelector(".dynamic-text");

    function type() {
        currentWord = words[i];
        if (isDeleting) {
            dynamicText.textContent = currentWord.substring(0, j--);
        } else {
            dynamicText.textContent = currentWord.substring(0, j++);
        }

        if (!isDeleting && j === currentWord.length) {
            setTimeout(() => (isDeleting = true), pauseBetweenWords);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }

        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
});

// Show Navigation Menu
function showMenu() {
    navLinks.style.display = 'block';
}

// Hide Navigation Menu
function hideMenu() {
    navLinks.style.display = '';
}

// Download Resume
function down() {
    location.href = "https://github.com/Muhammadsaroshtahir/CV/blob/main/MY_f_Resume.pdf";
}

// Animate Project Card
function animateProject(element) {
    element.style.transform = "scale(1.1)";
    element.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
}

// Reset Project Card Animation
function resetAnimation(element) {
    element.style.transform = "scale(1)";
    element.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
}

// Blog Section Management
document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = document.querySelectorAll(".blog-post");

    function toggleBlogVisibility() {
        blogPosts.forEach(post => {
            post.classList.toggle('hidden');
        });
    }

    const toggleBlogButton = document.getElementById("toggleBlogButton");
    if (toggleBlogButton) {
        toggleBlogButton.addEventListener('click', toggleBlogVisibility);
    }
});

//contact
// Initialize EmailJS
(function() {
    emailjs.init("QcCdtjeqapnO1_n3yY"); // Replace with your EmailJS public key
})();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Send email using EmailJS
    emailjs.send("service_c9lfmhm", "template_vj8n6ip", data)
        .then(() => {
            alert("Your message has been sent successfully!");
            event.target.reset(); // Reset form fields
        })
        .catch(error => {
            console.error("Failed to send message:", error);
            alert("An error occurred. Please try again.");
        });
});
