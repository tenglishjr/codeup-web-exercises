$(document).ready(function () {
    "use strict";

    var cityID = 4726206;
    var cityCoords = {
        coord: {
            lon: 29.4241,
            lat: 98.4936
        }
    };

    displayForecast(cityID);

    $('#search-btn').click(function () {
        var cityName = $('#city-search').val();

        $.get('./data/city.list.json').done(function (data) {
            data.forEach(function (city) {
                if (city.country === 'US' || city.country === 'GB') {
                    if (city.name === cityName) {
                        cityID = city.id;
                    }
                }
            });
            displayForecast(cityID);
        });

    });

    function displayForecast(idNum) {
        $.get('http://api.openweathermap.org/data/2.5/forecast', {
            APPID: '2f220ccab431c5fc5c2eb065de2d4bb8',
            id: idNum,
            units: 'imperial'
        }).done(function (data) {
            generateForecastData(data);
            console.log(data);
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

    function initMap() {
        var mapCanvas = $('#map-canvas');
        var mapOptions = {
            zoom: 18,
            center: {
                lat: 29.42082229999999,
                lng: -98.49001320000002
            }
        };

        var map = new google.maps.Map(mapCanvas, mapOptions);
    }

});