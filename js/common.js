$(document).ready(function() {
    $(".nav-btn").click(function(){
        $(this).next().slideToggle();  
        console.log(this);
    });
    $(".form_g").magnificPopup();
    $(".cont5-p").addClass("cont5-p-on");
    $(".cont4 p").waypoint(function() {
        $(".cont5-p").removeClass("cont5-p-on").addClass("cont5-p-off");
    });

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
    
});

$(window).load(function() {
    $(".head-ramk-l h1").animated("fadeInLeft");
    $(".head-imges img").animated("fadeInRight");
    $(".cont1-contnent").animated("fadeInLeft");
    $(".st-h2").animated("fadeInUp");
    $(".cont4 .col-lg-3").animated("fadeInRight");
    $(".footer .col-lg-6").animated("fadeInRight");
    $(".cont-us").animated("bounce");
    $(".cont2 .col-lg-8").animated("fadeInLeft");
    $(".cont2 .col-lg-4").animated("fadeInUp");
});