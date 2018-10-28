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
        for (var i = 0; i < $(this).length; i++) {
            $(this)[i].style.borderWidth = '5px';
        }
    });

    $('.option').on('mouseout', function () {
        $(this).children($('.change-class')).removeClass('active');
        for (var i = 0; i < $('.option').length; i++) {
            $('.option .change-icon')[i].style.transform = 'translate3d(250%, 0, 0)';
            $('.option')[i].style.borderWidth = '0px';
        }
        $(this).removeClass('item');
    });
    
    // clicking on new category
    $('.option').on('click', function () {
        var currentOption = $(this);
        var previousCategory = $('#current-category')[0];
        var previousIcon = $('#current-icon').children('i')[0];
        var newCategory = currentOption.children('.category')[0].firstChild;
        var newIcon = currentOption.children()[1].children[0];

        var click = $(this);
        
        var previousColor = $(previousIcon).css('color')

        $(this).addClass('item');

        newIcon.style.transform = 'rotate(360deg)';

        animateIcon();

        setTimeout(function () {
            previousCategory.style.opacity = 0;
            newCategory.style.opacity = 0;
            click[0].style.borderWidth = '0px';
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
            }, 250);
            click[0].style.borderColor = previousColor;
            click[0].style.opacity = '1';
            click[0].style.borderWidth = '5px';
        }, 1000);
    });

    function update(top, newIcon, previousCategory, newCategory) {
        animateTop(newIcon, top);
        previousCategory.innerHTML = newCategory.innerHTML;
    }

    function animateIcon() {
        setTimeout(function () {
            for (var i = 0; i < $('.option').length; i++) {
                $('.option .change-icon')[i].style.transform = 'translate3d(250%, 0, 0)';
                setTimeout(function () {
                    $('#options .item')[0].lastElementChild.style.transform = 'translate3d(0, 0, 0)';
                }, 500)
            }
        }, 500);
    }

    function animateTop(newIcon, top) {
        top.append(newIcon);
        $('#current-icon')[0].style.transform = 'translate3d(0, 0, 0)';
    }
});