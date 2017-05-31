$(function() {
	function tintImage(imgElement, tintColor) {
		// create hidden canvas (using image dimensions)
		var canvas = document.getElementById("canvas1");
		canvas.width = imgElement.offsetWidth;
		canvas.height = imgElement.offsetHeight;

		var ctx = canvas.getContext("2d");
		ctx.drawImage(imgElement, 0, 0);

		var map = ctx.getImageData(0, 0, canvas.width, canvas.height);
		var imdata = map.data;

		// convert image to grayscale
		var r, g, b, avg;
		for (var p = 0, len = imdata.length; p < len; p += 4) {
			r = imdata[p]
			g = imdata[p + 1];
			b = imdata[p + 2];

			avg = Math.floor((r + g + b) / 3);

			imdata[p] = imdata[p + 1] = imdata[p + 2] = avg;
		}

		ctx.putImageData(map, 0, 0);

		// overlay filled rectangle using lighter composition
		ctx.globalCompositeOperation = "lighter";
		//ctx.globalAlpha = 0.5;
		ctx.fillStyle = tintColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

	}

	$(".basic").spectrum({
		color : "#f00",
		change : function(color) {
			//$("#basic-log").text("change called: " + color.toHexString());
			tintImage(document.getElementById('myImage'), color.toHexString());
		}
	});

	var setBtt = $("#set");

	setBtt.click(function() {
		var clr = $('#color').val();
		tintImage(document.getElementById('myImage'), clr);
	});

		var redBtt = $("#Red");

	redBtt.click(function() {
		tintImage(document.getElementById('myImage'), "red");
	});

    var yelBtt = $("#Yellow");
	yelBtt.click(function() {
		tintImage(document.getElementById('myImage'), "yellow");
	});
	var bluBtt = $("#Blue");

	bluBtt.click(function() {
		tintImage(document.getElementById('myImage'), "#000055");
	});
    	var greenBtt = $("#Green");

	greenBtt.click(function() {
		tintImage(document.getElementById('myImage'), "green");
	});
    	var orangeBtt = $("#Orange");

	orangeBtt.click(function() {
		tintImage(document.getElementById('myImage'), "orange");
	});
    	var purpleBtt = $("#Purple");

	purpleBtt.click(function() {
		tintImage(document.getElementById('myImage'), "purple");
	});
});