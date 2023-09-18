export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const firstRule = /[\w]/.test(this.name);
    if (!firstRule) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }

    const secondRule = /^[a-zA-Z]/.test(this.name);
    if (!secondRule) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире');
    }

    const thirdRule = /[a-zA-Z]$/.test(this.name);
    if (!thirdRule) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
    }

    const fourthRule = /\d{4}/.test(this.name);
    if (fourthRule) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }

    return true;
  }
}
