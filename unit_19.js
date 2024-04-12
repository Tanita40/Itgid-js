
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
   
   let t = document.querySelector('.div-1');
   out = t.textContent;
   return t.textContent 
}

document.querySelector('.div-1').onclick = ()=> {
   document.querySelector('.out-1').innerHTML = t1()
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {

return event['altKey'];

}
document.querySelector('.div-2').onclick = (event) => {
   document.querySelector('.out-2').innerHTML = t2(event);
} 
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
   let out = document.querySelector('.out-3');

   document.querySelector('.div-3').style.width = w3 + 'px'
   
   w3 += 5; 
   out.innerHTML = w3

}
document.querySelector('.div-3').onclick = () => t3();
   

// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
   
   let t  = document.querySelector('.div-4');
   out = t.textContent;
   return t.textContent;

}
document.querySelector('.div-4').ondblclick = () => {
   document.querySelector('.out-4').innerHTML = t4();
}
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
   document.querySelector('.div-5').classList.toggle('active')
}
document.querySelector('.div-5').ondblclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
   let elem  = document.querySelector('.ul-6');
   elem.classList.toggle('hide');
   
   console.log(elem);
}
document.querySelector('.div-6').ondblclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    document.querySelector('.div-7').classList.toggle('active');
    
}

document.querySelector('.div-7').oncontextmenu = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
   let c = document.querySelector('.ch-8');
   if ( c.checked) {
      c.oncontextmenu = function() {
         return false
      } 
   }
    else {
         c.contextmenu = null;
      }
      
   } 
   

document.querySelector('.ch-8').onchange = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
   let elem = document.querySelector('.div-9');
   let img = document.querySelector('.div-9 img');
   img.src="img/2.png";
  
}
document.querySelector('.div-9').oncontextmenu = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
   
   let img = document.querySelector('.div-10 img');
   img.src = 'img/2.png';

}
document.querySelector('.div-10').onmouseenter = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let img = document.querySelector('.div-11 img');
function t11() {
      img.src = 'img/2.png'
   img.onmouseleave = null

}
document.querySelector('.div-11').onmouseenter = t11;
document.querySelector('.div-11').onmouseleave = () => {img.src = 'img/1.png'}
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
function t12 () {
   document.querySelector('.div-12').classList.toggle('active');
  
}
// функцию пишите самостоятельно
document.querySelector('.div-12').onmousedown = t12
// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

// функцию пишите самостоятельно
function t13 () {
 let c = document.querySelector('.div-13');
   if (c.onmousedown) {
         c.classList.toggle('active')
   } else {
      return false
   }
   console.log(c)
}
// ваше событие здесь!!!
document.querySelector('.div-13').onmousedown = t13

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
   let button = document.querySelector('.b-14');
   if (button.onclick) {
      document.querySelector('.div-14').classList.toggle('active');
   }

}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let num = 0;

function t15() {
      num++;
      document.querySelector('.div-15').innerHTML = num;
   
   console.log(num);

}
// ваше событие здесь!!!
document.querySelector('.div-15').onmousemove = t15;


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
   let w = 75;
function t16() {
   document.querySelector('.div-16').style.width = w + 'px';
   w++;

}
// ваше событие здесь!!!
document.querySelector('.div-16').onmousemove = t16;

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
let on = document.querySelector('.div-16');
function t17On() {
   on.onmousemove = t16;
}
let off = document.querySelector('.div-16');
function t17Off() {
   off = on.onmousemove = null;
   
}
// ваше событие здесь!!!
document.querySelector('.b-17_on').onclick = t17On
// ваше событие здесь!!!
document.querySelector('.b-17_off').onclick = t17Off
// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {
   let out18 = document.querySelector('.div-18');
    out18.textContent = out18.offsetWidth;
   console.log(out18)

}
// ваше событие здесь!!!
document.querySelector('.div-18').onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
function t19() {
   let out19 = document.querySelector('.div-19');
   let a = [];
   
   for ( let item of out19.classList) {
      a.push(item) + '';
      
   }
   console.log(a)
   out19.textContent += a;
}
// ваше событие здесь!!!
document.querySelector('.div-19').onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let p = 0;
function t20() {
   p++;
   document.querySelector('progress').value = p;
   console.log(p)
}
// ваше событие здесь!!!
document.querySelector('progress').onmousemove = t20;