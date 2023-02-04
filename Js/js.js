const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')

})
/*Scrol to up*/
var mybutton = document.getElementById('up');

window.onscroll =function(){
    'use strict';
    if(window.pageYOffset >= 400){

        mybutton.style.display ='block';
    }
        else{
            mybutton.style.display = 'none';
        }
    };
    mybutton.onclick = function(){
        'use strict';
        window.scrollTo(0,0)
    };