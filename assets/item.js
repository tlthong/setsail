var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

//click current top-review
    $$('.icon-current-page-top-review').forEach(function (element) {
        element.onclick = function (e) {
            $('.icon-current-page-top-review.current-page-top-review').classList.remove('current-page-top-review');
            e.target.classList.add('current-page-top-review');
        };
    })

//Click fixed right 

    // $('.related').onclick = function () {
    //     const parentRelated = $('.related').parentElement.matches('.fixed-right');
    //     console.log(parentRelated)
    //     $('.fixed-right').style.transform = 'translateX(0)';
    // }
