;(function ($) {
    $(function() {
        var map;

        function initialize() {
            var myLatlng = new google.maps.LatLng(
                26.2204544,
                127.676151
            );

            var mapOptions = {
                zoom: 16,
                center: myLatlng
            };

            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Hello World!'
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    });
})(jQuery);
