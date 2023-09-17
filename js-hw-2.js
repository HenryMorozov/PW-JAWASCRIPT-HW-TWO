

var age = prompt('Введите Ваш возраст');

if (age >= 0 && age <=18) {
   alert('Вы ещё молоды Вам нужно учиться');
}else if (age > 18 && age <=50 ) {
   alert('Вам нужно работать');
}else if (age > 50 && age <=59) {
   alert('Вам скоро на пенсию');
}else if (age > 59 && age <=100) {
   alert('Вы пенсионер');
}else {
   alert ('Что-то пошло не так');
}


var time = prompt('Введите время') 

switch (true) {
    case time >= 0 && time <= 6:
        alert(time + ' часа/часов ночи');
        break;
    case time >= 7 && time <= 10:
        alert(time + ' часа/часов утра');
        break;
    case time >= 11 && time <= 17:
        alert(time + ' часа/чсаов дня');
        break;
    case time >= 18 && time <= 23:
        alert(time + ' часа/часов вечера');
        break;
    default: alert('Вы ввели не корктную форму времени')
        break;
}


da = +prompt("Введите число:");
net = +prompt("Введите число:");
navernoe = +prompt("Введите число:");
	
if (da > net) (net < navernoe)
var vinosmozga = net;
alert(vinosmozga);

if (da < net) (da > navernoe)
var vinosmozga = da;
alert(vinosmozga);

if (navernoe < da) (navernoe > net)
var vinosmozga = navernoe;
alert(vinosmozga);


