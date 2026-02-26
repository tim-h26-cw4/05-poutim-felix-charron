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

  selectType(event) {
    console.log('POUTINE MIAM!!!');
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      if (type.classList.contains('is-active')) {
        type.classList.remove('is-active');
      }
    }
    const btnClicked = event.currentTarget;
    btnClicked.classList.add('is-active');

    this.selectedType = btnClicked.textContent;
    console.log(this.selectedType);
    this.updatedPhoto();
  }

  updatedPhoto() {}
}
