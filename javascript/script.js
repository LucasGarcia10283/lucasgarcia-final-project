function showAlert() {
    alert("Thank you for your interest in a more sustainable future! Please take a look at the products we offer.")
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        console.log("Menu formated for mobile viewing");
    });
}