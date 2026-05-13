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

    const searchInput = document.getElementById('product-search');
    const productCards = document.querySelectorAll('.products');

    const updateSearchCount = (visible, total) => {
        if (!searchCount) return;

        if (visible === total) {
            searchCount.textContent = `Showing all ${total} items.`;
        } else if (visible === 0) {
            searchCount.textContent = 'No matches found. Try another term.';
        } else {
            searchCount.textContent = `Showing ${visible} of ${total} items.`;
        }
    };

    const filterProducts = () => {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        productCards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const visible = query === '' || title.includes(query) || description.includes(query);
            card.style.display = visible ? 'flex' : 'none';
            if (visible) visibleCount += 1;
        });

        updateSearchCount(visibleCount, productCards.length);
    };

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
        updateSearchCount(productCards.length, productCards.length);
    }
});


function showAlert() {
    alert("Thank you for your interest in a more sustainable future! Please take a look at the products we offer.");
}

