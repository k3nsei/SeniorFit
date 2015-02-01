(function ($) {

    $(function () {
        var $headerWrapper = $('#header-wrapper');
        $headerWrapper.data('size', 'big');
        $(window).scroll(function () {
            if ($(document).scrollTop() > 0) {
                if ($headerWrapper.data('size') == 'big') {
                    $headerWrapper.data('size', 'small');
                    $headerWrapper.stop().addClass('small-header');
                }
            } else {
                if ($headerWrapper.data('size') == 'small') {
                    $headerWrapper.data('size', 'big');
                    $headerWrapper.stop().removeClass('small-header');
                }
            }
        });
    });

})(jQuery);