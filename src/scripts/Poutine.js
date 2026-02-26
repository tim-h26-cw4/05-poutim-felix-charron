export default class Poutine {
  constructor(element) {
    // console.log('# 2 - Miam Miam Poutine!');
    this.element = element;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType() {
    console.log('POUTINE MIAM!!!');
  }
}
