const refreshComponent = () => {
    $('.accordion-container, .navbar-container, .modal-container')
        .hide();

    $('.multiscroll-nav li')
        .css("color", "#555");
};

const componentNavigate = e => {

    if (e.target.closest('li')) {
        const componentType = e.target.closest('li').dataset.type;
        const componentId = e.target.closest('li').dataset.id;


        if (componentType) {

            refreshComponent();

            $(`.${componentType}-container`)
                .show(200);

            $('.multiscroll-nav li')
                .eq(componentId)
                .css("color", "#007BFF");
        }
    }
};

$('.sidebar .list').on('click', componentNavigate);
$('.multiscroll-nav ul').on('click', componentNavigate);







const arrowAnimate = function(current) {
    if (current.find('i').hasClass('ion-chevron-down')) {
        current.find('i').replaceWith('<i class="ion-chevron-up"></i>');
    } else {
        current.find('i').replaceWith('<i class="ion-chevron-down"></i>');
    }
};

const accordionAnimate = function(e) {

    if (e.target.closest('.card-header')) {

        const headerId = e.target.closest('.card-header').dataset.id;

        if (headerId) {

            arrowAnimate($(this));

            $('.card-body')
                .not(`.card-body[data-id="${headerId}"]`)
                .slideUp(200);

            $('.card-header')
                .not(`.card-header[data-id="${headerId}"]`)
                .each(function(header) {

                    $(this).find('i')
                        .replaceWith('<i class="ion-chevron-down"></i>');
                });

            $(this).parent().children('.card-body')
                .slideToggle(200);
        }
    }
};

$('.card-header').on('click', accordionAnimate);







$(document).ready(() => {

    $('.navbar-container').hide();
    $('.modal-container').hide();
    $('.card-body').eq(0).slideDown(200);
    arrowAnimate($('.card-header').eq(0));


});