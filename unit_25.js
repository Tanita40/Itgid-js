// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-string
// method: GET
// Ответ сервера (строку случайных символов) - выводит в .out-1

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f1() {
  
   // 1створюємо обєкт запиту
    const xhr = new XMLHttpRequest();

   // 2 задаємо метод
   xhr.open('GET', `${URL}/api/25/random/random-string`);
   xhr.setRequestHeader('apikey', APIKEY);

   // 3 обробник відповіді
   xhr.onload = function () {
      console.log(xhr.response);

      const data= JSON.parse(xhr.response);
      console.log(data);

      let out = '';
      for (let key in data) {
         if (key === 'random-string') {
            out += data[key];
         }
      }
      document.querySelector('.out-1').innerHTML = out;

   }
   
   // 4 3відправляємо
   xhr.send();
   
}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-string
// method: GET
// в качестве query параметра задайте length равный числу из input .i-2
// Ответ сервера (строку случайных символов длиной length) - выводите в .out-2

// не забывайте для авторизации отправлять apikey с указанным ключом.


function f2(){
   let input = +document.querySelector('.i-2').value;
   // 1 
   const xhr = new XMLHttpRequest();

   // 2
   xhr.open('GET', `${URL}/api/25/random/random-string?length=${input}`);
   xhr.setRequestHeader('apikey', APIKEY);

   // 3
   xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      console.log(data);
      
     
      for ( let key in data) {
         if ( key === 'random-string') {
            console.log(data[key]);
            document.querySelector('.out-2').innerHTML = data[key];
         }
      }
     
   }
   // 4
    xhr.send();
}
document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: POST
// если запрос отправлен верно, то будет получен массив с описаниями рас игры "Космические рейнджеры"
// выведите в .out-3 названия рас (race) через пробел.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f3(){
   //  1
   const xhr = new XMLHttpRequest();
   // 2
   xhr.open('POST', `${URL}/api/25/sr/read`);
   xhr.setRequestHeader('apikey', APIKEY);
   // 3
   xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      // console.log(data);

      for (let i in data) {
         console.log(data[i])
         for (let k in data[i]) {
            
            // console.log(data[i][k])
            console.log(data[i][k].race)
            document.querySelector('.out-3').innerHTML += data[i][k].race + ' ';
         }
      }
   }
   // 4
   xhr.send();
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-number
// method: GET
// укажите параметры запроса min = переменной min, max равное переменной max
// если запрос отправлен верно, то будет получен массив c случайным числом от min до max
// выведите в .out-4 полученное число.

// не забывайте для авторизации отправлять apikey с указанным ключом.

let min = 1000;
let max = 1150;

function f4(){
   // 1
   const xhr = new XMLHttpRequest();
   // 2
   xhr.open('GET', `${URL}/api/25/random/random-number?min=${min}&max=${max}`);
   xhr.setRequestHeader('apikey', APIKEY);

   // 3
   xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      
      console.log(data);
      for ( let key in data) {
         if ( key === 'random-number') {
            console.log(data[key])
            document.querySelector('.out-4').innerHTML = data[key];
         } 
      }
      
   }
   xhr.send();
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-number
// method: POST
// укажите параметры в body POST запроса min = переменной min, max равное переменной max, формат - form-data.
// если запрос отправлен верно, то будет получен массив c случайным числом от min до max
// выведите в .out-5 полученное число.


function f5(){
   const xhr = new XMLHttpRequest();

   xhr.open('POST', `${URL}/api/25/random/random-number`);
   xhr.setRequestHeader('apikey', APIKEY);

   const data = new FormData();
   data.append('min', min);
   data.append('max', max);

   xhr.onload = function ()  {

      const data = JSON.parse(xhr.response);
      console.log(data);

      
      for ( let key in data) {
         if ( key === 'random-number') {
            document.querySelector('.out-5').innerHTML = data[key];
         }
      }
       
   }

   xhr.send(data); 
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/circle
// method: POST
// без аргументов
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status
// выведите сообщение ответа сервера в out-6-response

function f6(){
   const xhr = new XMLHttpRequest();
   xhr.open('POST', `${URL}/api/25/random/circle`);
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = function () {
      console.log(xhr.status);
      console.log(xhr.response);

      document.querySelector('.out-6-status').innerHTML = xhr.status;
      document.querySelector('.out-6-response').innerHTML = xhr.response;
   }

   xhr.send();
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: GET
// укажите параметр запроса race = переменной requestRace
// если запрос отправлен верно, то будет получен массив c описанием расы гаальцев из игры "Космические рейнджеры"
// выведите в .out-7 изображение image расы. Для этого создайте image и присвойте src ссылку на изображение.
// В начале функции делайте очистку .out-7

// не забывайте для авторизации отправлять apikey с указанным ключом.

let requestRace = 'gaal';

function f7(){
   document.querySelector('.out-7').innerHTML = '';
   let imgRace = document.createElement('img');
   const xhr = new XMLHttpRequest();

   xhr.open('GET',  `${URL}/api/25/sr/read?race=${requestRace}`);
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = function (){
      
      const data = JSON.parse(xhr.response);
      console.log(data);
     
      imgRace.src = URL + '/images/sr/haal.png';
      document.querySelector('.out-7').appendChild(imgRace);
      console.log(imgRace)
   }

  xhr.send();  
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read
// method: POST
// без параметров
// если запрос отправлен верно, то будет получен массив сотрудников компании. 
// выведите в .out-8 число сотрудников компании itemCount.

function f8(){
   let xhr = new XMLHttpRequest();

   xhr.open('POST', `${URL}/api/25/employee/read`);
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = function () {
      let data = JSON.parse(xhr.response);
      console.log(data);
      
      for ( let key in data) {
         if (key === 'itemCount') {
            console.log(data[key]);
            document.querySelector('.out-8').innerHTML = data[key];
         }
      }
      
   }
xhr.send();
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read/5
// method: POST
// где 5 - число считываемое из input .i-9. Понятно, что число может быть введено в input - любое.
// если запрос отправлен верно, то будет получен массив с описанием сотрудника компании с id = 5
// выведите обозначение (designation) сотрудника в .out-9

function f9(){
   let input = +document.querySelector('.i-9').value;
    let xhr = new XMLHttpRequest();

    xhr.open('POST', `${URL}/api/25/employee/read/${input}`)
    xhr.setRequestHeader('apikey', APIKEY);

    xhr.onload = function () {
      let data = JSON.parse(xhr.response);
      // console.log(data);

      
      for ( let i in data) {
         // console.log(data[i].designation)
         document.querySelector('.out-9').innerHTML = data[i].designation;
      }
      
    }
    xhr.send();
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read/7
// method: GET
// если запрос отправлен верно, то будет получен массив данных сотрудника с id = 7
// число 7 получайте с input .i-10
// выведите в .out-10 возраст сотрудника, данные которого вы получили.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f10(){
   let input = +document.querySelector('.i-10').value;
   let xhr = new XMLHttpRequest();
   xhr.open('GET', `${URL}/api/25/employee/read/${input}`);
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = function () {
      
      let data = JSON.parse(xhr.response);
      console.log(data);
   
      for ( let key in data) {
         console.log(data[key].age)
         document.querySelector('.out-10').innerHTML = data[key].age;
      }
      
   }
   xhr.send();
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-11 (form-data) 
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине.
// выведите в .out-11 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

function f11(){
   let input = +document.querySelector('.i-11').value;
   let xhr = new XMLHttpRequest();

   xhr.open('POST', URL + '/api/25/random/generate-password');
   xhr.setRequestHeader('apikey', APIKEY);

   const data = new FormData();
   data.append('length', input);

   xhr.onload = function () {
     
      const data = JSON.parse(xhr.response);
      console.log(data['password']);
   
      document.querySelector('.out-11').textContent = data['password'];
   }
   xhr.send(data);
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
// укажите в boyd POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.


function f12(){
   
   const data = new FormData();
    data.append("length", document.querySelector('.i-12').value);
    data.append("symbols", document.querySelector('.ch-12').checked ? 1 : 0);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", URL+"/api/25/random/generate-password");
    xhr.setRequestHeader("apikey", APIKEY);

    xhr.onload = function() {
        console.log(xhr.status);
        // console.log(xhr.response);
        let data = JSON.parse(xhr.response);
        console.log(data);
        document.querySelector('.out-12').textContent = data['password'];
    };

    xhr.send(data);
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

function f13(){
    const data = new FormData();
    data.append('length', document.querySelector('.i-13').value)
    data.append('symbols', document.querySelector('.ch-131').checked ? 1 : 0);
    data.append('uppercase', document.querySelector('.ch-132').checked ? 1 : 0);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', URL + '/api/25/random/generate-password');
    xhr.setRequestHeader('apikey', APIKEY);

    xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      console.log(data);
      console.log(data['password']);
      document.querySelector('.out-13').textContent = data['password'];
    }
    xhr.send(data);

}

document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read/human
// method: GET
// human - аргумент (название расы), который получается из s-14.
// если все сделано верно, то получите массив с описанием расы из игры КР.
// выведите в .out-14 описание description расы (вывод через innerHTML)

function f14(){
    let race = document.querySelector('.s-14').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL + `/api/25/sr/read/${race}`);
    xhr.setRequestHeader('apikey', APIKEY);

    xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      console.log(data);
      for ( let key in data) {
        
         for ( let i in data[key]) {
            if ( i === 'description') {
               console.log(data[key].description);
               
               document.querySelector('.out-14').innerHTML =data[key].description;
            }
         }    
      }  
   }
    xhr.send();
}

document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: POST
// 
// если все сделано верно, то получите массив с описанием всех рас из игры КР.
// выведите в .out-15 изображения всех рас. 
// в начале функции очистите .out-15
// выведите изображения рас в .out-15

function f15(){
   document.querySelector('.out-15').innerHTML = '';
   
   const xhr = new XMLHttpRequest();
   xhr.open('POST', URL + '/api/25/sr/read');
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = function () {
      let data = JSON.parse(xhr.response);
      console.log(data);
      for ( let key of data.result) {
         let imgRace = document.createElement('img');
         imgRace.setAttribute('src', `${URL}${key.image}`);
         document.querySelector('.out-15').appendChild(imgRace);
      }
   }
  
   
xhr.send()
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/world
// method: GET
// 
// если все сделано верно, то получите массив с описанием всех миров игры GoW.
// выведите в .out-16 названия (title) миров через пробел. 

function f16(){
   const xhr = new XMLHttpRequest();
   xhr.open('GET', URL + '/api/25/gow/world');
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      console.log(data);

      for ( let key of data.worlds) {
         console.log(key.title);
         document.querySelector('.out-16').innerHTML += `${key.title}${' '}`;
      }
       
   }
xhr.send();
}


document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-17.
// если все сделано верно, то получите описание выбранного в select .s-17 
// выведите в .out-17 описание мира. 

function f17(){
   let world = document.querySelector('.s-17').value;
   const xhr = new XMLHttpRequest();
   xhr.open('GET', `${URL}/api/25/gow/world/${world}`);
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      console.log(data);

       for (let key in data) {
         for (let i in data[key]) {
            if (i === 'description') {
               console.log(data[key].description);
               document.querySelector('.out-17').innerHTML = data[key].description;
            }
         } 
       }
   }
   xhr.send();

}


document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/rune
// method: POST
// если все сделано верно, то получите массив с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира. 
// выполните очистку .out-18 в начале функции

function f18(){
   document.querySelector('.out-15').innerHTML = '';
   const xhr = new XMLHttpRequest();
   xhr.open('POST', `${URL}/api/25/gow/rune`);
   xhr.setRequestHeader('apikey', APIKEY);

   xhr.onload = function () {
      const data = JSON.parse(xhr.response);
      console.log(data);

      
      for ( let key in data.rune) {
         let imgRune = document.createElement('img');
         imgRune.setAttribute('alt', key);
         imgRune.src = `${URL}${data.rune[key]}`;
         console.log(imgRune);
         document.querySelector('.out-18').appendChild(imgRune);
      }

   }
   
xhr.send();
}


document.querySelector('.b-18').onclick = f18;
