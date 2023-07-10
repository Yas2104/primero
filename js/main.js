const navMenu = document.querySelector('.nav-menu');

const menuItems = document.querySelectorAll('.menu-item');




menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const navMenu = document.querySelector('.active');
        navMenu.classList.remove('.active');
        e.target.classList.add('active');
    });
});
