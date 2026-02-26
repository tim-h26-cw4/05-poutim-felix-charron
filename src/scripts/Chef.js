import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    // console.log('# 1 - Je mange de la poutine');
    this.menu = [];
    this.element = element;
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
      console.log(this.menu);
    }

    const btnCommande = this.element.querySelector('.button');
    btnCommande.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {}
}
