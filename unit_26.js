// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read
// method: GET

// Результат - объект со списком сотрудников. Выведите в out-1 возраст сотрудников через пробел.
// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f1() {
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/employee/read`, {
      method: 'GET',
      headers: requestHeaders
   });

   const result = await res.json();
   console.log(result);

   for (let key in result) {
      for (let i in result[key]) {
         console.log(result[key][i].age)
         document.querySelector('.out-1').innerHTML += `${result[key][i].age} `;
      } 
   }
}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read?id=3
// method: GET
// в качестве query параметра задайте id равный числу из input .i-2

// Результат - объект с описанием сотрудника. Выведите в out-2 email полученного сотрудника.



async function f2(){
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);
   let inp = +document.querySelector('.i-2').value;

   const res = await fetch(`${URL}/api/26/employee/read?id=${inp}`, {
      method: 'GET',
      headers: requestHeaders
   });
   const result = await res.json();
   console.log(result);

   for ( let key in result) {
      
      // console.log(result[key].email)
      document.querySelector('.out-2').textContent = result[key].email;
   }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// /api/26/employee/read/5
// method: POST
// число 5 получите из input .i-3

// Результат - объект с описанием сотрудника. Выведите в out-3 name полученного сотрудника.

async function f3(){
   let inp = +document.querySelector('.i-3').value;
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const formData = new FormData();
   formData.append('name', inp);

   const res = await fetch(`${URL}/api/26/employee/read/${inp}`, {
      method: 'POST',
      headers: requestHeaders,
      body: formData
   });

   const result = await res.json();
   console.log(result);
   for (key in result) {
      document.querySelector('.out-3').textContent = result[key].name
   }
   
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read
// method: POST

// Результат - объект с описанием рас игры КР. Выведите в out-4 название рас (title) через пробел.


async function f4(){
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   // const formData = new FormData();
   // formData.append()
   const res = await fetch(`${URL}/api/26/sr/read`, {
      method: 'POST',
      headers: requestHeaders
   });

   const result = await res.json();
   console.log(result);

   for (key in result) {
      for ( let i in result[key]) {
         console.log(result[key][i].title)
         document.querySelector('.out-4').textContent += `${result[key][i].title} `
      }
      
   }
   
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read?race=gaal
// method: GET
// где gaal - название расы полученное из select .s-5

// Результат - объект с описанием указанной расы. Выведите в out-5 описание расы (description). Вывод осуществляйте через innerHTML.


async function f5(){
   let select = document.querySelector('.s-5').value;
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/sr/read?race=${select}`, {
      method: 'GET',
      headers: requestHeaders
   });

   const result =await res.json();
   console.log(result);
   for ( key in result) {
      
      for ( i in result[key]) {
         if ( i === 'description')
         console.log(result[key][i])
         document.querySelector('.out-5').innerHTML = result[key][i];
      }
       
   }
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/run
// method: GET
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status

async function f6(){
   
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/run`, {
      method: 'GET',
      headers: requestHeaders
   });

   console.log(res.status);
   document.querySelector('.out-6-status').innerHTML = res.status;
   
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read/human
// method: POST
// human - название расы из select .s-7

// Результат - объект с описанием указанной расы. Выведите в out-7 изображение расы. Картинку формируйте через createElement. 
// В начале функции делайте очистку .out-7.


async function f7(){
   document.querySelector('.out-7').innerHTML = '';
   let select = document.querySelector('.s-7').value;
   let raceImg = document.createElement('img');
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/sr/read/${select}`, {
      method: 'POST',
      headers: requestHeaders
   });
   const result = await res.json();
   console.log(result);
   // console.log(result['image]})
   for (let key in result) {
      for (let i in result[key]) {
         if ( i === 'image') {
            let raceImg = document.createElement('img');
            raceImg.src = `${URL}${result[key].image}`
         console.log(raceImg)
            document.querySelector('.out-7').appendChild(raceImg);
         }
        
      }
     
   }
 
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: GET
// если запрос отправлен верно, то будет получен объект со случайным числом
// выведите в .out-8 данное число.

async function f8(){
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/random/random-number`, {
      method: 'GET',
      headers: requestHeaders
   });

   const result = await res.json();
   console.log(result['random-number']);
   document.querySelector('.out-8').textContent = result['random-number'];
   
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number?min=100&max=110
// method: GET
// где min - число из переменной min. Max - число из переменной max.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-9

let min = 400;
let max = 500;

async function f9(){
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/random/random-number?min=${min}&max=${max}`, {
      method: 'GET',
      headers: requestHeaders
   });

   const result = await res.json();
   console.log(result);
   console.log(result['random-number']);
   document.querySelector('.out-9').innerHTML = result['random-number'];
    
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: POST
// в теле POST запроса передайте параметры min равные переменной min и max равное переменной max. Формат - formdata.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-10

async function f10(){
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const formData = new FormData();
   formData.append('min', min);
   formData.append('max', max);

   const res = await fetch(`${URL}/api/26/random/random-number`, {
      method: 'POST',
      headers: requestHeaders,
      body: formData
   });

   const result = await res.json();
   console.log(result['random-number']);
   document.querySelector('.out-10').innerHTML = result['random-number'];
   
    
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-string?length=16
// method: GET
// Значение длины строки получаем из input .i-11

// Если запрос сделан правильно, то сервер возвратит объект с строкой случайных символов длиной 16.
// Выведите строку в .out-11

async function f11(){
   let input = +document.querySelector('.i-11').value;

   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/random/random-string?length=${input}`, {
      method: 'GET',
      headers: requestHeaders
   });
   const result = await res.json();
   console.log(result['random-string']);
   document.querySelector('.out-11').innerHTML = result['random-string'];
   
    
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.



async function f12(){
   

   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const formData = new FormData();
   formData.append('length', document.querySelector('.i-12').value);
   formData.append('symbols', document.querySelector('.ch-12').checked ? 1 : 0);


   const res = await fetch(`${URL}/api/26/random/generate-password`, {
      method: 'POST',
      headers: requestHeaders,
      body: formData
   });
   
   const result  = await res.json();
   console.log(result['password']);
    document.querySelector('.out-12').textContent = result['password'];
   
   
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f13(){
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const formData = new FormData();
   formData.append('length', document.querySelector('.i-13').value);
   formData.append('symbols', document.querySelector('.ch-131').checked ? 1 : 0);
   formData.append('uppercase', document.querySelector('.ch-132').checked ? 1 : 0);

   const res = await fetch(`${URL}/api/26/random/generate-password`, {
      method: 'POST',
      headers: requestHeaders,
      body: formData
   });

   const result = await res.json();
   console.log(result['uppercase'])
   document.querySelector('.out-13').textContent = result['password']

}

document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world
// method: GET
// если все сделано верно, то получите объект с описанием миров игры GoW
// выведите в .out-14 title миров через пробел. 

async function f14(){
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/gow/world`, {
      method: 'GET', 
      headers: requestHeaders
   });

   const result = await res.json();
   console.log(result);
   for ( let key in result) {
      // console.log(result[key])
      for (let i in result[key]) {
         console.log(result[key][i].title)
      document.querySelector('.out-14').innerHTML += `${result[key][i].title} `
      }
   }
   
}

document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-15
// выведите описание мира (description) в out-15

async function f15(){
   let select = document.querySelector('.s-15').value;
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/gow/world/${select}`, {
      method: 'GET',
      headers: requestHeaders
   });
   const result = await res.json();
   console.log(result);
   for ( let key in result) {
      console.log(result[key])
      for (let i in result[key]) {
         if (i === 'description') {
            console.log(result[key][i]);
            document.querySelector('.out-15').textContent = result[key][i];
         }
         
      }
   }
   
}


document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/governor/сурт
// method: GET
// имя правителя - получите из select .s-16
// если все сделано верно, то получите объект с описанием мира где правитель Сурт игры GoW. 
// выведите в .out-16 руну данного мира. Как изображение (createElement). Очищайте out-16 в начале функции.

async function f16(){
   document.querySelector('.out-16').innerHTML = '';
   let select = document.querySelector('.s-16').value;

   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/gow/governor/${select}`, {
      method: 'GET',
      headers: requestHeaders
   });
   const result = await res.json();
   console.log(result);
   for (let key in result) {
      for( let i in result[key]) {
         if ( i ==='rune') {
            console.log(result[key][i])
            let imgRune = document.createElement('img');
            imgRune.src = `${URL}${result[key][i]}`
            console.log(imgRune);
            document.querySelector('.out-16').appendChild(imgRune);

         }
      }
   }
 
   
    
}


document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/get-time
// method: POST
// если все сделано верно, то получите объект с текущим временем сервера.
// выведите в .out-17 время в формате час:минуты

async function f17(){
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/get-time`, {
      method: 'POST',
      headers: requestHeaders
   });

   const result = await res.json();
   console.log(result)
   for (let key in result['time']) {
      console.log(result['time'].h + ':' + result['time'].m)
      document.querySelector('.out-17').innerHTML = `${result['time'].h}:${result['time'].m}`;
   }
}


document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/rune
// method: POST
// если все сделано верно, то получите объект с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира. 
// выполните очистку .out-18 в начале функции

async function f18(){
   document.querySelector('.out-18').innerHTML = '';
   const requestHeaders = new Headers();
   requestHeaders.append('apikey', APIKEY);

   const res = await fetch(`${URL}/api/26/gow/rune`, {
      method: 'POST',
      headers:requestHeaders
   });
   const result = await res.json();
   console.log(result);
   for ( let key in result.rune) {
      // console.log(key)
      // console.log(result.rune[key]);
     
      let runeImg = document.createElement('img');
      runeImg.setAttribute('alt', key);
      runeImg.src = `${URL}${result.rune[key]}`;
      console.log(runeImg);
      document.querySelector('.out-18').appendChild(runeImg);

   }
   
 
}


document.querySelector('.b-18').onclick = f18;
