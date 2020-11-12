$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

$('#btnWeather').click(function() {

    $.ajax({
        url: "php/getWeather.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#north').val(),
            south: $('#south').val(),
            east : $('#east').val(),
            west : $('#west').val()
        },
        success: function(result) {

        console.log(result);

        if (result.status.name == "ok") {

            $('#txtStationName').html(result['data']['weatherObservations'][0]['stationName']);
            $('#txtTemperature').html(result['data']['weatherObservations'][0]['temperature']);
            $('#txtHumidity').html(result['data']['weatherObservations'][0]['humidity']);
            $('#txtClouds').html(result['data']['weatherObservations'][0]['clouds']);
            $('#txtWindSpeed').html(result['data']['weatherObservations'][0]['windSpeed']);
        }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }); 

});

$('#btnTimezone').click(function() {

    $.ajax({
        url: "php/getTimezone.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#txtCountryName').html(result['data']['countryName']);
                $('#txtSunrise').html(result['data']['sunrise']);
                $('#txtSunset').html(result['data']['sunset']);
                $('#txtTime').html(result['data']['time']);
                $('#txtTimezoneId').html(result['data']['timezoneId']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }); 


});


$('#btnNeighbours').click(function() {

    $.ajax({
        url: "php/getNeighbours.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                const count = result['data'].length;
                const arr = [];

                for(i = 0; i < count; i++) {
                    arr.push(result['data'][i]['countryName']);
                }
                
                const neighbours = arr.join();

                $('#txtNumOfNeighbours').html(count);
                $('#txtCountryNeighbour').html(neighbours);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }); 
});