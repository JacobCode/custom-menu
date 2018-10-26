$(document).ready(function() {
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

    $('.option').on('click', function () {
        var previousCategory = $('#current-category')[0];
        var currentIcon = $('#current-icon').children('i')[0];

        var top = $('.left .change-icon');
        top.empty();

        var newCategory = $(this).children('.category')[0];
        var newIcon = $(this).children()[1].children[0];

        $(this).children('.change-icon').append(currentIcon);

        var previous = previousCategory.innerHTML;

        update(top, newIcon, previousCategory, newCategory);

        $(this).children('.category')[0].innerHTML = previous;
    });
    
    function update(top, newIcon, previousCategory, newCategory) {
        previousCategory.innerHTML = newCategory.innerHTML;
        top.append(newIcon);
    }
})