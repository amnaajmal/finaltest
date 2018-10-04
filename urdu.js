$.ajax({
	url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
	success: function (data) {
		console.log(data);
		document.querySelector(".text-muted span").innerHTML = data.date;
		document.querySelector(".card-title").innerHTML = data.info.heading;	
		document.querySelector(".card-text").innerHTML = data.info.description;	
		document.querySelector(".card-title1").innerHTML = data.sale.heading;	
		document.querySelector(".card-text1").innerHTML = data.sale.description;
		
	},

	error: function (error) {
		console.log(error);
	}
})