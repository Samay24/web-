// Dropdown Menu Toggle
const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle the dropdown menu when the hamburger icon is clicked
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// Close dropdown when a menu item is clicked
document.querySelectorAll('#dropdown-menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close the dropdown after selecting an option
    dropdownMenu.classList.remove('active');
  });
});

// Add hover effect to project cards
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = "scale(1.05)";
    project.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
  });
  
  project.addEventListener('mouseleave', () => {
    project.style.transform = "scale(1)";
    project.style.boxShadow = "none";
  });
});

// Contact form validation and submission behavior
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;
  
  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }
  
  // Normally, here you would send the data to the server
  console.log("Form submitted:", { name, email, message });
  alert("Thank you for your message! I'll get back to you soon.");
  
  // Reset the form after submission
  form.reset();
});
