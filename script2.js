//wereldreis//

var draaien = document.querySelector('header.headnav > img');
var button = document.querySelector('ul > .knop');

var draai = function() {
    draaien.classList.toggle('logonavdraaien')
}
button.addEventListener('click', draai);

//favorieten//

var favbar = document.querySelector('span.favorieten');

var favbutton = document.querySelector('li.favknop');

var openNav = function() {
    favbar.classList.toggle('favorietenopen')
}

favbutton.addEventListener('click', openNav);

//omhoog scroller//

window.onscroll = function() {naarBoven()};
var topbutton = document.querySelector('.topbuttonnone')

function naarBoven() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        topbutton.classList.toggle("topbuttonnone");
    } else {
        topbutton.classList.toggle("topbutton");
    }
}

var gotopbut = document.querySelector('.topbuttonnone');

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}
gotopbut.addEventListener('click', topFunction);
