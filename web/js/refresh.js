var ajax = null;
var marker;

function update()
{
    if (ajax != null) {
        ajax.abort();
    }

    ajax = $.getJSON('getposition.php', function(response) {
        ajax = null;
        marker.setPosition(new google.maps.LatLng(response.lat, response.lng));
    });
}

$(document).ready(function() {
    var myLatlng = new google.maps.LatLng(44.834448,-0.579185);

    var mapOptions = {
      zoom: 12,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map($('.map')[0], mapOptions);

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello'
    });

    google.maps.event.addListener(map, 'click', function(e) {
        $.get('setcenter.php?lat='+e.latLng.lat()+'&lng='+e.latLng.lng());
    });
    
    setInterval(update, 100);
});
