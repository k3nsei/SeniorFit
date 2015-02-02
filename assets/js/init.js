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

    $(function() {
        var $mapCanvas = $('#contact .contact-map')[0];
        var $latX = 52.138664;
        var $latY = 21.050716;
        var $mapZoom = 17;

        function initializeContactMap() {
            var mapCanvas = $mapCanvas;
            var mapOptions = {
                center: new google.maps.LatLng($latX, $latY),
                zoom: $mapZoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latX, $latY)
            });
            marker.setMap(map);
        }
        google.maps.event.addDomListener(window, 'load', initializeContactMap);
    });

})(jQuery);