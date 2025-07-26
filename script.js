// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cart Functionality (Example)
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");

let count = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });
});

// Get modal elements
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");
const closeModalButtons = document.querySelectorAll(".close-modal");
const switchToSignup = document.getElementById("switch-to-signup");
const switchToLogin = document.getElementById("switch-to-login");

// Open Login Modal
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "block";
});

// Open Sign Up Modal
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.style.display = "block";
});

// Close Modals
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  });
});

// Switch to Sign Up Modal from Login Modal
switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  signupModal.style.display = "block";
});

// Switch to Login Modal from Sign Up Modal
switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.style.display = "none";
  loginModal.style.display = "block";
});

// Close Modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginModal || e.target === signupModal) {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  }
});

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  alert(`Login with Email: ${email}, Password: ${password}`);
  loginModal.style.display = "none";
});

// Sign Up Form Submission
document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;
  
    // Validate passwords
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Simulate a successful sign-up (replace with actual sign-up logic)
    alert(`Sign Up Successful! Welcome, ${name}.`);
  
    // Clear the Sign Up form
    document.getElementById("signup-form").reset();
  
    // Close the Sign Up Modal
    signupModal.style.display = "none";
  
    // Automatically open the Login Modal
    loginModal.style.display = "block";
  
    // Pre-fill the Login form with the signed-up email
    document.getElementById("login-email").value = email;
  });