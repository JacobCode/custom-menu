$(document).ready(function() {
    for (var i = 0; i < $('.option .change-icon').length; i++) {
        $('.option .change-icon')[i].style.transform = 'translate3d(250%, 0, 0)';
    }

    $('.option').on('mouseover', function() {
        $(this)[0].children[1].style.transform = 'translate3d(0, 0, 0)';
    });

    // open and close menu
    $('#arrow').on('click', function () {
        $('#options').toggleClass('active');
        $('#arrow').toggleClass('active');
    });

    $('.option').on('mouseover', function () {
        $(this).children($('.change-class')).addClass('active');
    });

    $('.option').on('mouseout', function () {
        $(this).children($('.change-class')).removeClass('active');
        for (var i = 0; i < $('.option .change-icon').length; i++) {
            $('.option .change-icon')[i].style.transform = 'translate3d(250%, 0, 0)';
        }
    });
    
    // clicking on new category
    $('.option').on('click', function () {
        var currentOption = $(this);
        var previousCategory = $('#current-category')[0];
        var previousIcon = $('#current-icon').children('i')[0];
        var newCategory = currentOption.children('.category')[0].firstChild;
        var newIcon = currentOption.children()[1].children[0];

        $(this).addClass('item');
        $('#options .item')[0].lastElementChild.style.transform = 'translate3d(0, 0, 0) !important';
        console.log($('#options .item'));

        animateIcon(newIcon);
        setTimeout(function () {
            previousCategory.style.opacity = 0;
            newCategory.style.opacity = 0;
        }, 500);

        setTimeout(function () {
            $('#current-icon')[0].style.transform = 'translate3d(-175%, 0, 0)';
        }, 500);

        var previous = previousCategory.innerHTML;

        setTimeout(function () {
            var top = $('.left .change-icon');
            top.empty();

            currentOption.children('.change-icon').append(previousIcon);

            update(top, newIcon, previousCategory, newCategory);
            currentOption.children('.category')[0].children[0].innerHTML = previous;

            setTimeout(function () {
                previousCategory.style.opacity = 1;
                newCategory.style.opacity = 1;
            }, 200);
        }, 1000);
    });

    function update(top, newIcon, previousCategory, newCategory) {
        animateTop(newIcon, top);
        previousCategory.innerHTML = newCategory.innerHTML;
    }

    function animateIcon(newIcon) {
        newIcon.style.transform = 'rotate(360deg)';
        setTimeout(function () {
            for (var i = 0; i < $('.option .change-icon').length; i++) {
                $('.option .change-icon')[i].style.transform = 'translate3d(250%, 0, 0)';
            }
        }, 500);
    }

    function animateTop(newIcon, top) {
        top.append(newIcon);
        $('#current-icon')[0].style.transform = 'translate3d(0, 0, 0)';
    }
});