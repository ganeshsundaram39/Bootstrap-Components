

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------




// hide all components and change CSS
const refreshComponent = () => {
    // hide all components using slideup
    $('.accordion-container, .navbar-container, .modal-container')
        .slideUp(300);

    // Change css for navigation in the right side
    $('.multiscroll-nav li')
        .css({
            "color": "#555",
            "transform": "scale(1)"
        });
};

// change component when user clicks on side navbar or right side navbar
const componentNavigate = e => {

    // Check if user has clicked li tag
    if (e.target.closest('li')) {

        // Get data attributes component id and type
        const componentType = e.target.closest('li').dataset.type;
        const componentId = e.target.closest('li').dataset.id;

        // Check if its truty value
        if (componentType) {

            // RESET
            refreshComponent();

            // show component for li tag clicked using slidedown
            $(`.${componentType}-container`)
                .slideDown(300);

            // Change the css of right side navbar
            $('.multiscroll-nav li')
                .eq(componentId)
                .css({
                    "color": "#007BFF",
                    "transform": "scale(1.2)"
                });
        }
    }
};

$('.sidebar .list').on('click', componentNavigate);
$('.multiscroll-nav ul').on('click', componentNavigate);






// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------







// toggle arrow class for accordion
const arrowAnimate = function(current) {
    current.find('i').toggleClass('ion-chevron-down ion-chevron-up');
};

// Animate accordion when user clicks on card header of accordion
const accordionAnimate = function(e) {

    // check if user has clicked card header
    if (e.target.closest('.card-header')) {

        // get header id
        const headerId = e.target.closest('.card-header').dataset.id;

        // check if header id is truty value
        if (headerId) {

            // show card body for card header clicked
            $(this).parent().children('.card-body')
                .slideToggle(200);

            // change arrow
            arrowAnimate($(this));

            // hide card body other than clicked one
            $('.card-body')
                .not(`.card-body[data-id="${headerId}"]`)
                .slideUp(200);

            // change arrow other than clicked one
            $('.card-header')
                .not(`.card-header[data-id="${headerId}"]`)
                .each(function(header) {

                    $(this).find('i')
                        .replaceWith('<i class="ion-chevron-up"></i>');
                });
        }
    }
};

$('.card-header').on('click', accordionAnimate);





// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------






// show hide navbar when user clicks on navbar button
const navbarToggle = e => {
    // toggle navbar 
    $('#navbar ul').slideToggle(300);
    // change icon for navbar button
    $('#navbar .burger i').toggleClass('ion-navicon ion-close-round');
}

$('.burger').on('click', navbarToggle);






// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------





// Show  modal when clicked on button 
// hide modal when clicked on modal background or close button of modal
const modalToggle = e => {
    $('#modal').fadeToggle(1000);
    $('.modal-content').slideToggle(300);
};

const modalOutsideClick = e => {

    // check if user clicked on background of modal
    if (e.target == $('#modal')[0]) {
        modalToggle();
    }
};

$('.modal-container .button ').on('click', modalToggle);

// modal background
$(window).on('click', modalOutsideClick);

$('.modal-content .closeBtn').on('click', modalToggle);






// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------





$(document).ready(() => {
    // hide navbar and modal on load
    $('.navbar-container').hide();
    $('.modal-container').hide();

    // show first card body of accordion
    $('.card-body').eq(0).slideDown(200);
    // change first arrow
    arrowAnimate($('.card-header').eq(0));

    // hide modal
    $('#modal').hide();
});




// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------