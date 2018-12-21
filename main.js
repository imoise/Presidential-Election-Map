  var mapcenter = [41.79658, -72.717234];
    var mymap = L.map('mapid').setView(mapcenter, 7); //starting center and zoom
	
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap)

/*--- Begin Connecticut Section ---*/
d3.json("ctcounties.geojson").then(function(data) {
    console.log(data);
//geojson as a javascript object
   var myStyle = {
    "color": "blue",
    "weight": 5,
    "opacity": 1
};

    L.geoJSON(data, {
        style: myStyle
		
    }).addTo(mymap).bindPopup('<iframe src="indexD3CT.html" style ="width: 1000px; height: 600px; transition: 3s" ></iframe>',  {maxWidth: "auto", maxHeight: "auto"});
});
/*--- End Connecticut Section ---*/

/*--- Begin Massachusetts Section ---*/
	d3.json("macounties.geojson").then(function(data) {
		console.log(data);
	//geojson as a javascript object
	   var myStyle = {
		"color": "red",
		"weight": 5,
		"opacity": 1
	};

		L.geoJSON(data, {
			style: myStyle
			
		}).addTo(mymap).bindPopup('<iframe src="indexD3MA.html" style ="width: 1000px; height: 600px;" ></iframe>',  {maxWidth: "auto", maxHeight: "auto"});
	});
/*--- End Massachusetts Section ---*/

/*--- Begin Maine Section ---*/
	d3.json("mecounties.geojson").then(function(data) {
		console.log(data);
	//geojson as a javascript object
	   var myStyle = {
		"color": "blue",
		"weight": 5,
		"opacity": 1
	};

		L.geoJSON(data, {
			style: myStyle
			
		}).addTo(mymap).bindPopup('<iframe src="indexD3ME.html" style ="width: 1000px; height: 600px;" ></iframe>',  {maxWidth: "auto", maxHeight: "auto"});
	});
/*--- End Maine Section ---*/


/*--- Begin New York Section ---*/
	d3.json("nycounties.geojson").then(function(data) {
		console.log(data);
	//geojson as a javascript object
	   var myStyle = {
		"color": "blue",
		"weight": 5,
		"opacity": 1
	};

		L.geoJSON(data, {
			style: myStyle
			
		}).addTo(mymap).bindPopup('<iframe src="indexD3NY.html" style ="width: 1000px; height: 600px;" ></iframe>',  {maxWidth: "auto", maxHeight: "auto"});
	});
/*--- End New York Section ---*/

/*--- Begin Vermont Section ---*/
	d3.json("vtcounties.geojson").then(function(data) {
		console.log(data);
	//geojson as a javascript object
	   var myStyle = {
		"color": "blue",
		"weight": 5,
		"opacity": 1
	};

		L.geoJSON(data, {
			style: myStyle
			
		}).addTo(mymap).bindPopup('<iframe src="indexD3VT.html" style ="width: 1000px; height: 600px;" ></iframe>',  {maxWidth: "auto", maxHeight: "auto"});
	});
/*--- End Vermont Section ---*/

/*--- Begin Texas Section ---*/
	d3.json("txcounties.geojson").then(function(data) {
		console.log(data);
	//geojson as a javascript object
	   var myStyle = {
		"color": "red",
		"weight": 5,
		"opacity": 1
	};

		L.geoJSON(data, {
			style: myStyle
			
		}).addTo(mymap).bindPopup('<iframe src="indexD3TX.html" style ="width: 1000px; height: 600px;" ></iframe>',  {maxWidth: "auto", maxHeight: "auto"});
	});
/*--- End Texas Section ---*/

/*--- Begin New Hampshire Section ---*/
	d3.json("nhcounties.geojson").then(function(data) {
		console.log(data);
	//geojson as a javascript object
	   var myStyle = {
		"color": "blue",
		"weight": 5,
		"opacity": 1
	};

		L.geoJSON(data, {
			style: myStyle
			
		}).addTo(mymap).bindPopup('<iframe src="indexD3NH.html" style ="width: 1000px; height: 600px;" ></iframe>',  {maxWidth: "auto", maxHeight: "auto"});
	});
/*--- End New Hampshire Section ---*/