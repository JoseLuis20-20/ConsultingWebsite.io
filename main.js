/*import mobileNav from './mobile-nav';
import darkMode from './dark-mode';
import lazyLoading from './src/utils/lazy-loading';*/

const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    //State
    let isMobileNavOpen = false;
    
    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(Link => {
        Link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
};

const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    //State
    const theme = localStorage.getItem('theme');

    //On mount
    theme && document.body.classList.add(theme);

    //Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');            
        if(document.body.classList.contains('light-mode')){
            localStorage.setItem('theme','light-mode');
        }else{
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    }

    //Events
    themeToggleBtns.forEach(btn => 
        btn.addEventListener('click', handleThemeToggle)
    );
};

const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver((entries, observer) => {
    
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve();
            }
        });
    });
    
    lazyImgs.forEach(img => {
        observer.observe(img);
    });
};

const backTop = () => {
    // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
};

mobileNav();
darkMode();
lazyLoading();
backTop();