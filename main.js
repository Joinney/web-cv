var typed = new Typed('#element', {
    strings: ['<i>FrontEnd Developer</i>', ' <i>Application Developer</i>', ' <i>Competitive Programmer</i>'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    let menuIcon = document.querySelector('#menu-icon');
    let sidePanel = document.querySelector('#navbar');
    let navLinks = document.querySelectorAll('.header1 nav a');

    // Function to toggle side panel on icon click
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        sidePanel.classList.toggle('active');
    };

    // Function to handle scroll and update active nav link
    window.onscroll = () => {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    let activeLink = document.querySelector('.header1 nav a[href*=' + id + ']');
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                });
            }
        });
    };
});
