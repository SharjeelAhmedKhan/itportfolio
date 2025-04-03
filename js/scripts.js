/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Skills Section
const frontendBox = document.getElementById("frontendSkillsHeading")
frontendBox.addEventListener("onmouseover", frontendSection);

function frontendSection() {
  document.getElementById("").classList.toggle = "none";
}

const backendBox = document.getElementById("backendendSkillsHeading")
backendBox.addEventListener("click", backendSection);

function backendSection() {
  document.getElementById("").style.display = "none";
}

const devopsBox = document.getElementById("devopsSkillsHeading")
devopsBox.addEventListener("click", devopsSection);

function devopsSection() {
  document.getElementById("").style.display = "none";
}

const securityBox = document.getElementById("securitySkillsHeading")
securityBox.addEventListener("click", securitySection);

function securitySection() {
  document.getElementById("security-box").style.display = "none";
  securityBox.style.color = "green";
}