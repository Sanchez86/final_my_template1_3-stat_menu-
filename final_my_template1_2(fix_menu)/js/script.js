/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

/* конец кнопка на верх*/


/*плавные переходы по якорям*/

$(document).ready(function () {
   
    $("#navbar").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 147;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').stop().animate({ scrollTop: top }, 1000);
    });

    $(".nav").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 147;

        //анимируем переход на расстояние - top за 1500 мс
        //$('body,html').animate({scrollTop: top}, 1000);
    });


/*конец плавные переходы по якорям*/

/*фиксированное верхнее меню*/

var myHeight = $("#navbar").height(); //определил высоту менюхи
$(".wrap").css('marginTop', myHeight); //опустил контент относителньо высоты меню
var myFontSize = $('.navbar-nav li a').css('font-size');//узнаю размер шрифта
myFontSize = parseInt(myFontSize);//привожу к числу.(убирая px)

 $(window).scroll(function () {
	 if($(this).scrollTop()>myHeight){//если скролл находится ниже высоты мпенюхи
		 $('.navbar-brand img').css('width','70%');//то уменьшаю изображение на на 70% 
		 $('#navbar').css('background-color','rgba(34,34,34,0.5)');/*добавляю прозрачности в 50%*/
		//$('.navbar-inverse .navbar-nav li a').css('font-size',myFontSize-2);
	 }if($(this).scrollTop()<myHeight){
		$('.navbar-brand img').css('width','100%');
		$('#navbar').css('background-color','rgba(34,34,34,1)');/*убираю прозрачности*/
		//$('.navbar-inverse .navbar-nav li a').css('font-size',myFontSize+2);
	 }
 });

/* конец фиксированное верхнее меню*/



});














