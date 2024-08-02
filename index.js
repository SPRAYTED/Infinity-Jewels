document.addEventListener("DOMContentLoaded", () => {
    // Animate navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, 200 * index);
    });

    // Animate product items on scroll
    const productItems = document.querySelectorAll(".product-item");

    const animateOnScroll = () => {
        productItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (itemPosition < windowHeight - 100) {
                item.style.opacity = "1";
                item.style.transform = "scale(1)";
            }
        });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial call

    // Animate footer sections
    const footerSections = document.querySelectorAll(".footer-section");

    const animateFooterOnScroll = () => {
        footerSections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionPosition < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", animateFooterOnScroll);
    animateFooterOnScroll(); // Initial call
});
