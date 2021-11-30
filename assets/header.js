var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var intervalSlider =  setInterval(sliderElement, 7000);
//Linetab NavBar
    const navElement = $$('.nav-heading');
    const lineCurrentTab = $('.line-current-tab');

    navElement.forEach( function(element, index) {
        element.onmouseover = () => {
            lineCurrentTab.style.border = '3px solid var(--background-color-lightblue)';
            lineCurrentTab.style.left = element.offsetLeft + 'px';
            lineCurrentTab.style.width = element.offsetWidth + 'px';
            element.style.color = '#3fd0d4;'
            
            if (index === 6) {
                $('.nav-heading__elements-item-wrap').classList.add('open')
            } else {
                $('.nav-heading__elements-item-wrap').classList.remove('open')
            }
        }
        
    });

//Onclick, onblur, onchange, mouseover, scroll
    const iconSearch = $('.nav-position-right__search-wrap');
    const overlay = $('.overlay');
    const inputSearchElement = $('.search-input');
    const buttonFindNow = $('.search-button');
    const childElementNav = $$('.nav-heading__element-title-link-item');
    const arrowLeft = $$('.header_slider-arrow-left-icon');
    const arrowRight = $$('.header_slider-arrow-right-icon');
    
        //Click icon search position right
        iconSearch.onclick = function (e) {
            $('.onclick-icon-search-wrap').style.display = 'block';
            if (e.target === overlay) {
                $('.onclick-icon-search-wrap').style.display = 'none';
            }
        };


        //Click ElementNav children
        childElementNav.forEach(function (element) {
            element.onclick = function (e) {
                alert('bạn đã click ' + e.target.innerHTML + ' thành công');
            }
        });

        //Menu click 
        $('.nav-position-right__menu-wrap').onclick = (e) => {
            e.stopPropagation();
            $('.navbar_right').style.animation = 'rtl ease-in-out 0.5s';
            $('.navbar_right').style.transform = 'translateX(0)';
            $('.navbar_right').style.display = 'flex';
        };
        $('.navbar_right-exit-wrap').onclick = (e) => {
            e.stopPropagation();
            $('.navbar_right').style.animation = 'ltr ease-in-out 0.5s';
            $('.navbar_right').style.transform = 'translateX(100%)';
            setTimeout(function () {
                $('.navbar_right').style.display= 'none';
            },500);
        }

       
        //arrow slider onclick 
        arrowLeft.forEach( function (element) {
            element.onclick = (e) => {
                $('.header_slider__background').classList.toggle('active');
                $('.header_slider__background-2').classList.toggle('active');
            }
        });
        arrowRight.forEach( function (element) {
            element.onclick = (e) => {
                $('.header_slider__background').classList.toggle('active');
                $('.header_slider__background-2').classList.toggle('active');
            }
        });

        

        //click current Tour
        $$('.current-pages-icon').forEach(function (element) {
            element.onclick = function (e) {
                $('.current-pages-icon.current-tour').classList.remove('current-tour');
                 e.target.classList.add('current-tour');
            };
        })

//stopPropagation
    //inputFindnow
    inputSearchElement.onclick = (e) => {
        e.stopPropagation();
    };
  
//slider auto
    function sliderElement () {
        const sliderElement1 = $('.header_slider__background');
        const sliderElement2 = $('.header_slider__background-2');

        sliderElement1.classList.toggle('active');
        sliderElement2.classList.toggle('active');
    };
//Doccument onscroll, onclick
    document.onscroll = function () {
        // hide menu nav
        $('.navbar_right').style.display= 'none';
        
        //remove class openelement
        $('.nav-heading__elements-item-wrap').classList.remove('open');

        //remove tabline
        lineCurrentTab.style.border = 'none';

        //hide search child icon search
        $('.onclick-icon-search-wrap').style.display = 'none';
    }
    document.onclick = function (e) {
        e.stopPropagation();
        $('.nav-heading__elements-item-wrap').classList.remove('open');
    }



    