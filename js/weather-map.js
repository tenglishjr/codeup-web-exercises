$(document).ready(function () {
    "use strict";

    var origLat = 29.4241, origLng = -98.4936;
    var cityCoords = {
        lat: origLat,
        lng: origLng
    };


    /*********** GENERATE MAP & MARKER ***********/
    var map;

    var mapOptions = {
        zoom: 10,
        center: {
            lat: cityCoords.lat,
            lng: cityCoords.lng
        }
    };
    map = new google.maps.Map($('#map-canvas')[0], mapOptions);

    var marker = new google.maps.Marker({
        position: {
            lat: cityCoords.lat,
            lng: cityCoords.lng
        },
        map: map,
        draggable: true
    });

    google.maps.event.addListener(marker, 'dragend', function (evt) {
        cityCoords['lat'] = evt.latLng.lat();
        cityCoords['lng'] = evt.latLng.lng();
        updateInfo(cityCoords.lat, cityCoords.lng);
    });


    /*********************** **********************/


    displayForecast(cityCoords.lat, cityCoords.lng);
    console.log(cityCoords);


    $('#search-btn').click(function (evt) {
        evt.preventDefault();
        var cityName = $('#city-search').val();
        getLatLng(cityName);
    });



    function getLatLng(cityNameStr) {
        console.log('getLatLng was called');
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( {'address': cityNameStr}, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                cityCoords['lat'] = results[0].geometry.location.lat();
                cityCoords['lng'] = results[0].geometry.location.lng();
                updateInfo(cityCoords.lat, cityCoords.lng);
            } else {
                console.log('GEOCODE STATUS NOT OK');
            }
        })
    }


    function updateInfo(lat, lng) {
        map.setCenter({ lat: lat, lng: lng });
        marker.setPosition({ lat: lat, lng: lng});
        displayForecast(lat, lng);
    }



    function displayForecast(lat, lng) {
        $.get('http://api.openweathermap.org/data/2.5/forecast', {
            APPID: '2f220ccab431c5fc5c2eb065de2d4bb8',
            lat: lat,
            lon: lng,
            units: 'imperial'
        }).done(function (data) {
            generateForecastData(data);
        });
    }

    function generateForecastData(obj) {

        var output = '';

        $('#city-name').html("");
        $('#city-name').append(obj.city.name);

        for (var i = 0; i < 17; i += 8) {
            // Generates Card to hold weather info
            output += '<div class="col-12 col-sm-4 card px-2">';
            output += '<div class="card-body row text-center">';

            // Labels the relevant day of weather data
            if (i === 0) {
                output += '<div class="col-12 h3">Today</div>';
            } else if (i === 8) {
                output += '<div class="col-12 h3">Tomorrow</div>';
            } else {
                output += '<div class="col-12 h3">Later this Week</div>';
            }

            // Displays Day/Night Temps
            output += '<div class="col-12 day-night-temp">' + (obj.list[i].main.temp_max).toFixed(0) + 'ºF / ';
            output += (obj.list[i + 4].main.temp_min).toFixed(0) + 'ºF</div>';

            // Shows Relevant Weather Image
            output += '<div class="col-12 my-2"><img src="http://openweathermap.org/img/w/' + obj.list[i].weather[0].icon + '.png" id="weather-icon"></div>';

            // Displays Clouds Status
            output += '<div class="col-12 my-2"><strong>Clouds: </strong>' + obj.list[i].weather[0].description + '</div>';

            // Displays Humidity
            output += '<div class="col-12 my-2"><strong>Humidity: </strong>' + (obj.list[i].main.humidity) + '%</div>';

            // Displays Wind Speed (mph)
            output += '<div class="col-12 my-2"><strong>Wind Speed: </strong>' + (obj.list[i].wind.speed).toFixed(0) + ' mph</div>';

            // Displays Pressure
            output += '<div class="col-12 my-2"><strong>Pressure: </strong>' + (obj.list[i].main.pressure) + ' Pa</div>';
            output += '</div></div>'
        }

        $('#three-forecast').html("");
        $('#three-forecast').append(output);
    }

});