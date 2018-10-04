// Write all your Javascript here!
$.ajax({
	url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
	success: function (data) {
		console.log(data);
		document.querySelector(".card-title").innerHTML = data.info.heading;	
		document.querySelector(".card-text").innerHTML = data.info.description;	
		document.querySelector(".card-title1").innerHTML = data.sale.heading;	
		document.querySelector(".card-text1").innerHTML = data.sale.description;

	},

	error: function (error) {
		console.log(error);
	}
})
function urdu(){
	$.ajax({
		url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
		success: function (data) {
			console.log(data);
			document.querySelector(".card-title").innerHTML = data.info.heading;	
			document.querySelector(".card-text").innerHTML = data.info.description;	
			document.querySelector(".card-title1").innerHTML = data.sale.heading;	
			document.querySelector(".card-text1").innerHTML = data.sale.description;
		},
		error: function (error) {
			console.log(error);
		}
	})
}
function english(){
	$.ajax({
		url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en`,
		success: function (data) {
			console.log(data);
			document.querySelector(".card-title").innerHTML = data.info.heading;	
			document.querySelector(".card-text").innerHTML = data.info.description;	
			document.querySelector(".card-title1").innerHTML = data.sale.heading;	
			document.querySelector(".card-text1").innerHTML = data.sale.description;
		},
		error: function (error) {
			console.log(error);
		}
	})
}
function chines(){
	$.ajax({
		url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
		success: function (data) {
			console.log(data);
			document.querySelector(".card-title").innerHTML = data.info.heading;	
			document.querySelector(".card-text").innerHTML = data.info.description;	
			document.querySelector(".card-title1").innerHTML = data.sale.heading;	
			document.querySelector(".card-text1").innerHTML = data.sale.description;
		},
		error: function (error) {
			console.log(error);
		}
	})
}



