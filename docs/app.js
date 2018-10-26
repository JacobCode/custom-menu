$(document).ready(function() {
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
    });
    
    // clicking on new category
    $('.option').on('click', function () {
        var currentOption = $(this);
        var previousCategory = $('#current-category')[0];
        var previousIcon = $('#current-icon').children('i')[0];
        var newCategory = currentOption.children('.category')[0];
        var newIcon = currentOption.children()[1].children[0];
        previousCategory.style.opacity = 0;
        newCategory.style.opacity = 0;
        animateIcon(newIcon);
        setTimeout(function () {
            $('#current-icon')[0].style.transform = 'translate3d(-175%, 0, 0)';
        }, 500);
        var previous = previousCategory.innerHTML;
        setTimeout(function () {
            var top = $('.left .change-icon');
            top.empty();

            currentOption.children('.change-icon').append(previousIcon);

            update(top, newIcon, previousCategory, newCategory);

            setTimeout(function () {
                currentOption.children('.category')[0].innerHTML = previous;
                previousCategory.style.opacity = 1;
                newCategory.style.opacity = 1;
            }, 500)
        }, 1000);
    });
    function update(top, newIcon, previousCategory, newCategory) {
        animateTop(newIcon, top);
        previousCategory.innerHTML = newCategory.innerHTML;
        newIcon.style.transform = 'initial';
    }
    function animateIcon(newIcon) {
        newIcon.style.transform = 'rotate(360deg)';
        setTimeout(function () {
            newIcon.style.transform = 'translate3d(250%, 0, 0)';
            $('.option .change-icon')[0].style.transform = 'translate3d(250%, 0, 0)';
        }, 500);
    }
    function animateTop(newIcon, top) {
        top.append(newIcon);
        $('.option .change-icon')[0].style.transform = 'translate3d(0, 0, 0)';
        $('#current-icon')[0].style.transform = 'translate3d(0, 0, 0)';
    }
})