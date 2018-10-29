$(document).ready(function() {
    // move all icons in options list to the right by default
    for (var i = 0; i < $('.option .change-icon').length; i++) {
        $('.option .change-icon')[i].style.transform = 'translate3d(250%, 0, 0)';
    }
    // open and close menu
    $('.select').on('click', function () {
        $('#options').toggleClass('active');
        $('#arrow').toggleClass('active');
    });
    // hover option
    $('.option').on('mouseover', function () {
        $(this)[0].children[1].style.transform = 'translate3d(0, 0, 0)';
        $(this).children($('.change-class')).addClass('active');
        for (var i = 0; i < $(this).length; i++) {
            $(this)[i].style.borderWidth = '10px';
        }
    });
    // leaving option
    $('.option').on('mouseout', function () {
        $(this).children($('.change-class')).removeClass('active');
        for (var i = 0; i < $('.option').length; i++) {
            $('.option .change-icon')[i].style.transform = 'translate3d(250%, 0, 0)';
            $('.option')[i].style.borderWidth = '0px';
        }
        $(this).removeClass('item');
    });
    // clicking on an new option
    $('.option').on('click', function () {
        var currentOption = $(this);
        var previousCategory = $('#current-category')[0];
        var previousIcon = $('#current-icon').children('i')[0];
        var newCategory = currentOption.children('.category')[0].firstChild;
        var newIcon = currentOption.children()[1].children[0];
        var previousColor = $(previousIcon).css('color')

        // add item class
        $(this).addClass('item');

        // call animateIcon function
        animateIcon();

        setTimeout(function () {
            // change opacity of previous category (hide)
            previousCategory.style.opacity = 0;
            // change opacity of new category (hide)
            newCategory.style.opacity = 0;
            // change opacity of option (hide)
            currentOption[0].style.opacity = '0';
            // change left borderWidth of option (hide)
            currentOption[0].style.borderWidth = '0px';
        }, 500);

        setTimeout(function () {
            // move the top icon to the left
            $('#current-icon')[0].style.transform = 'translate3d(-175%, 0, 0)';
        }, 500);

        var previous = previousCategory.innerHTML;

        setTimeout(function () {
            // empty icon container at the top
            var top = $('.left .change-icon');
            top.empty();

            // append previous icon top current option
            currentOption.children('.change-icon').append(previousIcon);

            // calls the update function
            update(top, newIcon, previousCategory, newCategory);
            // change the html value of the current option to the previous option
            currentOption.children('.category')[0].children[0].innerHTML = previous;

            setTimeout(function () {
                // change opacity of previous category (show)
                previousCategory.style.opacity = 1;
                // change opacity of new category (show)
                newCategory.style.opacity = 1;
            }, 250);
            // change border color to previous icon color
            currentOption[0].style.borderColor = previousColor;
            // change opacity of option (show)
            currentOption[0].style.opacity = '1';
            // change left borderWidth of option (show)
            currentOption[0].style.borderWidth = '10px';
        }, 1000);
    });
    // FUNCTIONS
    function update(top, newIcon, previousCategory, newCategory) {
        // calls animateTop function
        animateTop(newIcon, top);
        // changes top category (previous) to new category chosen (new)
        previousCategory.innerHTML = newCategory.innerHTML;
    }
    function animateIcon() {
        setTimeout(function () {
            for (var i = 0; i < $('.option').length; i++) {
                // moves the chosen categorie's icon to the right
                $('.option .change-icon')[i].style.transform = 'translate3d(250%, 0, 0)';
                setTimeout(function () {
                    // moves the chosen categorie's icon back to position
                    $('#options .item')[0].lastElementChild.style.transform = 'translate3d(0, 0, 0)';
                }, 500)
            }
        }, 500);
    }
    
    function animateTop(newIcon, top) {
        // append new icon
        top.append(newIcon);
        // move icon to its original position
        $('#current-icon')[0].style.transform = 'translate3d(0, 0, 0)';
    }
});