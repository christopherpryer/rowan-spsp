var infowindow = null;
	$(document).ready(function () { initialize();  });

	function initialize() {

		var centerLocation = new google.maps.LatLng(39.711463, -75.119262);

		var mapConfig = {
			zoom: 15,
			center: centerLocation,
			mapTypeId: google.maps.MapTypeId.ROADMAP
        }

		var map = new google.maps.Map(document.getElementById("mapEmbed"), mapConfig);

		setMarkers(map, locations);
			infowindow = new google.maps.InfoWindow({
				content: "Loading..."
			});
	}
	
	var infoWindowContent = [
		'<h1 class="infoWindowHeader">James Hall</h1>'+
		'<p>[more information needed]</p>',
		'<h1 class="infoWindowHeader">Landmark</h1>'+
		'<p>Pre-Conference Informal Gathering<br><strong>Address:</strong> 1 Mullica Hill Rd, Glassboro, NJ 08028 (pending configuration)</p>',
		'<h1 class="infoWindowHeader">Enterprise</h1>'+
		'<p>Contributed Papers<br><strong>Address:</strong> 225 Rowan Blvd, Glassboro, NJ 08028 (pending configuration)</p>',
		'<h1 class="infoWindowHeader">Enyon Ballroom</h1>'+
		'<p>Plenary, Marketplace, Student Center (Shuttles to Fossil Dig)<br><strong>Address:</strong> 201 Mullica Hill Rd, Glassboro, NJ 08028 (pending configuration)</p>',
		'<h1 class="infoWindowHeader">Fossil Dig</h1>'+
		'<p>Dig begins at 9:30am on Monday, June 20th<br>[address needed] (pending configuration)</p>'
	];

	var locations = [
		['Landmark', 39.706849, -75.110657, 2, infoWindowContent[1]],
		['Enterprise', 39.7055703, -75.1135144, 3, infoWindowContent[2]],
		['Enyon Ballroom', 39.708455, -75.118237, 4, infoWindowContent[3]],
		['Fossil Dig', 39.762258, -75.128359, 5, infoWindowContent[4]]
	];

    function setMarkers(map, markers) {

        for (var i = 0; i < markers.length; i++) {
            var locations = markers[i];
            var locationCoordinates = new google.maps.LatLng(locations[1], locations[2]);
            var marker = new google.maps.Marker({
                position: locationCoordinates,
                map: map,
                title: locations[0],
                zIndex: locations[3],
                html: locations[4]
            });

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
        }
    }