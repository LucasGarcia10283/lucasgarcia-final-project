document.addEventListener('DOMContentLoaded', () => {


    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
         
            navLinks.classList.toggle('active');
            
            
            console.log("Mobile menu state toggled.");
        });
    }


    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});


function showAlert() {
    
    alert("Thank you for your interest in a more sustainable future! Please take a look at the products we offer.");
}

