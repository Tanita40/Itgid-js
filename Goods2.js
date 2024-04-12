
// Допишите в класс Goods2 свойство sale. При задании данного свойства мы будем задавать либо true либо false. Свойство определяет является или нет товар акционным. Для проверки, создайте объект на основе Goods2 с такими аргументами:

// const goods_2 = new Goods2('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400, true );
// console.log(goods_2);

class Goods2 extends Goods {
   constructor (name, price, img, num, sale) {
      super(name, price, img, num);
      this.sale = sale;
   }

   draw() {
      const div = super.draw();
         if (this.sale) {
         let s = document.createElement('h2');
         s.textContent = 'Pаспродажа';
         div.append(s);
      }
      return div;
   }
}