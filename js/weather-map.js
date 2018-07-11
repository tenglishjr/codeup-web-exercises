$(document).ready(function () {
    "use strict";


    /*************** VARIABLE DECLARATION ***************/

    var origLat = 29.4241, origLng = -98.4936;
    var cityCoords = {
        lat: origLat,
        lng: origLng
    };
    var cityState = getCityName(cityCoords.lat, cityCoords.lng);

    /*************************************************************************
     * *************************** GENERATE MAP ******************************
     * ***********************************************************************/

    var map, marker;

    var mapOptions = {
        zoom: 10,
        center: {
            lat: cityCoords.lat,
            lng: cityCoords.lng
        }
    };
    map = new google.maps.Map($('#map-canvas')[0], mapOptions);

    marker = new google.maps.Marker({
        position: {
            lat: cityCoords.lat,
            lng: cityCoords.lng
        },
        map: map,
        draggable: true
    });
    /************************************** ***********************************/


    displayForecast(cityCoords.lat, cityCoords.lng);

    $('#search-btn').click(function (evt) {
        evt.preventDefault();
        var cityName = $('#city-search').val();
        getLatLng(cityName);
    });


    /*************************************************************************
     * **************************** FUNCTIONS ********************************
     * ***********************************************************************/


    // Populates weather panels
    function displayForecast(latNum, lngNum) {
        $.get('http://api.openweathermap.org/data/2.5/forecast', {
            APPID: '2f220ccab431c5fc5c2eb065de2d4bb8',
            lat: latNum,
            lon: lngNum,
            units: 'imperial'
        }).done(function (data) {
            getCityName(cityCoords.lat, cityCoords.lng);
            generateForecastData(data);
        });
    }


    // Generates HTML using OpenWeatherMapAPI object properties & string concatenation
    function generateForecastData(obj) {

        var panelOutput = '', infoWindowOutput = '';

        generateInfoBox(obj);

        for (var i = 0; i < 17; i += 8) {
            // Generates Card to hold weather info
            panelOutput += '<div class="col-12 col-md-4 card">';
            panelOutput += '<div class="card-body row text-center">';

            // Labels the relevant day of weather data
            if (i === 0) {
                panelOutput += '<div class="col-12 h3">Today</div>';
            } else if (i === 8) {
                panelOutput += '<div class="col-12 h3">Tomorrow</div>';
            } else {
                panelOutput += '<div class="col-12 h3">Later this Week</div>';
            }

            // Displays Day/Night Temps
            panelOutput += '<div class="col-12 day-night-temp">' + (obj.list[i].main.temp_max).toFixed(0) + 'ºF / ';
            panelOutput += (obj.list[i + 4].main.temp_min).toFixed(0) + 'ºF</div>';

            // Shows Relevant Weather Image
            panelOutput += '<div class="col-12 my-2"><img src="http://openweathermap.org/img/w/' + obj.list[i].weather[0].icon + '.png" id="weather-icon"></div>';

            // Displays Clouds Status
            panelOutput += '<div class="col-12 my-2"><strong>Clouds: </strong>' + obj.list[i].weather[0].description + '</div>';

            // Displays Humidity
            panelOutput += '<div class="col-12 my-2"><strong>Humidity: </strong>' + (obj.list[i].main.humidity) + '%</div>';

            // Displays Wind Speed (mph)
            panelOutput += '<div class="col-12 my-2"><strong>Wind Speed: </strong>' + (obj.list[i].wind.speed).toFixed(0) + ' mph</div>';

            // Displays Pressure
            panelOutput += '<div class="col-12 my-2"><strong>Pressure: </strong>' + (obj.list[i].main.pressure) + ' Pa</div>';
            panelOutput += '</div></div>'
        }

        $('#city-name').html("");
        $('#city-name').append(cityState);

        $('#three-forecast').html("");
        $('#three-forecast').append(panelOutput);

    }

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

    function getCityName(latNum, lngNum) {
        var jsonLink = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latNum + ',' + lngNum + '&sensor=false';
        $.get(jsonLink).done(function (data) {
            var city = '', state = '';
            console.log(data);
            data.results[0].address_components.forEach(function (component) {
                if (component.types[0] === 'locality') {
                    city += component.long_name;
                } else if (component.types[0] === 'administrative_area_level_1') {
                    state += component.short_name;
                }

                if (city !== '' && state !== '') {
                    cityState = city + ', ' + state;
                }
                console.log(cityState);
            });
        });
    }


    function updateInfo(latNum, lngNum) {
        map.setCenter({ lat: latNum, lng: lngNum });
        marker.setPosition({ lat: latNum, lng: lngNum});
        marker.infoWindow.close();
        displayForecast(latNum, lngNum);
    }


    function generateInfoBox(obj) {

        marker.infoWindow = new google.maps.InfoWindow({
            content: '<div class="row"><div class="col-3"><img src="http://openweathermap.org/img/w/' + obj.list[0].weather[0].icon + '.png" id="infoBoxImg"></div>' +
            '<div class="col-9 pt-2 d-flex align-items-center"><h5 id="infoHead">' + cityState + '</h5></div></div>' +
            '<div class="row"><div class="col-12 d-flex justify-content-center"><p>Current Temperature: <strong>' + (obj.list[0].main.temp_max).toFixed(0) + 'ºF</strong></p></div></div>'
        });

        marker.infoWindow.open(map, marker);

        google.maps.event.addListener(marker, 'dragend', function (evt) {
            cityCoords['lat'] = evt.latLng.lat();
            cityCoords['lng'] = evt.latLng.lng();
            updateInfo(cityCoords.lat, cityCoords.lng);
        });
    }

});
