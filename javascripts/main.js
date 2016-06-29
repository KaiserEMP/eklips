$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });


    // IE9 Placeholder
    jQuery(function() {
        jQuery.support.placeholder = false;
        webkit_type = document.createElement('input');
        if('placeholder' in webkit_type) jQuery.support.placeholder = true;});
    $(function() {

        if(!$.support.placeholder) {

            var active = document.activeElement;

            $(':text, textarea, :password').focus(function () {

                if (($(this).attr('placeholder')) && ($(this).attr('placeholder').length > 0) &&         ($(this).attr('placeholder') != '') && $(this).val() == $(this).attr('placeholder')) {
                    $(this).val('').removeClass('hasPlaceholder');
                }
            }).blur(function () {
                if (($(this).attr('placeholder')) && ($(this).attr('placeholder').length > 0) &&  ($(this).attr('placeholder') != '') && ($(this).val() == '' || $(this).val() ==   $(this).attr('placeholder'))) {
                    $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
                }
            });

            $(':text, textarea, :password').blur();
            $(active).focus();
            $('form').submit(function () {
                $(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
            });
        }
    });

});