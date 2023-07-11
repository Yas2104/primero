const navMenu = document.querySelector('.nav-menu').querySelectorAll("a");
// console.log(navMenu)

// const menuItems = document.querySelectorAll('.menu-item');




navMenu.forEach(element => {
    
    element.addEventListener('click', function() {
        navMenu.forEach(nav=>nav.classList.remove('active'));

        this.classList.add('active');
    });
});


window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
})