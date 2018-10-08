	function initialize(){
		$.ajax({
			url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
			success: function (data) {
				console.log(data);
				document.querySelector(".nav-link").innerHTML=data.menuOptions[0];
				document.querySelector(".nav1").innerHTML=data.menuOptions[1];
				document.querySelector(".nav2").innerHTML=data.menuOptions[2];
				document.querySelector(".nav3").innerHTML=data.menuOptions[3];
				document.querySelector(".card-title").innerHTML=data.info.heading;
				document.querySelector(".card-text").innerHTML=data.info.description;
				// document.querySelector(".text-muted").innerHTML=data.date;
				document.querySelector(".shugi").style='background-image:url(${data.imageURL})';
				document.querySelector(".crd1").innerHTML=data.sale.heading;
				document.querySelector(".p1").innerHTML=data.sale.description;
			},
			error: function (error) {
				console.log(error);
			}
		});
	}
	function language(locale){
		$.ajax({
			url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=`+locale,
			success: function (data) {
				console.log(data);
				document.querySelector(".nav-link").innerHTML=data.menuOptions[0];
				document.querySelector(".nav1").innerHTML=data.menuOptions[1];
				document.querySelector(".nav2").innerHTML=data.menuOptions[2];
				document.querySelector(".nav3").innerHTML=data.menuOptions[3];
				document.querySelector(".card-title").innerHTML=data.info.heading;
				document.querySelector(".card-text").innerHTML=data.info.description;
				// document.querySelector(".text-muted").innerHTML=data.date;
				document.querySelector(".shugi").style='background-image:url(${data.imageURL})';
				document.querySelector(".crd1").innerHTML=data.sale.heading;
				document.querySelector(".p1").innerHTML=data.sale.description;

			},
			error: function (error) {
				console.log(error);
			}
		});
	}
