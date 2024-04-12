

class Goods {
   constructor(name, price, img, num) {
      this.name = name;
      this.price = price;
      this.image = img;
      this.count = num;
   }
   draw() {
      let div = document.createElement('div');
      div.classList.add('goods');
      let h = document.createElement('h1');
      h.innerText = this.name;
      div.append(h);

      let p = document.createElement('p');
      p.classList.add('price');
      p.innerText = this.price
      div.append(p);

      let img = document.createElement('img');
      img.src = this.image;
      img.setAttribute('alt', this.name);
      div.append(img);

      return div;
   }

}