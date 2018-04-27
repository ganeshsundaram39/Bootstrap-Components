
const refreshComponent = () => {
	$('.accordion-container').hide();
    $('.navbar-container').hide();
    $('.modal-container').hide();

    $('.multiscroll-nav li').css("color","#555");
};

const componentNavigate = e => {

    const componentType = e.target.closest('li').dataset.type;

    if (componentType) {
        
        refreshComponent();

        if (componentType === "accord") {
            $('.accordion-container').show(200);
            $('.multiscroll-nav li').eq(0).css("color","#007BFF");
        } else if (componentType === "nav") {
            $('.navbar-container').show(200);
            $('.multiscroll-nav li').eq(1).css("color","#007BFF");
        } else if (componentType === "mod") {
            $('.modal-container').show(200);
            $('.multiscroll-nav li').eq(2).css("color","#007BFF");
        }
    }
};

$('.sidebar .list').on('click', componentNavigate);
$('.multiscroll-nav ul').on('click', componentNavigate);

const refreshAccordion = () => {

};

const accordionAnimate = e => {
	refreshAccordion();
};

$('.card-header').on('click',accordionAnimate);

$(document).ready(() => {

    $('.navbar-container').hide();
    $('.modal-container').hide();
    $('.card-body').eq(0).show(500);

});